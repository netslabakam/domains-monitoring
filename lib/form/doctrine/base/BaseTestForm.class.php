<?php

/**
 * Test form base class.
 *
 * @method Test getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseTestForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'          => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'       => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'value_first' => new sfWidgetFormChoice(array('choices' => array('first' => 'Первый', 'second' => 'Второй'), 'multiple' => true, 'expanded' => true), array("autocomplete" => "off")),
      'value_enum'  => new sfWidgetFormChoice(array('choices' => array('first' => 'Первый', 'second' => 'Второй')), array("autocomplete" => "off")),
      'created_at'  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'updated_at'  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
    ));

    $this->setValidators(array(
      'id'          => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'       => new sfValidatorString(array('max_length' => 255)),
      'value_first' => new sfValidatorChoice(array('choices' => array(0 => 'first', 1 => 'second'), 'multiple' => true, 'required' => false)),
      'value_enum'  => new sfValidatorChoice(array('choices' => array(0 => 'first', 1 => 'second'), 'required' => false)),
      'created_at'  => new sfValidatorDateTime(),
      'updated_at'  => new sfValidatorDateTime(),
    ));

    $this->widgetSchema->setNameFormat('test[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'Test';
  }

}
