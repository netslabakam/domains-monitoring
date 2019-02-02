<?php

/**
 * HostingPlans form base class.
 *
 * @method HostingPlans getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseHostingPlansForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'          => new sfWidgetFormInputHidden(array(), array("autocomplete" => "off")),
      'name'        => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'price'       => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 65, "required" => true)),
      'description' => new sfWidgetFormTextarea(array(), array("autocomplete" => "off", "rows" => 5, "cols" => 70)),
      'memory'      => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255, "required" => true)),
      'site_count'  => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 8, "maxlength" => 8, "required" => true)),
      'db_count'    => new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 8, "maxlength" => 8, "required" => true)),
    ));

    $this->setValidators(array(
      'id'          => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'name'        => new sfValidatorString(array('max_length' => 255)),
      'price'       => new sfValidatorNumber(),
      'description' => new sfValidatorString(array('max_length' => 500, 'required' => false)),
      'memory'      => new sfValidatorString(array('max_length' => 255)),
      'site_count'  => new sfValidatorInteger(),
      'db_count'    => new sfValidatorInteger(),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorDoctrineUnique(array('model' => 'HostingPlans', 'column' => array('name')))
    );

    $this->widgetSchema->setNameFormat('hosting_plans[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'HostingPlans';
  }

}
