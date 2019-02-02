<?php

/**
 * TestItem form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class TestItemForm extends BaseTestItemForm
{
    public function configure()
    {
        $this->useFields(array('title', 'test_id'));

        $this->widgetSchema->setLabels(array('title' => 'Название'));
        $this->widgetSchema['test_id'] = new sfWidgetFormInputHidden();
    }
}
