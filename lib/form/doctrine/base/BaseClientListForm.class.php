<?php

/**
 * ClientList form base class.
 *
 * @method ClientList getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseClientListForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'        => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'is_paid'   => new sfWidgetFormInputCheckbox(array(), array("autocomplete" => "off")),
      'paidtill'  => new sfWidgetFormDate(array(), array("autocomplete" => "off")),
      'name'      => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'email'     => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255)),
      'plan_id'   => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('HostingPlans'), 'add_empty' => true), array("autocomplete" => "off")),
      'period_id' => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('Period'), 'add_empty' => true), array("autocomplete" => "off")),
    ));

    $this->setValidators(array(
      'id'        => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'is_paid'   => new sfValidatorBoolean(),
      'paidtill'  => new sfValidatorDate(array('required' => false)),
      'name'      => new sfValidatorString(array('max_length' => 255)),
      'email'     => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'plan_id'   => new sfValidatorDoctrineChoice(array('model' => $this->getRelatedModelName('HostingPlans'), 'required' => false)),
      'period_id' => new sfValidatorDoctrineChoice(array('model' => $this->getRelatedModelName('Period'), 'required' => false)),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorDoctrineUnique(array('model' => 'ClientList', 'column' => array('email')))
    );

    $this->widgetSchema->setNameFormat('client_list[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'ClientList';
  }

}
