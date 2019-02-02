<?php

/**
 * UserGroup form base class.
 *
 * @method UserGroup getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseUserGroupForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'                          => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'                       => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 32, "maxlength" => 128, "required" => true)),
      'created_at'                  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'updated_at'                  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'user_group_permissions_list' => new sfWidgetFormDoctrineChoice(array('multiple' => true, 'model' => 'Permission')),
      'user_list'                   => new sfWidgetFormDoctrineChoice(array('multiple' => true, 'model' => 'User')),
    ));

    $this->setValidators(array(
      'id'                          => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'                       => new sfValidatorString(array('max_length' => 128)),
      'created_at'                  => new sfValidatorDateTime(),
      'updated_at'                  => new sfValidatorDateTime(),
      'user_group_permissions_list' => new sfValidatorDoctrineChoice(array('multiple' => true, 'model' => 'Permission', 'required' => false)),
      'user_list'                   => new sfValidatorDoctrineChoice(array('multiple' => true, 'model' => 'User', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('user_group[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'UserGroup';
  }

  public function updateDefaultsFromObject()
  {
    parent::updateDefaultsFromObject();

    if (isset($this->widgetSchema['user_group_permissions_list']))
    {
      $this->setDefault('user_group_permissions_list', $this->object->UserGroupPermissions->getPrimaryKeys());
    }

    if (isset($this->widgetSchema['user_list']))
    {
      $this->setDefault('user_list', $this->object->User->getPrimaryKeys());
    }

  }

  protected function doSave($con = null)
  {
    $this->saveUserGroupPermissionsList($con);
    $this->saveUserList($con);

    parent::doSave($con);
  }

  public function saveUserGroupPermissionsList($con = null)
  {
    if (!$this->isValid())
    {
      throw $this->getErrorSchema();
    }

    if (!isset($this->widgetSchema['user_group_permissions_list']))
    {
      // somebody has unset this widget
      return;
    }

    if (null === $con)
    {
      $con = $this->getConnection();
    }

    $existing = $this->object->UserGroupPermissions->getPrimaryKeys();
    $values = $this->getValue('user_group_permissions_list');
    if (!is_array($values))
    {
      $values = array();
    }

    $unlink = array_diff($existing, $values);
    if (count($unlink))
    {
      $this->object->unlink('UserGroupPermissions', array_values($unlink));
    }

    $link = array_diff($values, $existing);
    if (count($link))
    {
      $this->object->link('UserGroupPermissions', array_values($link));
    }
  }

  public function saveUserList($con = null)
  {
    if (!$this->isValid())
    {
      throw $this->getErrorSchema();
    }

    if (!isset($this->widgetSchema['user_list']))
    {
      // somebody has unset this widget
      return;
    }

    if (null === $con)
    {
      $con = $this->getConnection();
    }

    $existing = $this->object->User->getPrimaryKeys();
    $values = $this->getValue('user_list');
    if (!is_array($values))
    {
      $values = array();
    }

    $unlink = array_diff($existing, $values);
    if (count($unlink))
    {
      $this->object->unlink('User', array_values($unlink));
    }

    $link = array_diff($values, $existing);
    if (count($link))
    {
      $this->object->link('User', array_values($link));
    }
  }

}
