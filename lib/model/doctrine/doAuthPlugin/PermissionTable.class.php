<?php


class PermissionTable extends PluginPermissionTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('Permission');
    }
}