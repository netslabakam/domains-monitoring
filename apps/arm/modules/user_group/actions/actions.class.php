<?php

require_once dirname(__FILE__) . '/../lib/user_groupGeneratorConfiguration.class.php';
require_once dirname(__FILE__) . '/../lib/user_groupGeneratorHelper.class.php';

/**
 * groups actions.
 *
 * @package    sf
 * @subpackage groups
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class user_groupActions extends autoUser_groupActions
{
    protected function processForm(sfWebRequest $request, sfForm $form)
    {
        $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
        if ($form->isValid()) {
            $notice = $form->getObject()->isNew() ? 'The item was created successfully.' : 'The item was updated successfully.';
            try {
                $user_group = $form->save();

                $values = $request->hasParameter('user_group_permissions') && is_array($request->getParameter('user_group_permissions')) ? $request->getParameter('user_group_permissions') : array();
                $existing = ProjectUtils::arrayKeysFilter($user_group->getUserGroupPermissions(), 'id');

                $unlink = array_diff($existing, $values);

                if (count($unlink) > 0) {
                    $q = Doctrine_Query::create()
                        ->delete("r.*")
                        ->from("UserGroupPermissions r")
                        ->whereIn("r.permission_id", array_values($unlink))
                        ->andWhere("r.user_group_id= ?", $user_group->getId())
                        ->execute();
                }
                $link = array_diff($values, $existing);

                if (count($link) > 0) {
                    foreach ($link as $id) {
                        $user_group_permissions = new UserGroupPermissions();
                        $user_group_permissions->setPermissionId($id);
                        $user_group_permissions->setUserGroupId($user_group->getId());
                        $user_group_permissions->save();
                    }
                }

            } catch (Doctrine_Validator_Exception $e) {
                $errorStack = $form->getObject()->getErrorStack();
                $message = get_class($form->getObject()) . ' has ' . count($errorStack) . " field" . (count($errorStack) > 1 ? 's' : null) . " with validation errors: ";
                foreach ($errorStack as $field => $errors) {
                    $message .= "$field (" . implode(", ", $errors) . "), ";
                }
                $message = trim($message, ', ');
                $this->getUser()->setFlash('error', $message);
                return sfView::SUCCESS;
            }
            $this->dispatcher->notify(new sfEvent($this, 'admin.save_object', array('object' => $user_group)));
            if ($request->hasParameter('_save_and_add')) {
                $this->getUser()->setFlash('notice', $notice . ' You can add another one below.');
                $this->redirect('@user_group');
            } elseif ($request->hasParameter('_save_and_list')) {
                $this->redirect('@user_group');
            } else {
                if (!$request->isXmlHttpRequest()) {
                    $this->getUser()->setFlash('notice', $notice);
                    $this->redirect(array('sf_route' => 'user_group_edit', 'sf_subject' => $user_group));
                }
            }
        } else {
            $this->getUser()->setFlash('error', 'The item has not been saved due to some errors.', false);
            $this->getResponse()->addHttpMeta('Sf-Form-Error', '1', true);
        }
    }
}
