<?php

/**
 * Seo form base class.
 *
 * @method Seo getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseSeoForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'          => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'url'         => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70, "required" => true)),
      'h1'          => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
      'title'       => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
      'description' => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
      'body'        => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 65)),
      'created_at'  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'updated_at'  => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
    ));

    $this->setValidators(array(
      'id'          => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'url'         => new sfValidatorString(array('max_length' => 10000)),
      'h1'          => new sfValidatorString(array('max_length' => 10000, 'required' => false)),
      'title'       => new sfValidatorString(array('max_length' => 10000, 'required' => false)),
      'description' => new sfValidatorString(array('max_length' => 10000, 'required' => false)),
      'body'        => new sfValidatorPass(array('required' => false)),
      'created_at'  => new sfValidatorDateTime(),
      'updated_at'  => new sfValidatorDateTime(),
    ));

    $this->widgetSchema->setNameFormat('seo[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'Seo';
  }

}
