<?php

/**
 * ClientList filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseClientListFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'is_paid'   => new sfWidgetFormChoice(array('choices' => array('' => 'yes or no', 1 => 'yes', 0 => 'no'))),
      'paidtill'  => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'name'      => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'email'     => new sfWidgetFormFilterInput(),
      'plan_id'   => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('HostingPlans'), 'add_empty' => true)),
      'period_id' => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('Period'), 'add_empty' => true)),
    ));

    $this->setValidators(array(
      'is_paid'   => new sfValidatorChoice(array('required' => false, 'choices' => array('', 1, 0))),
      'paidtill'  => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'name'      => new sfValidatorPass(array('required' => false)),
      'email'     => new sfValidatorPass(array('required' => false)),
      'plan_id'   => new sfValidatorDoctrineChoice(array('required' => false, 'model' => $this->getRelatedModelName('HostingPlans'), 'column' => 'id')),
      'period_id' => new sfValidatorDoctrineChoice(array('required' => false, 'model' => $this->getRelatedModelName('Period'), 'column' => 'id')),
    ));

    $this->widgetSchema->setNameFormat('client_list_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'ClientList';
  }

  public function getFields()
  {
    return array(
      'id'        => 'Number',
      'is_paid'   => 'Boolean',
      'paidtill'  => 'Date',
      'name'      => 'Text',
      'email'     => 'Text',
      'plan_id'   => 'ForeignKey',
      'period_id' => 'ForeignKey',
    );
  }
}
