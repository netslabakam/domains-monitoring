<?php

/**
 * csSetting module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage csSetting
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: helper.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseCsSettingGeneratorHelper extends sfModelGeneratorHelper
{
  public function getUrlForAction($action)
  {
    return 'list' == $action ? 'cs_setting' : 'cs_setting_'.$action;
  }
}
