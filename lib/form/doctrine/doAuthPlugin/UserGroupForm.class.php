<?php

/**
 * UserGroup form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrinePluginFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class UserGroupForm extends PluginUserGroupForm
{
    public function configure()
    {
        $this->useFields(array('title', 'user_list'));

        $this->widgetSchema['user_list'] = new sfWidgetFormDoctrineChoice(array('multiple' => true, 'model' => NULL, 'query' => Doctrine_Query::create()->select("u.*")->from("User u")->where("u.is_super_admin = 1 AND u.username != 'root'")->orderBy("u.username"), 'expanded' => true));
    }
}
