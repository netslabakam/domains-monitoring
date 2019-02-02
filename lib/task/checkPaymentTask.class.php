<?php


class checkPayment extends sfBaseTask
{
    protected function configure()
    {
        // // add your own arguments here
        // $this->addArguments(array(
        //   new sfCommandArgument('my_arg', sfCommandArgument::REQUIRED, 'My argument'),
        // ));

        $this->addOptions(array(
            new sfCommandOption('application', null, sfCommandOption::PARAMETER_REQUIRED, 'The application name', 'arm'),
            new sfCommandOption('env', null, sfCommandOption::PARAMETER_REQUIRED, 'The environment', 'dev'),
            new sfCommandOption('connection', null, sfCommandOption::PARAMETER_REQUIRED, 'The connection name', 'doctrine'),
            // add your own options here
        ));

        $this->namespace = 'check';
        $this->name = 'payment';
        $this->briefDescription = '';
        $this->detailedDescription = <<<EOF
The [test:local|INFO] task does things.
Call it with:

  [php symfony check:payment|INFO]
EOF;
    }

    protected function execute($arguments = array(), $options = array())
    {


        $databaseManager = new sfDatabaseManager($this->configuration);
        $connection = $databaseManager->getDatabase($options['connection'])->getConnection();


//        $ip_address = Doctrine::getTable('RegList')->findAll();
        $clients = Doctrine::getTable('ClientList')->findAll();
//        $domains = Doctrine::getTable('DomainList')->findAll();


        $payment_days = csSettings::get('payment_days');

        foreach ($clients as $client) {

            $days = 0;

            $expires = $client->getPaidtill();
            if ($expires) {
                $date = substr($expires, 0, 10);

                $date_now = date_create(date('Y-m-d'));
                $date_db = date_create($date);

                $date_diff = date_diff($date_now, $date_db);

                $days = $date_diff->days;
            }

            if ($days == 0) {
                $client->setIsPaid(false);
                $client->save();
            } else{
                $client->setIsPaid(true);
                $client->save();
            }


            if ($expires){
                if ($days <= $payment_days){
                    $text = 'Ваш хостинг оплачен до '. $expires . '.'. ' Просим вас внести оплату.'.
                        ($client->getHostingPlans()->getName() != null ? ' Тарифный план - '. $client->getHostingPlans()->getName() :' ');
                    $message = $this->getMailer()->compose(
                        'umurzakov.farruh@yandex.ru',
                        /*$client->getEmail()*/'mr@atmadev.ru',
                        'Предупреждение о сроке оплаты за хостинг ',
                        $text
                    );
                    $this->getMailer()->send($message);
                }
            }

        }





    }
}