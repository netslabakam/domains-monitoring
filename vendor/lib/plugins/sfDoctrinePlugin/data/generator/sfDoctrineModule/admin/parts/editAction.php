    public function executeEdit(sfWebRequest $request)
    {
        $this-><?php echo $this->getSingularName() ?> = $this->getRoute()->getObject();
        $user = $this->getUser();
        $this->form = $this->configuration->getForm($this-><?php echo $this->getSingularName() ?>);
        $this->setPartialFilter();
    }
