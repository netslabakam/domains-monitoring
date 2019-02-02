    public function executeCreate(sfWebRequest $request)
    {
        $this->form = $this->configuration->getForm();
        $this-><?php echo $this->getSingularName() ?> = $this->form->getObject();
        $this->setPartialFilter();
        $this->processForm($request, $this->form);

        $this->setTemplate('new');
    }
