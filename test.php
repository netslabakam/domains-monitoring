<?php
//public static function send($event, $recipient = false, $params = array(), $files = array())
//{
//    if($recipient && !is_array($recipient)){
//        $recipient = array($recipient);
//    }
//    if($event && is_array($recipient) && count($recipient) > 0 && strlen($recipient[0]) > 0){
//        $recipient = array_unique($recipient);
//        $template = Doctrine::getTable("MailTemplate")->findOneByEvent($event);
//        if($template && count($recipient) > 0){
//            if($template->getCopy()){
//                $recipient = array_merge($recipient, explode(',', $template->getCopy()));
//            }
//            $recipient = array_unique($recipient);
//            $orig_recipient = $recipient;
//            $context = sfContext::hasInstance() ? sfContext::getInstance() : sfContext::createInstance(ProjectConfiguration::getApplicationConfiguration('www', 'prod', false));
//            if(!sfConfig::get('app_email_send')){
//                $recipient = array(sfConfig::get('app_email_dev'));
//            }
//            $sender = sfConfig::get(!sfConfig::get('app_email_send') ? 'app_email_sender' : 'app_doAuth_email_from');
//            if($sender){
//                $mailer = $context->getMailer();
//                $theme = $template->getTheme();
//                $body = $template->getBody();
//                $template_params = explode("\n", $template->getParams());
//                foreach ($template_params as $template_param){
//                    $t = explode(':', $template_param);
//                    if(strlen($t[0]) > 1){
//                        $p = substr($t[0], 1);
//                        $body = str_replace($t[0], isset($params[$p]) ? $params[$p] : '', $body);
//                        $theme = str_replace($t[0], isset($params[$p]) ? $params[$p] : '', $theme);
//                    }
//                }
//                if(!sfConfig::get('app_email_send')){
//                    $body = "---Письмо для " . implode(", ", $orig_recipient) . "---<br><br>" . $body;
//                }
//                $message = (new Swift_Message($theme))
//                    ->setFrom(array($sender))
//                    ->setContentType('text/html; charset=UTF-8');
//                $message->setBody($body);
//                if(is_array($files) && count($files) > 0){
//                    foreach ($files as $file_key => $file){
//                        if(file_exists($file) && !is_dir($file)){
//                            $attach = Swift_Attachment::fromPath($file);
//                            if(!is_numeric($file_key)){
//                                $attach->setFilename($file_key);
//                            }
//                            $message->attach($attach);
//                        }
//                    }
//                }
//                foreach ($recipient as $r){
//                    $message->setTo($r);
//                    if (!$mailer->send($message, $fail)) {
//                        file_put_contents(sfConfig::get('sf_log_dir') . '/email_fail', "\n\n" . date('Y-m-d H:i:s') . "\n" . print_r($fail, true) . print_r($sender), FILE_APPEND);
//                    }
//                }
//            }
//        }
//    }
//}