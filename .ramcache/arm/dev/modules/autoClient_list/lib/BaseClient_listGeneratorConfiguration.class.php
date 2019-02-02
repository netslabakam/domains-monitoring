<?php

/**
 * client_list module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage client_list
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: configuration.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseClient_listGeneratorConfiguration extends sfModelGeneratorConfiguration
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
    return 'name, email, plan_id';
  }
  public function getListParams()
  {
    return '%%name%% - %%_plan_id%% - %%email%% - %%_paidtillc%% - %%is_paid%% - %%period_id%%';
  }

  public function getListLayout()
  {
    return 'tabular';
  }

  public function getListTitle()
  {
    return 'Клиенты';
  }

  public function getEditTitle()
  {
    return 'Редактирование клиента';
  }

  public function getNewTitle()
  {
    return 'Новый клиент';
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
    return array(  0 => 'name',  1 => '_plan_id',  2 => 'email',  3 => '_paidtillc',  4 => 'is_paid',  5 => 'period_id',);
  }

  public function getFieldsDefault()
  {
    return array(
      'id' => array(  'is_link' => true,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => '',),
      'is_paid' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Boolean',  'label' => 'Оплачено',),
      'paidtill' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Date',  'label' => 'Оплачено до',),
      'name' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Имя',),
      'email' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Почта',),
      'plan_id' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'ForeignKey',  'label' => 'Тариф',),
      'period_id' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',),
      'paidtillc' => array(  'is_link' => false,  'is_real' => false,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Осталось дней',),
    );
  }

  public function getFieldsList()
  {
    return array(
      'id' => array(),
      'is_paid' => array(),
      'paidtill' => array(),
      'name' => array(),
      'email' => array(),
      'plan_id' => array(),
      'period_id' => array(),
    );
  }

  public function getFieldsFilter()
  {
    return array(
      'id' => array(),
      'is_paid' => array(),
      'paidtill' => array(),
      'name' => array(),
      'email' => array(),
      'plan_id' => array(),
      'period_id' => array(),
    );
  }

  public function getFieldsForm()
  {
    return array(
      'id' => array(),
      'is_paid' => array(),
      'paidtill' => array(),
      'name' => array(),
      'email' => array(),
      'plan_id' => array(),
      'period_id' => array(),
    );
  }

  public function getFieldsEdit()
  {
    return array(
      'id' => array(),
      'is_paid' => array(),
      'paidtill' => array(),
      'name' => array(),
      'email' => array(),
      'plan_id' => array(),
      'period_id' => array(),
    );
  }

  public function getFieldsNew()
  {
    return array(
      'id' => array(),
      'is_paid' => array(),
      'paidtill' => array(),
      'name' => array(),
      'email' => array(),
      'plan_id' => array(),
      'period_id' => array(),
    );
  }


  /**
   * Gets the form class name.
   *
   * @return string The form class name
   */
  public function getFormClass()
  {
    return 'ClientListForm';
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
    return 'ClientListFormFilter';
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
