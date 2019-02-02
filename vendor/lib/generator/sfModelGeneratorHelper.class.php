<?php

/**
 * Model generator helper.
 *
 * @package    symfony
 * @subpackage generator
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @version    SVN: $Id: sfModelGeneratorHelper.class.php 22914 2009-10-10 12:24:29Z Kris.Wallsmith $
 */
abstract class sfModelGeneratorHelper
{
    abstract public function getUrlForAction($action);

    public function linkToNew($params, $more_params = array())
    {
        if (isset($params['class'])) {
            $more_params['class'] = $params['class'];
        }

        return '<li class="sf_admin_action_new">' . link_to(__($params['label'], array(), 'sf_admin'), '@' . $this->getUrlForAction('new'), $more_params) . '</li>';

    }

    public function linkToEdit($object, $params)
    {
        return '<li class="sf_admin_action_edit">' . link_to(__($params['label'], array(), 'sf_admin'), $this->getUrlForAction('edit'), $object) . '</li>';
    }

    public function linkToDelete($object, $params, $more_params = array())
    {
        if ($object->isNew()) {
            return '';
        }

        $p = array('method' => 'delete', 'confirm' => !empty($params['confirm']) ? __($params['confirm'], array(), 'sf_admin') : $params['confirm']);


        if (isset($params['fields'])) {
            $p = array_merge(array('fields' => $params['fields']), $p, $more_params);
        }

        $p = array_merge($p, $more_params);

        return '<li class="sf_admin_action_delete">' . link_to(__($params['label'], array(), 'sf_admin'), $this->getUrlForAction('delete'), $object, $p) . '</li>';
    }

    public function linkToList($params)
    {
        return '<li class="sf_admin_action_list">' . link_to(__($params['label'], array(), 'sf_admin'), '@' . $this->getUrlForAction('list')) . '</li>';
    }

    public function linkToSave($object, $params)
    {
        return '<li class="sf_admin_action_save"><input type="submit" value="' . __($params['label'], array(), 'sf_admin') . '" /></li>';
    }

    public function linkToSaveAndAdd($object, $params)
    {
        if (!$object->isNew()) {
            return '';
        }

        return '<li class="sf_admin_action_save_and_add"><input type="submit" value="' . __($params['label'], array(), 'sf_admin') . '" name="_save_and_add" /></li>';
    }

    public function linkToSaveAndList($object, $params)
    {
        return '<li class="sf_admin_action_save_and_list"><input type="submit" value="' . __($params['label'], array(), 'sf_admin') . '" name="_save_and_list" /></li>';
    }
}
