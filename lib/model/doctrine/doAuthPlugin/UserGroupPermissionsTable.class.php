<?php


class UserGroupPermissionsTable extends PluginUserGroupPermissionsTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('UserGroupPermissions');
    }
}