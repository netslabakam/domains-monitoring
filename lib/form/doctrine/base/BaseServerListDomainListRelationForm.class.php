<?php

/**
 * ServerListDomainListRelation form base class.
 *
 * @method ServerListDomainListRelation getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseServerListDomainListRelationForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'server_id' => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'domain_id' => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
    ));

    $this->setValidators(array(
      'server_id' => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'server_id', 'required' => false)),
      'domain_id' => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'domain_id', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('server_list_domain_list_relation[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'ServerListDomainListRelation';
  }

}
