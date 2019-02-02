<?php

/**
 * zadanie actions.
 *
 * @package    sf
 * @subpackage zadanie
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class zadanieActions extends sfActions
{
    public function executeIndex(sfWebRequest $request)
    {

        //XML

//      $opts = [
//          "http" => [
//              "method" => "GET",
//              "header" => "Content-Type:text/xml"
//          ]
//      ];
//
//      $context = stream_context_create($opts);
//
//// Open the file using the HTTP headers set above
//      $file = file_get_contents('https://hexillion.com/samples/WhoisXML/?query=vk.com&_accept=application%2Fvnd.hexillion.whois-v2%2Bxml', false, $context);
//
//      print_r($file);
//      echo '<pre>';
//
//      libxml_use_internal_errors(true);
//      $test = file_get_contents('https://hexillion.com/samples/WhoisXML/?query=vk.com&_accept=application%2Fvnd.hexillion.whois-v2%2Bxml');
//      $test = simplexml_load_file($test);
//      var_dump($test);
//      print_r(libxml_get_errors());
//
//      echo "</pre>";


        //PHP

//      echo '<pre>';
//      $test = unserialize(file_get_contents('http://ip-api.com/php/82.202.222.188'));
//      print_r($test);
//      echo '</pre>';
//      echo $test['country'];
//      die();
        $this->zadanies = Doctrine::getTable('Zadanie')
            ->createQuery('a')
            ->execute();
    }

    public function executeCheck(sfWebRequest $request)
    {
        //      json


        if ($request->hasParameter('id') && is_numeric($request->getParameter('id'))) {
//
            $host = Doctrine::getTable('Zadanie')->find($request->getParameter('id'));

            if ($host) {

//////////////////////////////////////////////////////////////////////////////////////
                echo "<pre>";
                $test = json_decode(file_get_contents('http://api.whois.vu/?q='.$host->getName()), true);
                $domainname = $test['domain'];

                echo($domainname);

        //      print_r($test['whois']);
                $who_is_dirty = explode("\r\n", $test['whois']);
                $who_is = array();
                foreach ($who_is_dirty as $key => $item) {
                    $item = explode(':', $item);
                    $who_is[trim($item[0])] = trim($item[1]);
                }
        //        print_r($who_is);
                echo '</pre>';


                $expdate = $who_is['Registry Expiry Date'];
                echo substr($expdate, 0,10);



                $ip = gethostbyname($domainname);

                echo $ip;
            }
        }
///////////////////////////////////////////////////////////////////////////////////////////////
//        if ($request->hasParameter('id') && is_numeric($request->getParameter('id'))) {
//
//            $host = Doctrine::getTable('Zadanie')->find($request->getParameter('id'));
//
//            if ($host) {
//
//                $domain = new Whois($host->getName());
//
//                $whois_answer = $domain->info();
//
//                $array_info = explode("\r\n", $whois_answer);
//
//                foreach ($array_info as $key => $item) {
//                    $array_info[$key] = explode(':', $item);
//                }
//                echo  '<pre>';
//                print_r($array_info);
//                echo  '</pre>';
//
//                if ($domain->isAvailable()) {
//                    echo "Domain is available\n";
//                } else {
//                    echo "Domain is registered\n";
//                }
//            }
//        }
    }

//  public function executeShow(sfWebRequest $request)
//  {
//      $this->zadanie = $this->getRoute()->getObject();
////      $this->forward404Unless($this->zadanie);
//  }

    public function executeNew(sfWebRequest $request)
    {
        $this->form = new ZadanieForm();
    }

    public function executeCreate(sfWebRequest $request)
    {
        $this->forward404Unless($request->isMethod(sfRequest::POST));

        $this->form = new ZadanieForm();

        $this->processForm($request, $this->form);

        $this->setTemplate('new');
    }

    public function executeEdit(sfWebRequest $request)
    {
        $this->forward404Unless($zadanie = Doctrine::getTable('Zadanie')->find(array($request->getParameter('id'))), sprintf('Object zadanie does not exist (%s).', $request->getParameter('id')));
        $this->form = new ZadanieForm($zadanie);
    }

    public function executeUpdate(sfWebRequest $request)
    {
        $this->forward404Unless($request->isMethod(sfRequest::POST) || $request->isMethod(sfRequest::PUT));
        $this->forward404Unless($zadanie = Doctrine::getTable('Zadanie')->find(array($request->getParameter('id'))), sprintf('Object zadanie does not exist (%s).', $request->getParameter('id')));
        $this->form = new ZadanieForm($zadanie);

        $this->processForm($request, $this->form);

        $this->setTemplate('edit');
    }

    public function executeDelete(sfWebRequest $request)
    {
        $request->checkCSRFProtection();

        $this->forward404Unless($zadanie = Doctrine::getTable('Zadanie')->find(array($request->getParameter('id'))), sprintf('Object zadanie does not exist (%s).', $request->getParameter('id')));
        $zadanie->delete();

        $this->redirect('zadanie/index');
    }

    protected function processForm(sfWebRequest $request, sfForm $form)
    {
        $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
        if ($form->isValid()) {
            $zadanie = $form->save();

            $this->redirect('zadanie/edit?id=' . $zadanie->getId());
        }
    }
}
