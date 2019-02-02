<?php

/**
 * BidWorkerVersion filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseBidWorkerVersionFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'bid_id'                     => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'worker_id'                  => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'training_center_id'         => new sfWidgetFormFilterInput(),
      'training_center_branche_id' => new sfWidgetFormFilterInput(),
      'date_start'                 => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'date_end'                   => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'date_exam'                  => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'deadline'                   => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'subgroup'                   => new sfWidgetFormFilterInput(),
      'is_deleted'                 => new sfWidgetFormChoice(array('choices' => array('' => 'yes or no', 1 => 'yes', 0 => 'no'))),
      'is_closet'                  => new sfWidgetFormChoice(array('choices' => array('' => 'yes or no', 1 => 'yes', 0 => 'no'))),
      'is_pass'                    => new sfWidgetFormChoice(array('choices' => array('' => 'yes or no', 1 => 'yes', 0 => 'no'))),
      'is_was'                     => new sfWidgetFormChoice(array('choices' => array('' => 'yes or no', 1 => 'yes', 0 => 'no'))),
      'protocol_id'                => new sfWidgetFormFilterInput(),
      'group_number'               => new sfWidgetFormFilterInput(),
    ));

    $this->setValidators(array(
      'bid_id'                     => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'worker_id'                  => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'training_center_id'         => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'training_center_branche_id' => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'date_start'                 => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'date_end'                   => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'date_exam'                  => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'deadline'                   => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'subgroup'                   => new sfValidatorPass(array('required' => false)),
      'is_deleted'                 => new sfValidatorChoice(array('required' => false, 'choices' => array('', 1, 0))),
      'is_closet'                  => new sfValidatorChoice(array('required' => false, 'choices' => array('', 1, 0))),
      'is_pass'                    => new sfValidatorChoice(array('required' => false, 'choices' => array('', 1, 0))),
      'is_was'                     => new sfValidatorChoice(array('required' => false, 'choices' => array('', 1, 0))),
      'protocol_id'                => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'group_number'               => new sfValidatorPass(array('required' => false)),
    ));

    $this->widgetSchema->setNameFormat('bid_worker_version_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'BidWorkerVersion';
  }

  public function getFields()
  {
    return array(
      'id'                         => 'Number',
      'bid_id'                     => 'Number',
      'worker_id'                  => 'Number',
      'training_center_id'         => 'Number',
      'training_center_branche_id' => 'Number',
      'date_start'                 => 'Date',
      'date_end'                   => 'Date',
      'date_exam'                  => 'Date',
      'deadline'                   => 'Date',
      'subgroup'                   => 'Text',
      'is_deleted'                 => 'Boolean',
      'is_closet'                  => 'Boolean',
      'is_pass'                    => 'Boolean',
      'is_was'                     => 'Boolean',
      'protocol_id'                => 'Number',
      'group_number'               => 'Text',
      'version'                    => 'Number',
    );
  }
}
