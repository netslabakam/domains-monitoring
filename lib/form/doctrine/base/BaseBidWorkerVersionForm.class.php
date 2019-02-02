<?php

/**
 * BidWorkerVersion form base class.
 *
 * @method BidWorkerVersion getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseBidWorkerVersionForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'                         => new sfWidgetFormInputHidden(array(), array()),
      'bid_id'                     => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8, "required" => true)),
      'worker_id'                  => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8, "required" => true)),
      'training_center_id'         => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8)),
      'training_center_branche_id' => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8)),
      'date_start'                 => new sfWidgetFormDate(array(), array()),
      'date_end'                   => new sfWidgetFormDate(array(), array()),
      'date_exam'                  => new sfWidgetFormDate(array(), array()),
      'deadline'                   => new sfWidgetFormDate(array(), array()),
      'subgroup'                   => new sfWidgetFormInputText(array(), array("size" => 64, "maxlength" => 255)),
      'is_deleted'                 => new sfWidgetFormInputCheckbox(array(), array("required" => true)),
      'is_closet'                  => new sfWidgetFormInputCheckbox(array(), array("required" => true)),
      'is_pass'                    => new sfWidgetFormInputCheckbox(array(), array("required" => true)),
      'is_was'                     => new sfWidgetFormInputCheckbox(array(), array("required" => true)),
      'protocol_id'                => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8)),
      'group_number'               => new sfWidgetFormInputText(array(), array("size" => 64, "maxlength" => 255)),
      'version'                    => new sfWidgetFormInputHidden(array(), array()),
    ));

    $this->setValidators(array(
      'id'                         => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'bid_id'                     => new sfValidatorInteger(),
      'worker_id'                  => new sfValidatorInteger(),
      'training_center_id'         => new sfValidatorInteger(array('required' => false)),
      'training_center_branche_id' => new sfValidatorInteger(array('required' => false)),
      'date_start'                 => new sfValidatorDate(array('required' => false)),
      'date_end'                   => new sfValidatorDate(array('required' => false)),
      'date_exam'                  => new sfValidatorDate(array('required' => false)),
      'deadline'                   => new sfValidatorDate(array('required' => false)),
      'subgroup'                   => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'is_deleted'                 => new sfValidatorBoolean(array('required' => false)),
      'is_closet'                  => new sfValidatorBoolean(array('required' => false)),
      'is_pass'                    => new sfValidatorBoolean(array('required' => false)),
      'is_was'                     => new sfValidatorBoolean(array('required' => false)),
      'protocol_id'                => new sfValidatorInteger(array('required' => false)),
      'group_number'               => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'version'                    => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'version', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('bid_worker_version[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'BidWorkerVersion';
  }

}
