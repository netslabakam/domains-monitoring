<?php

/**
 * TestItem filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseTestItemFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'title'   => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'test_id' => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('Test'), 'add_empty' => true)),
    ));

    $this->setValidators(array(
      'title'   => new sfValidatorPass(array('required' => false)),
      'test_id' => new sfValidatorDoctrineChoice(array('required' => false, 'model' => $this->getRelatedModelName('Test'), 'column' => 'id')),
    ));

    $this->widgetSchema->setNameFormat('test_item_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'TestItem';
  }

  public function getFields()
  {
    return array(
      'id'      => 'Number',
      'title'   => 'Text',
      'test_id' => 'ForeignKey',
    );
  }
}
