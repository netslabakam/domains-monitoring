<?php

/**
 * BaseHostingPlans
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property string $name
 * @property float $price
 * @property string $description
 * @property string $memory
 * @property integer $site_count
 * @property integer $db_count
 * @property Doctrine_Collection $ClientList
 * 
 * @method string              getName()        Returns the current record's "name" value
 * @method float               getPrice()       Returns the current record's "price" value
 * @method string              getDescription() Returns the current record's "description" value
 * @method string              getMemory()      Returns the current record's "memory" value
 * @method integer             getSiteCount()   Returns the current record's "site_count" value
 * @method integer             getDbCount()     Returns the current record's "db_count" value
 * @method Doctrine_Collection getClientList()  Returns the current record's "ClientList" collection
 * @method HostingPlans        setName()        Sets the current record's "name" value
 * @method HostingPlans        setPrice()       Sets the current record's "price" value
 * @method HostingPlans        setDescription() Sets the current record's "description" value
 * @method HostingPlans        setMemory()      Sets the current record's "memory" value
 * @method HostingPlans        setSiteCount()   Sets the current record's "site_count" value
 * @method HostingPlans        setDbCount()     Sets the current record's "db_count" value
 * @method HostingPlans        setClientList()  Sets the current record's "ClientList" collection
 * 
 * @package    sf
 * @subpackage model
 * @author     Atma
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class BaseHostingPlans extends sfDoctrineRecord
{
    public function setTableDefinition()
    {
        $this->setTableName('hosting_plans');
        $this->hasColumn('name', 'string', 255, array(
             'type' => 'string',
             'notnull' => true,
             'unique' => true,
             'length' => 255,
             ));
        $this->hasColumn('price', 'float', null, array(
             'type' => 'float',
             'notnull' => true,
             ));
        $this->hasColumn('description', 'string', 500, array(
             'type' => 'string',
             'length' => 500,
             ));
        $this->hasColumn('memory', 'string', 255, array(
             'type' => 'string',
             'notnull' => true,
             'length' => 255,
             ));
        $this->hasColumn('site_count', 'integer', null, array(
             'type' => 'integer',
             'notnull' => true,
             ));
        $this->hasColumn('db_count', 'integer', null, array(
             'type' => 'integer',
             'notnull' => true,
             ));
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasMany('ClientList', array(
             'local' => 'id',
             'foreign' => 'plan_id'));
    }
}