<?php

class mainActions extends sfActions
{
    public function executeEvent(sfWebRequest $request)
    {
        return sfView::SUCCESS;
    }

    public function executeIndex(sfWebRequest $request)
    {

    }

    public function executeProfile(sfWebRequest $request)
    {
        $account = $this->getUser()->getAccount();
        $this->form = new ProfileForm($account);
        if ($request->isMethod('post')) {
            $params = $request->getParameter($this->form->getName());
            $params['email'] = $account->getEmail();
            $this->form->bind($params, $request->getFiles($this->form->getName()));
            if ($this->form->isValid()) {
                $user = $this->form->save();
                $this->getUser()->setFlash('notice', "Данные сохранены");
            } else {
                $errorStack = $this->form->getObject()->getErrorStack();
                $message = get_class($this->form->getObject()) . ' has ' . count($errorStack) . " field" . (count($errorStack) > 1 ? 's' : null) . " with validation errors: ";
                foreach ($errorStack as $field => $errors) {
                    $message .= "$field (" . implode(", ", $errors) . "), ";
                }
                $message = trim($message, ', ');
                $this->getUser()->setFlash('error', $message);
            }
        }
    }

    public function executeError404(sfWebRequest $request)
    {
        $this->setLayout('404');
    }

    public function executeVersion(sfWebRequest $request)
    {
        $this->forward404Unless($this->getUser()->getUsername() == 'root');
        $this->setLayout(false);
    }
}
