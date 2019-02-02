<?php

/**
 * DomainList form base class.
 *
 * @method DomainList getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseDomainListForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'         => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'domain'     => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'expires_at' => new sfWidgetFormDate(array(), array("autocomplete" => "off")),
      'server'     => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255)),
      'reg_id'     => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('RegList'), 'add_empty' => true), array("autocomplete" => "off")),
      'client_id'  => new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('ClientList'), 'add_empty' => true), array("autocomplete" => "off")),
      'sslexp'     => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 65)),
      'last_check' => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 65)),
    ));

    $this->setValidators(array(
      'id'         => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'domain'     => new sfValidatorString(array('max_length' => 255)),
      'expires_at' => new sfValidatorDate(array('required' => false)),
      'server'     => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'reg_id'     => new sfValidatorDoctrineChoice(array('model' => $this->getRelatedModelName('RegList'), 'required' => false)),
      'client_id'  => new sfValidatorDoctrineChoice(array('model' => $this->getRelatedModelName('ClientList'), 'required' => false)),
      'sslexp'     => new sfValidatorPass(array('required' => false)),
      'last_check' => new sfValidatorPass(array('required' => false)),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorDoctrineUnique(array('model' => 'DomainList', 'column' => array('domain')))
    );

    $this->widgetSchema->setNameFormat('domain_list[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'DomainList';
  }

}
