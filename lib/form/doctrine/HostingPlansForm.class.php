<?php

/**
 * HostingPlans form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class HostingPlansForm extends BaseHostingPlansForm
{
  public function configure()
  {
    $this->useFields(array('name', 'memory', 'site_count', 'db_count', 'price', 'description'));

    $this->widgetSchema['price'] = new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 20, "required" => true));
    $this->widgetSchema->setHelp('price', '₽');
  }
}
