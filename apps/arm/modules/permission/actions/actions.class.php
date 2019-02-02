<?php

require_once dirname(__FILE__) . '/../lib/permissionGeneratorConfiguration.class.php';
require_once dirname(__FILE__) . '/../lib/permissionGeneratorHelper.class.php';

class permissionActions extends autoPermissionActions
{
    public function executeIndex(sfWebRequest $request)
    {
        if($request->hasParameter('build')){
            Permission::build($request->getParameter('m'));
        }
        parent::executeIndex($request);
    }
}
