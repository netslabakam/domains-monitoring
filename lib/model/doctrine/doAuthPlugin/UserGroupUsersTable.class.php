<?php


class UserGroupUsersTable extends PluginUserGroupUsersTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('UserGroupUsers');
    }
}