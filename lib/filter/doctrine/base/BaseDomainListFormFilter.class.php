<?php

/**
 * DomainList filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseDomainListFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'domain'     => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'expires_at' => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'server'     => new sfWidgetFormFilterInput(),
      'reg_id'     => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('RegList'), 'add_empty' => true)),
      'client_id'  => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('ClientList'), 'add_empty' => true)),
      'sslexp'     => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
      'last_check' => new sfWidgetFormFilterDate(array('from_date' => new sfWidgetFormDate(), 'to_date' => new sfWidgetFormDate())),
    ));

    $this->setValidators(array(
      'domain'     => new sfValidatorPass(array('required' => false)),
      'expires_at' => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDate(array('required' => false)), 'to_date' => new sfValidatorDateTime(array('required' => false)))),
      'server'     => new sfValidatorPass(array('required' => false)),
      'reg_id'     => new sfValidatorDoctrineChoice(array('required' => false, 'model' => $this->getRelatedModelName('RegList'), 'column' => 'id')),
      'client_id'  => new sfValidatorDoctrineChoice(array('required' => false, 'model' => $this->getRelatedModelName('ClientList'), 'column' => 'id')),
      'sslexp'     => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDateTime(array('required' => false, 'datetime_output' => 'Y-m-d 00:00:00')), 'to_date' => new sfValidatorDateTime(array('required' => false, 'datetime_output' => 'Y-m-d 23:59:59')))),
      'last_check' => new sfValidatorDateRange(array('required' => false, 'from_date' => new sfValidatorDateTime(array('required' => false, 'datetime_output' => 'Y-m-d 00:00:00')), 'to_date' => new sfValidatorDateTime(array('required' => false, 'datetime_output' => 'Y-m-d 23:59:59')))),
    ));

    $this->widgetSchema->setNameFormat('domain_list_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'DomainList';
  }

  public function getFields()
  {
    return array(
      'id'         => 'Number',
      'domain'     => 'Text',
      'expires_at' => 'Date',
      'server'     => 'Text',
      'reg_id'     => 'ForeignKey',
      'client_id'  => 'ForeignKey',
      'sslexp'     => 'Date',
      'last_check' => 'Date',
    );
  }
}
