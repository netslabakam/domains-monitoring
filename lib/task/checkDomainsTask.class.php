<?php

class checkDomainsTask extends sfBaseTask
{
    protected function configure()
    {
        // // add your own arguments here
        // $this->addArguments(array(
        //   new sfCommandArgument('my_arg', sfCommandArgument::REQUIRED, 'My argument'),
        // ));

        $this->addOptions(array(
            new sfCommandOption('application', null, sfCommandOption::PARAMETER_REQUIRED, 'The application name', 'www'),
            new sfCommandOption('env', null, sfCommandOption::PARAMETER_REQUIRED, 'The environment', 'dev'),
            new sfCommandOption('connection', null, sfCommandOption::PARAMETER_REQUIRED, 'The connection name', 'doctrine'),
            // add your own options here
        ));

        $this->namespace = 'check';
        $this->name = 'domains';
        $this->briefDescription = '';
        $this->detailedDescription = <<<EOF
The [test:local|INFO] task does things.
Call it with:

  [php symfony check:domains|INFO]
EOF;
    }

    protected function execute($arguments = array(), $options = array())
    {


        $databaseManager = new sfDatabaseManager($this->configuration);
        $connection = $databaseManager->getDatabase($options['connection'])->getConnection();
        $ip_address = Doctrine::getTable('RegList')->findAll();
        $clients = Doctrine::getTable('ClientList')->findAll();
        $emails = array();
        if(csSettings::get('email')){
            $emails[] = csSettings::get('email');
        }

        $hosts = Doctrine::getTable("DomainList")->findAll();

        $ips = array();
        foreach ($ip_address as $regid)
        {
            $ips[] = $regid['address'];
        }

        $myips_dirty = Doctrine_Query::create()
            ->select('s.*')
            ->from('ServerList s')
            ->fetchArray();

        $myips = array();
        foreach ($myips_dirty as $item) {
            $myips[$item['ip_address']] = $item['title'];
        }


        foreach ($hosts as $host) {

            $url = "https://www.".$host->getDomain();
//            $this->log($url);
            $orignal_parse = parse_url($url, PHP_URL_HOST);
            $get = stream_context_create(array("ssl" => array("capture_peer_cert" => TRUE)));
            $read = stream_socket_client("ssl://".$orignal_parse.":443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $get);
            $cert = stream_context_get_params($read);
            $certinfo = openssl_x509_parse($cert['options']['ssl']['peer_certificate']);
            $ssllinux = ($certinfo['validTo_time_t']);




            $ssldate =  gmdate("Y-m-d h:i:s", $ssllinux);





            if ($certinfo != null)
            {
                $host->setSslexp($ssldate);
                $host->save();

            }

            $test = json_decode(file_get_contents('http://api.whois.vu/?q='.$host->getDomain() . "&clean"), true );

            $who_is_dirty = explode("\n", $test['whois']);

            $who_is = array();
            foreach ($who_is_dirty as $key => $item) {
                $item = explode(':', $item);
                $who_is[trim($item[0])] = trim($item[1]);
            }

            $reg_is = array();
            foreach ($who_is_dirty as $key => $reg){
                $reg = explode('//', $reg);
                $reg_is[trim($reg[0])] = trim($reg[1]);
            }

            $ip = gethostbyname($test['domain']);


            if($who_is['Registry Expiry Date'] != null)
            {
                $host->setExpiresAt($who_is['Registry Expiry Date']);
            }
            else
            {
                if($who_is['paid-till']){
                    $host->setExpiresAt($who_is['paid-till']);
                }
            }
            $host->setServer($ip);
            $host->setLastCheck(date("Y-m-d H:i:s"));
            $host->save();

            $expires = $host->getExpiresAt();
            if($expires)
            {
                $date = substr($expires, 0,10);

                $date_now = date_create(date('Y-m-d'));
                $date_db = date_create($date);

                $date_diff = date_diff($date_now,$date_db);

                $days = $date_diff->days;
            }else{
                $days = 0;
            }




            if (strlen($host->getClientList()->getEmail()) > 0 ) {
                $emails = array_merge($emails, array($host->getClientList()->getEmail()));
            }


            $emails = array_unique($emails);

            if (count($emails) > 0) {
                if ($days == 30 || $days == 7 || $days <= 0) {

                    $text = 'Срок регистрации вашего домена ' . $host->getDomain() . ' ' .
                        ($days <= 0 ? 'истек' : 'закончится через ' . $days . ' дней') . '. ' .
                        (array_key_exists($ip, $myips) ? 'Домен хостится на нашем сервере ' . $ip . ' ' . $myips[$ip] : 'Домен хостится на стороннем сервере') .'. '.
                        ($host->getSslexp() != null ? 'SSL сертификат активен до ' . $host->getSslexp() . ' ' :  ' ') ;

                    $message = $this->getMailer()->compose(
                        'umurzakov.farruh@yandex.ru',
                        $emails,
                        'Предупреждение о сроке регистрации домена ' . $host->getDomain() . ' ',
                        $text
                    );
                    $this->getMailer()->send($message);

                }
            }
        }

    }

}