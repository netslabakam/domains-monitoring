<?php

/**
 * dom actions.
 *
 * @package    sf
 * @subpackage dom
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class domActions extends sfActions
{
  public function executeIndex(sfWebRequest $request)
  {
    $this->domain_lists = Doctrine::getTable('DomainList')
      ->createQuery('a')
      ->execute();
  }



    public function executeCheck(sfWebRequest $request)
    {
        if ($request->hasParameter('id') && is_numeric($request->getParameter('id')))
        {

            $host = Doctrine::getTable('DomainList')->find(array($request->getParameter('id')));
            if ($host)
            {
                $url = "https://www.".$host->getDomain();
                $orignal_parse = parse_url($url, PHP_URL_HOST);
                $get = stream_context_create(array("ssl" => array("capture_peer_cert" => TRUE)));
                $read = stream_socket_client("ssl://".$orignal_parse.":443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $get);
                $cert = stream_context_get_params($read);
                $certinfo = openssl_x509_parse($cert['options']['ssl']['peer_certificate']);
                $ssllinux = ($certinfo['validTo_time_t']);


                $ssldate =  gmdate("Y-m-d", $ssllinux);




                if ($certinfo != null)
                {
                    $host->setSslexp($ssldate);
                    $host->save();
                }




                $test = json_decode(file_get_contents('https://api.whois.vu/?q='.$host->getDomain() . "&clean"), true );
                $domainname = $test['domain'];


                echo($domainname);

                echo "\r\n";
                $domainname = preg_replace("(^https?://www.)", "", $domainname);
                echo $domainname;



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

                echo "\r\n";


                $ip = gethostbyname($domainname);

                echo $ip;
                echo "\r\n";



                if($who_is['Registry Expiry Date'] != null)
                {
                    $expdate = $who_is['Registry Expiry Date'];
                    echo substr($expdate, 0,10);



                    $host->setExpiresAt($expdate);
                    $host->setServer($ip);
                    $host->save();
                }
                else
                {
                    $paid_till = substr($who_is['paid-till'], 0, 10);



                    $host->setExpiresAt($paid_till);
                    $host->setServer($ip);
                    $host->save();
                }

//                $reglist = Doctrine::getTable('RegList')->findAll();
//
//                if ($who_is['Registrar URL'] != null )
//                {
//                    $registrator = $who_is['Registrar URL'];
//
//                    $reglist->setAddress($registrator);
//                    $reglist->save();
//                }
            }
            echo "\r\n";

//            print_r($registrator['http']);






            $expires = $host->getExpiresAt();
            $date = substr($expires, 0,10);

            $date_now = date_create(date('Y-m-d'));
            $date_db = date_create($date);

            $date_diff = date_diff($date_now,$date_db);
            echo '<pre>';
//            print_r($date_diff);
            echo '</pre>';

            $days = $date_diff->days;
            $month = $date_diff->days - 30;
            $week = $date_diff->days -7;
            echo "\r\n";

            print_r($days);
//
//            print_r($month);
//            echo "\r\n";
//
//            print_r($week);
//            echo "\r\n";
//
//            print_r($days);
//            echo "\r\n";

            die();
            if($month == 30)
            {
                echo 'осталось 30 дней';
                $message = Swift_Message::newInstance()
                    ->setFrom('umurzakov.farruh@yandex.ru')
                    ->setTo('ya.on-line@bk.ru')
                    ->setSubject('срок')
                    ->setBody('осталось 30 дней до окончания срока');

                $this->getMailer()->send($message);
            }else if($week == 7) {
                echo 'осталось 7 дней';
                $message = Swift_Message::newInstance()
                    ->setFrom('umurzakov.farruh@yandex.ru')
                    ->setTo('ya.on-line@bk.ru')
                    ->setSubject('срок')
                    ->setBody('осталось 7 дней до окончания срока');

                $this->getMailer()->send($message);
            }else if($days == 0)
            {
                echo 'срок истек';
                $message = Swift_Message::newInstance()
                    ->setFrom('umurzakov.farruh@yandex.ru')
                    ->setTo('ya.on-line@bk.ru')
                    ->setSubject('срок')
                    ->setBody('срок истек');

                $this->getMailer()->send($message);
            }
//            $message = Swift_Message::newInstance()
//                ->setFrom('umurzakov.farruh@yandex.ru')
//                ->setTo('ya.on-line@bk.ru')
//                ->setSubject('Subject')
//                ->setBody('Body');
//
//            $this->getMailer()->send($message);
        }

    }

  public function executeShow(sfWebRequest $request)
  {
    $this->domain_list = Doctrine::getTable('DomainList')->find(array($request->getParameter('id')));
    $this->forward404Unless($this->domain_list);
  }

  public function executeNew(sfWebRequest $request)
  {
    $this->form = new DomainListForm();
  }

  public function executeCreate(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST));

    $this->form = new DomainListForm();

    $this->processForm($request, $this->form);

    $this->setTemplate('new');
  }

  public function executeEdit(sfWebRequest $request)
  {
    $this->forward404Unless($domain_list = Doctrine::getTable('DomainList')->find(array($request->getParameter('id'))), sprintf('Object domain_list does not exist (%s).', $request->getParameter('id')));
    $this->form = new DomainListForm($domain_list);
  }

  public function executeUpdate(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST) || $request->isMethod(sfRequest::PUT));
    $this->forward404Unless($domain_list = Doctrine::getTable('DomainList')->find(array($request->getParameter('id'))), sprintf('Object domain_list does not exist (%s).', $request->getParameter('id')));
    $this->form = new DomainListForm($domain_list);

    $this->processForm($request, $this->form);

    $this->setTemplate('edit');
  }

  public function executeDelete(sfWebRequest $request)
  {
    $request->checkCSRFProtection();

    $this->forward404Unless($domain_list = Doctrine::getTable('DomainList')->find(array($request->getParameter('id'))), sprintf('Object domain_list does not exist (%s).', $request->getParameter('id')));
    $domain_list->delete();

    $this->redirect('dom/index');
  }

  protected function processForm(sfWebRequest $request, sfForm $form)
  {
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
    if ($form->isValid())
    {
      $domain_list = $form->save();

      $this->redirect('dom/edit?id='.$domain_list->getId());
    }
  }
}
