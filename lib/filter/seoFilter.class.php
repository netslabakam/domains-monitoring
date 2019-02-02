<?php

class seoFilter extends sfFilter
{
    public function execute($filterChain)
    {
        if(sfContext::hasInstance()){
            $context = sfContext::getInstance();
            $url = $context->getRequest()->getPathInfo();
            if($page = Doctrine::getTable("Seo")->findOneByUrl($url)){
                Seo::$page = $page->toArray();
                $context->getResponse()->addMeta('description', Seo::$page['description'], false, false);
            }
        }

        $filterChain->execute();
    }
}