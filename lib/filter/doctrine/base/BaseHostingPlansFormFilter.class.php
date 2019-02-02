<?php

/**
 * HostingPlans filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseHostingPlansFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'name'        => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'price'       => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'description' => new sfWidgetFormFilterInput(),
      'memory'      => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'site_count'  => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'db_count'    => new sfWidgetFormFilterInput(array('with_empty' => false)),
    ));

    $this->setValidators(array(
      'name'        => new sfValidatorPass(array('required' => false)),
      'price'       => new sfValidatorSchemaFilter('text', new sfValidatorNumber(array('required' => false))),
      'description' => new sfValidatorPass(array('required' => false)),
      'memory'      => new sfValidatorPass(array('required' => false)),
      'site_count'  => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'db_count'    => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
    ));

    $this->widgetSchema->setNameFormat('hosting_plans_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'HostingPlans';
  }

  public function getFields()
  {
    return array(
      'id'          => 'Number',
      'name'        => 'Text',
      'price'       => 'Number',
      'description' => 'Text',
      'memory'      => 'Text',
      'site_count'  => 'Number',
      'db_count'    => 'Number',
    );
  }
}
