<?php

require_once dirname(__FILE__).'/../lib/user_logGeneratorConfiguration.class.php';
require_once dirname(__FILE__).'/../lib/user_logGeneratorHelper.class.php';

/**
 * user_log actions.
 *
 * @package    sf
 * @subpackage user_log
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class user_logActions extends autoUser_logActions
{
  // @title Восстановление
  public function executeReturn(sfWebRequest $request)
  {
    $user_log = $this->getRoute()->getObject();
    $object = unserialize($user_log->getLog());
    $model = $user_log->getModel();
    
    $modelr = new $model();
    foreach($object->getData() as $key => $value)
    {
      echo $method = 'set' . str_replace(' ', '', ucwords(str_replace('_', ' ', $key)));
      echo '<br />';
      //$modelr->$method($value);
    }
    die();
    $modelr->save();
    $user_log->setLogType('return');
    $user_log->save();

    $this->redirect('@user_log');
  }
}
