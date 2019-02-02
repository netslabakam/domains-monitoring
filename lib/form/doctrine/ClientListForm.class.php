<?php

/**
 * ClientList form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class ClientListForm extends BaseClientListForm
{
  public function configure()
  {
    $this->useFields(array( 'name', 'email', 'plan_id','is_paid','paidtill', 'period_id'));

    $this->validatorSchema['email'] = new sfValidatorAnd(array(
          new sfValidatorString(array('max_length' => 255)),
          new sfValidatorEmail(),
      ), array('required' => true));

      $now = date_create(date('Y-m-d'));


      $this->validatorSchema['paidtill'] = new sfValidatorDate(array('min' => time() ));
//    $this->widgetSchema['email_id'] = new sfWidgetFormDoctrineChoice(array('model' => $this->getRelatedModelName('DomainList'), 'add_empty' => true, 'method' => 'getEmail'), array("autocomplete" => "off"));
  }
}
