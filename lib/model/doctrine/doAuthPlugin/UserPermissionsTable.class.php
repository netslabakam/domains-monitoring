<?php


class UserPermissionsTable extends PluginUserPermissionsTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('UserPermissions');
    }
}