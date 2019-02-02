<?php

class mainActions extends sfActions
{
    public function executeIndex(sfWebRequest $request)
    {
        $all_data = Doctrine::getTable('Zadanie')->findAll();

//        $all_data = Doctrine_Query::create()
//            ->select()
//            ->from()
//            ->where()
//            ->execute();
    }
    
    public function executeError404(sfWebRequest $request)
    {

    }
}
