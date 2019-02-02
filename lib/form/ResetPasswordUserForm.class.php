<?php
class ResetPasswordUserForm extends BaseResetPasswordForm {
    public function configure()
    {
        parent::configure();

        $this->widgetSchema['email'] = new sfWidgetFormInputText(array(), array('required' => 'required', 'placeholder' => 'Эл. почта', 'size' => 24));
        
        $q = Doctrine_Query::create()
            ->from("User")
            ->where("is_super_admin = 1")
            ->andWhere("username <> ?", 'root')
        ;
        $this->setValidators(array(
            'email' => new sfValidatorAnd(array(new sfValidatorEmail(), new sfValidatorDoctrineChoice(array('query' => $q, 'model'=> 'User','column' => 'email'))))
        ));
    }
}
?>
