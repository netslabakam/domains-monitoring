<?php

/**
 * hosting_plans module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage hosting_plans
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseHosting_plansGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'hosting_plans' : 'hosting_plans_'.$action;
  }
}
