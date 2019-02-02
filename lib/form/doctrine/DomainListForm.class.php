<?php

/**
 * DomainList form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class DomainListForm extends BaseDomainListForm
{
  public function configure()
  {
    $this->useFields(array('domain', 'client_id', "reg_id"));

      $this->widgetSchema['reg_id'] = new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('RegList'), 'add_empty' => true, 'method' => 'getAddress'), array("autocomplete" => "off"));
//      $this->validatorSchema['email'] = new sfValidatorAnd(array(
//          new sfValidatorString(array('max_length' => 255)),
//          new sfValidatorEmail(),
//      ), array('required' => false));
      $this->widgetSchema['client_id'] = new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('ClientList'), 'add_empty' => true, 'method' => 'getEmail'), array("autocomplete" => "off"));

  }

  public function bind(array $taintedValues = null, array $taintedFiles = null)
  {
      $d = $taintedValues['domain'];

      $d = preg_replace('/^https?:\/\/www\./i', "", $d);
      $d = preg_replace('/^https?:\/\//i', "", $d);
      $d = preg_replace('/^www\./i', "", $d);

      $taintedValues['domain'] = $d;
      parent::bind($taintedValues, $taintedFiles);

  }
}