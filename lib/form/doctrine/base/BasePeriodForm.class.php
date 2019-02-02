<?php

/**
 * Period form base class.
 *
 * @method Period getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BasePeriodForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'     => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'  => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255)),
      'period' => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 8, "maxlength" => 8)),
    ));

    $this->setValidators(array(
      'id'     => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'  => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'period' => new sfValidatorInteger(array('required' => false)),
    ));

    $this->widgetSchema->setNameFormat('period[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'Period';
  }

}
