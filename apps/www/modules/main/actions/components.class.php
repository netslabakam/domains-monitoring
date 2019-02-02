<?php
class mainComponents extends sfComponents
{
    public function executeEmailSender(sfWebRequest $request)
    {
        $sender = 'farrukh.umurzakov@yandex.ru';
        $template = Doctrine::getTable('DomainList')->find(array($request->getParameter('id')));
        $forwho = $template->getEmail();

//        $message = (new Swift_Message($sender))
//            ->setFrom(array($sender))
//            ->setContentType('text/html; charset=UTF-8');
//        $message->setBody($body);
//        if(is_array($files) && count($files) > 0){
//            foreach ($files as $file_key => $file){
//                if(file_exists($file) && !is_dir($file)){
//                    $attach = Swift_Attachment::fromPath($file);
//                    if(!is_numeric($file_key)){
//                        $attach->setFilename($file_key);
//                    }
//                    $message->attach($attach);
//                }
//            }
//        }
//        foreach ($recipient as $r){
//            $message->setTo($r);
//            if (!$mailer->send($message, $fail)) {
//                file_put_contents(sfConfig::get('sf_log_dir') . '/email_fail', "\n\n" . date('Y-m-d H:i:s') . "\n" . print_r($fail, true) . print_r($sender), FILE_APPEND);
//            }
//        }
    }
}
