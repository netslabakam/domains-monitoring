<?php

/**
 * ServerList form base class.
 *
 * @method ServerList getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseServerListForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'         => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'title'      => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'ip_address' => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'comment'    => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
    ));

    $this->setValidators(array(
      'id'         => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'title'      => new sfValidatorString(array('max_length' => 255)),
      'ip_address' => new sfValidatorString(array('max_length' => 255)),
      'comment'    => new sfValidatorString(array('max_length' => 10000, 'required' => false)),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorAnd(array(
        new sfValidatorDoctrineUnique(array('model' => 'ServerList', 'column' => array('title'))),
        new sfValidatorDoctrineUnique(array('model' => 'ServerList', 'column' => array('ip_address'))),
      ))
    );

    $this->widgetSchema->setNameFormat('server_list[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'ServerList';
  }

}
