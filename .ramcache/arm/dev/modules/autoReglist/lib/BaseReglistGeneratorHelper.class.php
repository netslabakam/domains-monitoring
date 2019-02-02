<?php

/**
 * reglist module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage reglist
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseReglistGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'reglist' : 'reglist_'.$action;
  }
}
