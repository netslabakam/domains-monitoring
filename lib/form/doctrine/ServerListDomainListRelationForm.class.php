<?php

/**
 * ServerListDomainListRelation form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class ServerListDomainListRelationForm extends BaseServerListDomainListRelationForm
{
  public function configure()
  {
    $this->useFields(array('server_id', 'domain_id'));
  }
}
