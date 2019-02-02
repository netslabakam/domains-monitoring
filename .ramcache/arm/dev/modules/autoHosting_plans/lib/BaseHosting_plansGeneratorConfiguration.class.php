<?php

/**
 * hosting_plans module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage hosting_plans
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: configuration.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseHosting_plansGeneratorConfiguration extends sfModelGeneratorConfiguration
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
    return array(  '_delete' => NULL,  '_edit' => NULL,);
  }

  public function getListActions()
  {
    return array(  '_new' => NULL,);
  }

  public function getListBatchActions()
  {
    return array(  '_delete' => NULL,);
  }

  public function hasSearch()
  {
    return true;
  }
  public function getSearchFields()
  {
    return 'name';
  }
  public function getListParams()
  {
    return '%%name%% - %%memory%% - %%site_count%% - %%db_count%% - %%_price%%';
  }

  public function getListLayout()
  {
    return 'tabular';
  }

  public function getListTitle()
  {
    return 'Тарифы';
  }

  public function getEditTitle()
  {
    return 'Редактирование тарифа';
  }

  public function getNewTitle()
  {
    return 'Новый тариф';
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
    return array();
  }

  public function getNewDisplay()
  {
    return array();
  }

  public function getListDisplay()
  {
    return array(  0 => 'name',  1 => 'memory',  2 => 'site_count',  3 => 'db_count',  4 => '_price',);
  }

  public function getFieldsDefault()
  {
    return array(
      'id' => array(  'is_link' => true,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => '',),
      'name' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Название',),
      'price' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Цена',),
      'description' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Комментарий',),
      'memory' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Память',),
      'site_count' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Количество сайтов',),
      'db_count' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Количество баз данных',),
    );
  }

  public function getFieldsList()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'price' => array(),
      'description' => array(),
      'memory' => array(),
      'site_count' => array(),
      'db_count' => array(),
    );
  }

  public function getFieldsFilter()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'price' => array(),
      'description' => array(),
      'memory' => array(),
      'site_count' => array(),
      'db_count' => array(),
    );
  }

  public function getFieldsForm()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'price' => array(),
      'description' => array(),
      'memory' => array(),
      'site_count' => array(),
      'db_count' => array(),
    );
  }

  public function getFieldsEdit()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'price' => array(),
      'description' => array(),
      'memory' => array(),
      'site_count' => array(),
      'db_count' => array(),
    );
  }

  public function getFieldsNew()
  {
    return array(
      'id' => array(),
      'name' => array(),
      'price' => array(),
      'description' => array(),
      'memory' => array(),
      'site_count' => array(),
      'db_count' => array(),
    );
  }


  /**
   * Gets the form class name.
   *
   * @return string The form class name
   */
  public function getFormClass()
  {
    return 'HostingPlansForm';
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
    return 'HostingPlansFormFilter';
  }

  public function getPagerClass()
  {
    return 'sfDoctrinePager';
  }

  public function getPagerMaxPerPage()
  {
    return 100;
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
