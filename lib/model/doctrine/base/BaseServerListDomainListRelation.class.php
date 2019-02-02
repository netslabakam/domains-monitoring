<?php

/**
 * BaseServerListDomainListRelation
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property integer $server_id
 * @property integer $domain_id
 * @property ServerList $ServerList
 * @property DomainList $DomainList
 * 
 * @method integer                      getServerId()   Returns the current record's "server_id" value
 * @method integer                      getDomainId()   Returns the current record's "domain_id" value
 * @method ServerList                   getServerList() Returns the current record's "ServerList" value
 * @method DomainList                   getDomainList() Returns the current record's "DomainList" value
 * @method ServerListDomainListRelation setServerId()   Sets the current record's "server_id" value
 * @method ServerListDomainListRelation setDomainId()   Sets the current record's "domain_id" value
 * @method ServerListDomainListRelation setServerList() Sets the current record's "ServerList" value
 * @method ServerListDomainListRelation setDomainList() Sets the current record's "DomainList" value
 * 
 * @package    sf
 * @subpackage model
 * @author     Atma
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class BaseServerListDomainListRelation extends sfDoctrineRecord
{
    public function setTableDefinition()
    {
        $this->setTableName('server_list_domain_list_relation');
        $this->hasColumn('server_id', 'integer', null, array(
             'type' => 'integer',
             'primary' => true,
             ));
        $this->hasColumn('domain_id', 'integer', null, array(
             'type' => 'integer',
             'primary' => true,
             ));
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasOne('ServerList', array(
             'local' => 'server_id',
             'foreign' => 'id',
             'onDelete' => 'CASCADE'));

        $this->hasOne('DomainList', array(
             'local' => 'domain_id',
             'foreign' => 'id',
             'onDelete' => 'CASCADE'));
    }
}