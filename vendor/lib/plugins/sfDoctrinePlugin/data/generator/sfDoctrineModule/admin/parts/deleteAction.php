    public function executeDelete(sfWebRequest $request)
    {
<?php if ($this->configuration->hasStruct()): ?>
        $res = array('state' => 'error', 'message' => 'Удаление невозможно');
        $obj = $this->getRoute()->getObject();
        $res['id'] = str_replace('_', '', $this->getModuleName()) . '_' . $obj->getId();
        if ($obj->delete()) {
            $res['state'] = 'success';
            $res['message'] = 'Объект успешно удалён';
        }
        echo json_encode($res);
        return sfView::NONE;
<?php else:?>
        $this->dispatcher->notify(new sfEvent($this, 'admin.delete_object', array('object' => $this->getRoute()->getObject())));

        $user = $this->getUser();

        if ($this->getRoute()->getObject()->delete())
        {
            if(!$request->isXmlHttpRequest())
            {
                $this->getUser()->setFlash('notice', 'The item was deleted successfully.');
            }
        }
        if(!$request->isXmlHttpRequest())
        {
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('<?php echo $this->getUrlForAction('list') ?>');
            $this->redirect($redirect_url);
        }
        else
        {
            return sfView::NONE;
        }
<?php endif;?>
    }
