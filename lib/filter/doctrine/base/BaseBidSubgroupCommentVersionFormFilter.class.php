<?php

/**
 * BidSubgroupCommentVersion filter form base class.
 *
 * @package    sf
 * @subpackage filter
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormFilterGeneratedTemplate.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class BaseBidSubgroupCommentVersionFormFilter extends BaseFormFilterDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'bid_id'       => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'subgroup'     => new sfWidgetFormFilterInput(array('with_empty' => false)),
      'comment'      => new sfWidgetFormFilterInput(),
      'author_name'  => new sfWidgetFormFilterInput(),
      'author_phone' => new sfWidgetFormFilterInput(),
    ));

    $this->setValidators(array(
      'bid_id'       => new sfValidatorSchemaFilter('text', new sfValidatorInteger(array('required' => false))),
      'subgroup'     => new sfValidatorPass(array('required' => false)),
      'comment'      => new sfValidatorPass(array('required' => false)),
      'author_name'  => new sfValidatorPass(array('required' => false)),
      'author_phone' => new sfValidatorPass(array('required' => false)),
    ));

    $this->widgetSchema->setNameFormat('bid_subgroup_comment_version_filters[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'BidSubgroupCommentVersion';
  }

  public function getFields()
  {
    return array(
      'id'           => 'Number',
      'bid_id'       => 'Number',
      'subgroup'     => 'Text',
      'comment'      => 'Text',
      'author_name'  => 'Text',
      'author_phone' => 'Text',
      'version'      => 'Number',
    );
  }
}
