<?php

/**
 * client_list module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage client_list
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseClient_listGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'client_list' : 'client_list_'.$action;
  }
}
