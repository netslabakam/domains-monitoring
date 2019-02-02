<?php

/**
 * NotificationsEmail form base class.
 *
 * @method NotificationsEmail getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseNotificationsEmailForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'        => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'email'     => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255)),
      'is_active' => new sfWidgetFormInputCheckbox(array(), array("autocomplete" => "off")),
    ));

    $this->setValidators(array(
      'id'        => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'email'     => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'is_active' => new sfValidatorBoolean(array('required' => false)),
    ));

    $this->widgetSchema->setNameFormat('notifications_email[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'NotificationsEmail';
  }

}
