<?php

/**
 * user_log module configuration.
 *
 * @package    sf
 * @subpackage user_log
 * @author     Atma
 * @version    SVN: $Id: configuration.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class user_logGeneratorConfiguration extends BaseUser_logGeneratorConfiguration
{
    public function getListActions()
    {
        return array();
    }
    public function getListBatchActions()
    {
        return array();
    }
}
