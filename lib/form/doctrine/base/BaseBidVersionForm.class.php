<?php

/**
 * BidVersion form base class.
 *
 * @method BidVersion getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseBidVersionForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'         => new sfWidgetFormInputHidden(array(), array()),
      'user_id'    => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8, "required" => true)),
      'course_id'  => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8, "required" => true)),
      'date_start' => new sfWidgetFormDate(array(), array("required" => true)),
      'date_end'   => new sfWidgetFormDate(array(), array("required" => true)),
      'state_id'   => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8)),
      'created_at' => new sfWidgetFormDateTime(array(), array("required" => true)),
      'updated_at' => new sfWidgetFormDateTime(array(), array("required" => true)),
      'version'    => new sfWidgetFormInputHidden(array(), array()),
    ));

    $this->setValidators(array(
      'id'         => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'user_id'    => new sfValidatorInteger(),
      'course_id'  => new sfValidatorInteger(),
      'date_start' => new sfValidatorDate(),
      'date_end'   => new sfValidatorDate(),
      'state_id'   => new sfValidatorInteger(array('required' => false)),
      'created_at' => new sfValidatorDateTime(),
      'updated_at' => new sfValidatorDateTime(),
      'version'    => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'version', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('bid_version[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'BidVersion';
  }

}
