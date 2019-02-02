    public function executeFilter(sfWebRequest $request)
    {
        $this->setPage(1);

        $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('<?php echo $this->getUrlForAction('list') ?>');



        if ($request->hasParameter('_reset'))
        {
            $this->setFilters($this->configuration->getFilterDefaults());
            $this->redirect($redirect_url);
        }

        $this->filters = $this->configuration->getFilterForm($this->getFilters());

        $this->filters->bind($request->getParameter($this->filters->getName()));
        if ($this->filters->isValid())
        {
            $this->setFilters($this->filters->getValues());
            $this->redirect($redirect_url);
        }

        $this->pager = $this->getPager($request);
        $this->sort = $this->getSort();

        $this->setTemplate('index');
    }
