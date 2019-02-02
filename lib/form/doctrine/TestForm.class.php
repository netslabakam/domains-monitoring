<?php

/**
 * Test form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class TestForm extends BaseTestForm
{
    public function configure()
    {
        $this->useFields(array('title', 'value_first', 'value_enum', 'created_at'));

//    $this->widgetSchema['value_first'] = new sfWidgetFormChoice(array('choices' => array('first' => 'Первый', 'second' => 'Второй'), 'multiple' => true, 'expanded' => true), array());

    }
}
