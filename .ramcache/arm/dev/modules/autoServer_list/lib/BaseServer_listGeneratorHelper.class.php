<?php

/**
 * server_list module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage server_list
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseServer_listGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'server_list' : 'server_list_'.$action;
  }
}
