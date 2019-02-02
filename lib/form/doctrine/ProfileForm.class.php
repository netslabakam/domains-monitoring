<?php
class ProfileForm extends PluginUserForm
{
    public function configure()
    {
        $this->useFields(array('email', 'password'));

        $this->widgetSchema['email'] = new sfWidgetFormInputText(array(), array("size" => 50, "maxlength" => 128, "required" => true, "disabled" => true));
        $this->widgetSchema['password'] = new sfWidgetFormInputText(array(), array("size" => 36, "maxlength" => 128, "required" => false, "class" => "gen_pass"));
        $this->widgetSchema->setLabels(array(
            'email' => 'Электронная почта',
            'password' => 'Пароль'
        ));
    }
}