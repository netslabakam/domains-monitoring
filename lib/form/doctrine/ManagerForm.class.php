<?php
class ManagerForm extends PluginUserForm
{
    public function configure()
    {
        $this->useFields(array('email', 'password', 'email', 'partner_id', 'rank_id', 'is_super_admin', 'is_active'));
        $account = sfContext::getInstance()->getUser()->getAccount();
        if($account->getPartnerId()){
            $this->setDefault('partner_id', $account->getPartnerId());
            $this->setDefault('is_active', true);
            $this->setDefault('is_super_admin', true);

            $is_app_moderator_attr = array();
            if(!$this->isNew() && $this->getObject()->getRankId()){
                $is_app_moderator_attr['checked'] = 'checked';
            }
            $this->widgetSchema['is_app_moderator'] = new sfWidgetFormInput(array('type' => 'checkbox'), $is_app_moderator_attr);
            $this->widgetSchema['partner_id'] = new sfWidgetFormInputHidden(array());
            $this->widgetSchema['is_active'] = new sfWidgetFormInputHidden(array());
            $this->widgetSchema['is_super_admin'] = new sfWidgetFormInputHidden(array());
            $this->widgetSchema['rank_id'] = new sfWidgetFormInputHidden(array());

            $this->widgetSchema['password'] = new sfWidgetFormInputText(array(), array("size" => 50, "maxlength" => 128, "required" => true));
            $this->widgetSchema['email'] = new sfWidgetFormInputText(array(), array("size" => 50, "maxlength" => 128, "required" => true));
        }
    }
}
?>