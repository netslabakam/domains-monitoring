<?php

/**
 * ServerList form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class ServerListForm extends BaseServerListForm
{
    public function configure()
    {
        $this->useFields(array('title', 'ip_address', 'comment'));

//        $this->widgetSchema['domain_list_list'] = new sfWidgetFormDoctrineChoice(array('multiple' => true, 'model' => 'DomainList', 'expanded' => true, 'multiple' => true));
  }
}
