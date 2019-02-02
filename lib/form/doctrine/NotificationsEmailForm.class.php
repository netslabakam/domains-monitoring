<?php

/**
 * NotificationsEmail form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class NotificationsEmailForm extends BaseNotificationsEmailForm
{
  public function configure()
  {
    $this->useFields(array('email', 'is_active'));

    $this->validatorSchema['email'] = new sfValidatorAnd(array(
      $this->validatorSchema['email'],
      new sfValidatorEmail(),
    ));
  }
}
