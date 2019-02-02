<?php

/**
 * Partner form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class wwwPartnerForm extends BasePartnerForm
{
    public function configure()
    {
        $this->useFields(array('head_name', 'full_name', 'short_name', 'inn', 'coords', 'address', 'email', 'phones', 'partner_cats_list'));

        $this->widgetSchema['inn'] = new sfWidgetFormInputText(array(), array("size" => 12, "maxlength" => 12, 'required' => true));
        $this->widgetSchema['email'] = new sfWidgetFormInput(array('type' => 'email'), array("size" => 32, "maxlength" => 128, 'autocomplete' => 'off', 'required' => 'required'));
        $this->widgetSchema['phones'] = new sfWidgetFormInputText(array(), array('class' => 'many_phones', 'autocomplete' => 'off'));
        $this->widgetSchema['full_name'] = new sfWidgetFormTextarea(array(), array("rows" => 2, "cols" => 61, "required" => true));
        $this->widgetSchema['address'] = new sfWidgetFormTextarea(array(), array("rows" => 2, "cols" => 61, "required" => true));
        $choices = array();
        $cats = Doctrine_Query::create()
            ->from("Cat c")
            ->orderBy("c.title")
            ->fetchArray()
        ;
        foreach ($cats as $cat) {
            $choices[$cat['id']] = $cat['title'];
        }
        $this->widgetSchema['partner_cats_list'] = new sfWidgetFormChoice(array('label' => 'Категории', 'multiple' => true, 'choices' => $choices, 'expanded' => true), array());
        $this->widgetSchema->setLabels(array(
            'head_name' => 'Руководитель',
            'full_name' => 'Полное наименование',
            'short_name' => 'Краткое наименование',
            'inn' => 'ИНН',
            'email' => 'Эл. почта',
            'phones' => 'Телефоны',
            'coords' => 'Координаты',
            'address' => 'Адрес'
        ));
        $this->validatorSchema['email'] = new sfValidatorAnd(array(
            new sfValidatorString(array('max_length' => 128)),
            new sfValidatorEmail()
        ), array('required' => true));
        $this->validatorSchema['inn'] = new sfValidatorAnd(array(
            new sfValidatorInteger(),
            new sfValidatorString(array('min_length' => 10, 'max_length' => 12), array('min_length' => 'Неправильный формат'))
        ));
        $this->validatorSchema->setPostValidator(
            new sfValidatorDoctrineUnique(array('model' => 'Partner', 'column' => array('inn')))
        );
        $this->validatorSchema['partner_cats_list'] = new sfValidatorDoctrineChoice(array('multiple' => true, 'model' => 'Cat', 'required' => true));
    }
}