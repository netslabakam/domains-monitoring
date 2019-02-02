<?php

/**
 * Seo form.
 *
 * @package    sf
 * @subpackage form
 * @author     Atma
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class SeoForm extends BaseSeoForm
{
    public function configure()
    {
        $this->useFields(array('url', 'title', 'h1', 'description'/*, 'body'*/));

        $this->widgetSchema['url'] = new sfWidgetFormInputText(array(), array("size" => 56, "required" => true));
//        $this->widgetSchema['body'] = new sfWidgetFormTextarea(array(), array("rows" => 20, "cols" => 70, "class" => 'rich'));
        $this->widgetSchema['title'] = new sfWidgetFormTextarea(array(), array("rows" => 2, "cols" => 70));
        $this->widgetSchema['h1'] = new sfWidgetFormTextarea(array(), array("rows" => 2, "cols" => 70));
        $this->widgetSchema['description'] = new sfWidgetFormTextarea(array(), array("rows" => 2, "cols" => 70));
        $this->validatorSchema->setPostValidator(
            new sfValidatorDoctrineUnique(array('model' => 'Seo', 'column' => array('url')))
        );
    }
}
