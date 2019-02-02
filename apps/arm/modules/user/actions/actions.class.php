<?php

require_once dirname(__FILE__) . '/../lib/userGeneratorConfiguration.class.php';
require_once dirname(__FILE__) . '/../lib/userGeneratorHelper.class.php';

/**
 * user actions.
 *
 * @package    sf
 * @subpackage user
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class userActions extends autoUserActions
{
    protected function processForm(sfWebRequest $request, sfForm $form)
    {
        $params = $request->getParameter($form->getName());
        $form->bind($params, $request->getFiles($form->getName()));
        if ($form->isValid()) {
            $is_new = $form->isNew();
            $notice = $form->getObject()->isNew() ? 'The item was created successfully.' : 'The item was updated successfully.';
            try {
                $user = $form->save();
                $post = $request->getParameter($form->getName());
                if ($user->getEmail()) {
                    /*
                    if ($user->getIsSuperAdmin() && $user->getPartnerId() && $is_new) {
                        $mailer = $this->getMailer();
                        $message = $mailer->compose(
                            sfConfig::get(((sfConfig::get('sf_environment') == 'dev' ? 'email_sender' : 'doAuth_email_from')), 'noreply@' . $request->getHost()),
                            array(sfConfig::get('app_email_dev', $user->getEmail())),
                            'Учетная запись к «АРМ предприятия»'
                        );
                        $message->setContentType('text/plain; charset=UTF-8');
                        $message->setBody($this->getPartial('user/mail_create', array('user' => $user, 'password' => $post['password'])));
                        $result = $mailer->send($message);
                    }
                    */
                }
                UserPermissions::build($request, $user);
                UserGroupUsers::build($request, $user);
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
            $this->dispatcher->notify(new sfEvent($this, 'admin.save_object', array('object' => $user)));
            if ($request->hasParameter('_save_and_add')) {
                $this->getUser()->setFlash('notice', $notice . ' You can add another one below.');
                $this->redirect('@user_new');
            } elseif ($request->hasParameter('_save_and_list')) {
                $this->redirect('@user');
            } else {
                if (!$request->isXmlHttpRequest()) {
                    $this->getUser()->setFlash('notice', $notice);
                    $this->redirect(array('sf_route' => 'user_edit', 'sf_subject' => $user));
                }
            }
        } else {
            $this->getUser()->setFlash('error', 'The item has not been saved due to some errors.', false);
            $this->getResponse()->addHttpMeta('Sf-Form-Error', '1', true);
        }
    }
}
