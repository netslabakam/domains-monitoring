<?php


class UserLogTable extends PluginUserLogTable
{
    
    public static function getInstance()
    {
        return Doctrine_Core::getTable('UserLog');
    }
}