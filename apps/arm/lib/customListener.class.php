<?php

class customListener extends Doctrine_EventListener
{
    static protected
        $lastQuery = null,
        $lastIds = array();

    public function preStmtExecute(Doctrine_Event $event)
    {
        self::$lastQuery = $event->getQuery();
        self::$lastIds = $event->getParams();
    }

    public function preError(Doctrine_Event $event, Exception $e)
    {
        $error_info = $e->errorInfo;
        if(is_array($error_info) && isset($error_info[1]) && $error_info[1] == 1451){
            $context = sfContext::getInstance();
            $request = $context->getRequest();
            if($request->isXmlHttpRequest()){
                $res = array(
                    'state' => 'error',
                    'message' => 'Удаление невозможно, имеются зависимые объекты',
                    'id' => $context->getModuleName() . '_' . $request->getParameter('id'));
                echo json_encode($res);
                die();
            }else{
                $context->getUser()->setFlash('error', 'Удаление невозможно, имеются зависимые объекты');
                $context->getController()->getAction($context->getModuleName(), 'index')->redirect('@' . $context->getModuleName());
            }
        }
    }
}