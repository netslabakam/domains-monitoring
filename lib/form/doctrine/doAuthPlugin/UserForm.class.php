<?php

class UserForm extends PluginUserForm
{
    public function configure()
    {
        $fields = array('username', 'password', 'email', 'is_super_admin', 'is_active', 'fname', 'iname', 'oname', 'user_group_list');
        $this->useFields($fields);

        $this->widgetSchema['fname'] = new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 34, "maxlength" => 255));
        $this->widgetSchema['iname'] = new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 34, "maxlength" => 255));
        $this->widgetSchema['oname'] = new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 34, "maxlength" => 255));
        $this->widgetSchema['user_group_list'] = new sfWidgetFormDoctrineChoice(array('multiple' => false, 'model' => 'UserGroup', 'expanded' => false, 'add_empty' => true));
        $this->widgetSchema['password'] = new sfWidgetFormInputText(array(), array("size" => 50, "maxlength" => 128, "required" => true, "class" => "gen_pass"));
        $this->widgetSchema['email'] = new sfWidgetFormInputText(array(), array("size" => 50, "maxlength" => 128, "required" => true));

        $this->validatorSchema->setPostValidator(
            new sfValidatorAnd(array(
                new sfValidatorDoctrineUnique(array('model' => 'User', 'column' => array('username'))),
                new sfValidatorDoctrineUnique(array('model' => 'User', 'column' => array('email'), 'skip_empty' => true))
            ))
        );

        //$this->widgetSchema['user_permissions_list'] = new sfWidgetFormDoctrineChoice(array('multiple' => true, 'model' => 'Permission', 'expanded' => true));
    }
}

