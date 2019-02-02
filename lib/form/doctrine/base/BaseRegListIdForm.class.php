<?php

/**
 * RegListId form base class.
 *
 * @method RegListId getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseRegListIdForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'reg_id' => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
    ));

    $this->setValidators(array(
      'reg_id' => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'reg_id', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('reg_list_id[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'RegListId';
  }

}
