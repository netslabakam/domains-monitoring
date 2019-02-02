<?php

/**
 * NewsTranslation filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseNewsTranslationFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'title' => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'body'  => new sfWidgetFormFilterInput(),
    ));

    $this->setValidators(array(
      'title' => new sfValidatorPass(array('required' => false)),
      'body'  => new sfValidatorPass(array('required' => false)),
    ));

    $this->widgetSchema->setNameFormat('news_translation_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'NewsTranslation';
  }

  public function getFields()
  {
    return array(
      'id'    => 'Number',
      'title' => 'Text',
      'body'  => 'Text',
      'lang'  => 'Text',
    );
  }
}
