<?php

/**
 * csSetting module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage csSetting
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: configuration.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseCsSettingGeneratorConfiguration extends sfModelGeneratorConfiguration
{
  public function getActionsDefault()
  {
    return array();
  }

  public function getFormActions()
  {
    return array(  '_list' => NULL,  '_save' => NULL,  '_save_and_add' => NULL,  '_save_and_list' => NULL,  '_delete' => NULL,);
  }

  public function getNewActions()
  {
    return array();
  }

  public function getEditActions()
  {
    return array();
  }

  public function getListObjectActions()
  {
    return array(  '_edit' => NULL,  '_delete' => NULL,  'restore_defaults' => NULL,);
  }

  public function getListActions()
  {
    return array(  '_new' => NULL,);
  }

  public function getListBatchActions()
  {
    return array();
  }

  public function hasSearch()
  {
    return false;
  }
  public function getSearchFields()
  {
    return 'false';
  }
  public function getListParams()
  {
    return '%%name%% - %%_value%%';
  }

  public function getListLayout()
  {
    return 'tabular';
  }

  public function getListTitle()
  {
    return 'Settings';
  }

  public function getEditTitle()
  {
    return 'Edit Setting';
  }

  public function getNewTitle()
  {
    return 'New Setting';
  }

  public function getFilterDisplay()
  {
    return array();
  }

  public function getFormDisplay()
  {
    return array();
  }

  public function getEditDisplay()
  {
    return array(  0 => 'name',  1 => 'type',  2 => 'widget_options',  3 => '_setting_group',  4 => 'setting_default',  5 => 'slug',);
  }

  public function getNewDisplay()
  {
    return array(  0 => 'name',  1 => 'type',  2 => 'widget_options',  3 => '_setting_group',  4 => 'setting_default',);
  }

  public function getListDisplay()
  {
    return array(  0 => 'name',  1 => '_value',);
  }

  public function getFieldsDefault()
  {
    return array(
      'id' => array(  'is_link' => true,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'name' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'type' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'widget_options' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'value' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'setting_group' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'setting_default' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'variables' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'slug' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'multi_value' => array(  'is_link' => false,  'is_real' => false,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Value',),
    );
  }

  public function getFieldsList()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'type' => array(),
      'widget_options' => array(),
      'value' => array(),
      'setting_group' => array(),
      'setting_default' => array(),
      'variables' => array(),
      'slug' => array(),
    );
  }

  public function getFieldsFilter()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'type' => array(),
      'widget_options' => array(),
      'value' => array(),
      'setting_group' => array(),
      'setting_default' => array(),
      'variables' => array(),
      'slug' => array(),
    );
  }

  public function getFieldsForm()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'type' => array(),
      'widget_options' => array(),
      'value' => array(),
      'setting_group' => array(),
      'setting_default' => array(),
      'variables' => array(),
      'slug' => array(),
    );
  }

  public function getFieldsEdit()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'type' => array(),
      'widget_options' => array(),
      'value' => array(),
      'setting_group' => array(),
      'setting_default' => array(),
      'variables' => array(),
      'slug' => array(),
    );
  }

  public function getFieldsNew()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'type' => array(),
      'widget_options' => array(),
      'value' => array(),
      'setting_group' => array(),
      'setting_default' => array(),
      'variables' => array(),
      'slug' => array(),
    );
  }


  /**
   * Gets the form class name.
   *
   * @return string The form class name
   */
  public function getFormClass()
  {
    return 'csSettingAdminForm';
  }

  public function hasFilterForm()
  {
    return false;
  }

  /**
   * Gets the filter form class name
   *
   * @return string The filter form class name associated with this generator
   */
  public function getFilterFormClass()
  {
    return 'csSettingFormFilter';
  }

  public function getPagerClass()
  {
    return 'sfDoctrinePager';
  }

  public function getPagerMaxPerPage()
  {
    return 300;
  }

  public function getDefaultSort()
  {
    return array(null, null);
  }


  public function getTableMethod()
  {
    return '';
  }

  public function getTableCountMethod()
  {
    return '';
  }
  
  public function getListExport()
  {
    return false;
  }
  
  public function hasTabs()
  {
    return false;
  }
  public function getTabs()
  {
        return false;
      }
  public function hasStruct()
  {
    return ;
  }
  public function getStruct()
  {
        return false;
      }
}
