<?php


class UserGroupTable extends PluginUserGroupTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('UserGroup');
    }
}