<?php

/**
 * Page form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class PageForm extends BasePageForm
{
    public function configure()
    {
        $this->useFields(array('title', 'alias', 'body', 'is_activated'));

        $this->widgetSchema['alias'] = new sfWidgetFormInputText(array(), array("autocomplete" => "off", "size" => 64, "maxlength" => 255));
        $this->widgetSchema['body'] = new sfWidgetFormTextarea(array(), array("rows" => 40, "cols" => 100, 'class' => 'rich'));
    }
}
