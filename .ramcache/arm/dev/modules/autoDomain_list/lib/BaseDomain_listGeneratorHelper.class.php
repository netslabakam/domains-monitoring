<?php

/**
 * domain_list module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage domain_list
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseDomain_listGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'domain_list' : 'domain_list_'.$action;
  }
}
