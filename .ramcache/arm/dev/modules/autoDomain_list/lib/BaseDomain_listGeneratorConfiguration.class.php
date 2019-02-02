<?php

/**
 * domain_list module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage domain_list
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: configuration.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseDomain_listGeneratorConfiguration extends sfModelGeneratorConfiguration
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
    return 'domain, server, client_id';
  }
  public function getListParams()
  {
    return '%%_domain%% - %%_client_id%% - %%_server%% - %%_reg_id%% - %%_expires_at%% - %%_sslexp%% - %%_last_check%%';
  }

  public function getListLayout()
  {
    return 'tabular';
  }

  public function getListTitle()
  {
    return 'Домены';
  }

  public function getEditTitle()
  {
    return 'Редактирование домена';
  }

  public function getNewTitle()
  {
    return 'Новый домен';
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
    return array(  0 => '_domain',  1 => '_client_id',  2 => '_server',  3 => '_reg_id',  4 => '_expires_at',  5 => '_sslexp',  6 => '_last_check',);
  }

  public function getFieldsDefault()
  {
    return array(
      'id' => array(  'is_link' => true,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => '',),
      'domain' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Домен',),
      'expires_at' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Date',  'label' => 'Оплачено до',),
      'server' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Сервер (IP)',),
      'reg_id' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'ForeignKey',  'label' => 'Регистратор',),
      'client_id' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'ForeignKey',  'label' => 'Почта владельца',),
      'sslexp' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Дни до окончания SSL сертификата',),
      'last_check' => array(  'is_link' => false,  'is_real' => true,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => 'Последняя проверка',),
      'something' => array(  'is_link' => false,  'is_real' => false,  'is_partial' => false,  'is_component' => false,  'type' => 'Text',  'label' => '',),
    );
  }

  public function getFieldsList()
  {
    return array(
      'id' => array(),
      'domain' => array(),
      'expires_at' => array(),
      'server' => array(),
      'reg_id' => array(),
      'client_id' => array(),
      'sslexp' => array(),
      'last_check' => array(),
    );
  }

  public function getFieldsFilter()
  {
    return array(
      'id' => array(),
      'domain' => array(),
      'expires_at' => array(),
      'server' => array(),
      'reg_id' => array(),
      'client_id' => array(),
      'sslexp' => array(),
      'last_check' => array(),
    );
  }

  public function getFieldsForm()
  {
    return array(
      'id' => array(),
      'domain' => array(),
      'expires_at' => array(),
      'server' => array(),
      'reg_id' => array(),
      'client_id' => array(),
      'sslexp' => array(),
      'last_check' => array(),
    );
  }

  public function getFieldsEdit()
  {
    return array(
      'id' => array(),
      'domain' => array(),
      'expires_at' => array(),
      'server' => array(),
      'reg_id' => array(),
      'client_id' => array(),
      'sslexp' => array(),
      'last_check' => array(),
    );
  }

  public function getFieldsNew()
  {
    return array(
      'id' => array(),
      'domain' => array(),
      'expires_at' => array(),
      'server' => array(),
      'reg_id' => array(),
      'client_id' => array(),
      'sslexp' => array(),
      'last_check' => array(),
    );
  }


  /**
   * Gets the form class name.
   *
   * @return string The form class name
   */
  public function getFormClass()
  {
    return 'DomainListForm';
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
    return 'DomainListFormFilter';
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
