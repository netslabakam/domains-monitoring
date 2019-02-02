<?php

/**
 * MailMessage form base class.
 *
 * @method MailMessage getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseMailMessageForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'         => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'message'    => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70, "required" => true)),
      'priority'   => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 8, "maxlength" => 8)),
      'created_at' => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'updated_at' => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
    ));

    $this->setValidators(array(
      'id'         => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'message'    => new sfValidatorString(),
      'priority'   => new sfValidatorInteger(array('required' => false)),
      'created_at' => new sfValidatorDateTime(),
      'updated_at' => new sfValidatorDateTime(),
    ));

    $this->widgetSchema->setNameFormat('mail_message[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'MailMessage';
  }

}
