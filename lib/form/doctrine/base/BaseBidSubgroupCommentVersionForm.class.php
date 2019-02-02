<?php

/**
 * BidSubgroupCommentVersion form base class.
 *
 * @method BidSubgroupCommentVersion getObject() Returns the current form's model object
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseBidSubgroupCommentVersionForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'           => new sfWidgetFormInputHidden(array(), array()),
      'bid_id'       => new sfWidgetFormInputText(array(), array("size" => 8, "maxlength" => 8, "required" => true)),
      'subgroup'     => new sfWidgetFormInputText(array(), array("size" => 64, "maxlength" => 255, "required" => true)),
      'comment'      => new sfWidgetFormTextarea(array(), array("rows" => 5, "cols" => 70)),
      'author_name'  => new sfWidgetFormInputText(array(), array("size" => 64, "maxlength" => 255)),
      'author_phone' => new sfWidgetFormInputText(array(), array("size" => 64, "maxlength" => 255)),
      'version'      => new sfWidgetFormInputHidden(array(), array()),
    ));

    $this->setValidators(array(
      'id'           => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'id', 'required' => false)),
      'bid_id'       => new sfValidatorInteger(),
      'subgroup'     => new sfValidatorString(array('max_length' => 255)),
      'comment'      => new sfValidatorString(array('max_length' => 1000, 'required' => false)),
      'author_name'  => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'author_phone' => new sfValidatorString(array('max_length' => 255, 'required' => false)),
      'version'      => new sfValidatorDoctrineChoice(array('model' => $this->getModelName(), 'column' => 'version', 'required' => false)),
    ));

    $this->widgetSchema->setNameFormat('bid_subgroup_comment_version[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'BidSubgroupCommentVersion';
  }

}
