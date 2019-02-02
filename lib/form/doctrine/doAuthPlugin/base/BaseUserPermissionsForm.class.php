<?php

/**
 * UserPermissions form base class.
 *
 * @method UserPermissions getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseUserPermissionsForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'user_id'       => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'permission_id' => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
    ));

    $this->setValidators(array(
      'user_id'       => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'user_id', 'required' => false)),
      'permission_id' => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'permission_id', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('user_permissions[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'UserPermissions';
  }

}
