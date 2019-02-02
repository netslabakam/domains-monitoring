
protected function setPartialFilter() {
    if (isset($this->_partial_filters)) {
        foreach ($this->form->getWidgetSchema()->getPositions() as $field) {
            if (isset($this->_partial_filters[$field])) {
                $this->form->setWidget($field, new sfWidgetFormInputHidden());
                $ex = explode("=", $this->_partial_filters[$field]);
                $this->form->setDefault($field, trim($ex[1]));
            }
        }
    }
}

protected function processForm(sfWebRequest $request, sfForm $form)
{
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
    <?php if ($this->configuration->hasStruct()): ?>
    if ($form->isValid()) {
        $<?php echo $this->getSingularName() ?> = $form->save();
        $form = $this->configuration->getForm($<?php echo $this->getSingularName();?>);
    }
    echo $this->getPartial('struct_form', array('form' => $form));
    die();
    <?php else: ?>
    if ($form->isValid())
    {
        $notice = $form->getObject()->isNew() ? 'The item was created successfully.' : 'The item was updated successfully.';
        try
        {
            $<?php echo $this->getSingularName() ?> = $form->save();
        }
        catch (Doctrine_Validator_Exception $e)
        {
            $errorStack = $form->getObject()->getErrorStack();
            $message = get_class($form->getObject()) . ' has ' . count($errorStack) . " field" . (count($errorStack) > 1 ?  's' : null) . " with validation errors: ";
            foreach ($errorStack as $field => $errors)
            {
                $message .= "$field (" . implode(", ", $errors) . "), ";
            }
            $message = trim($message, ', ');
            $this->getUser()->setFlash('error', $message);
            return sfView::SUCCESS;
        }
        $this->dispatcher->notify(new sfEvent($this, 'admin.save_object', array('object' => $<?php echo $this->getSingularName() ?>)));
        if ($request->hasParameter('_save_and_add'))
        {
            $this->getUser()->setFlash('notice', $notice.' You can add another one below.');
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('<?php echo $this->getUrlForAction('new') ?>');
            $this->redirect($redirect_url);
        }
        elseif ($request->hasParameter('_save_and_list'))
        {
            $this->getUser()->setFlash('notice', $notice);
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('<?php echo $this->getUrlForAction('list') ?>');
            $this->redirect($redirect_url);
        }
        else
        {
            if(!$request->isXmlHttpRequest())
            {
                $this->getUser()->setFlash('notice', $notice);
                $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->getController()->genUrl(array('sf_route' => '<?php echo $this->getUrlForAction('edit') ?>', 'sf_subject' => $<?php echo $this->getSingularName() ?>));


                $this->redirect($request->hasParameter('return') ? $request->getParameter('return') : $redirect_url);
            }
        }
    }
    else
    {
        $this->getUser()->setFlash('error', 'The item has not been saved due to some errors.', false);
        $this->getResponse()->addHttpMeta('Sf-Form-Error', '1', true);
    }
<?php endif; ?>
}
