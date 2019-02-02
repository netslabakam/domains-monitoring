<?php

/**
 * TestItem form base class.
 *
 * @method TestItem getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseTestItemForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'      => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'   => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'test_id' => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('Test'), 'add_empty' => false), array("autocomplete" => "off", "required" => true)),
    ));

    $this->setValidators(array(
      'id'      => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'   => new sfValidatorString(array('max_length' => 255)),
      'test_id' => new sfValidatorDoctrineChoice(array('model' => $this->getRelatedModelName('Test'))),
    ));

    $this->widgetSchema->setNameFormat('test_item[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'TestItem';
  }

}
