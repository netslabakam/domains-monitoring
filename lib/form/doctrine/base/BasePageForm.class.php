<?php

/**
 * Page form base class.
 *
 * @method Page getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BasePageForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'           => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'        => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'alias'        => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255)),
      'body'         => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
      'is_activated' => new sfWidgetFormInputCheckbox(array(), array("autocomplete" => "off")),
      'created_at'   => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
      'updated_at'   => new sfWidgetFormDateTime(array(), array("autocomplete" => "off", "required" => true)),
    ));

    $this->setValidators(array(
      'id'           => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'        => new sfValidatorString(array('max_length' => 255)),
      'alias'        => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'body'         => new sfValidatorString(array('max_length' => 50000, 'required' => false)),
      'is_activated' => new sfValidatorBoolean(array('required' => false)),
      'created_at'   => new sfValidatorDateTime(),
      'updated_at'   => new sfValidatorDateTime(),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorDoctrineUnique(array('model' => 'Page', 'column' => array('alias')))
    );

    $this->widgetSchema->setNameFormat('page[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'Page';
  }

}
