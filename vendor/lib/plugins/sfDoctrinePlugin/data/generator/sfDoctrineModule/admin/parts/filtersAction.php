
    protected function getFilters()
    {
        return $this->getUser()->getAttribute($this->getPartialPrefix() . '<?php echo $this->getModuleName() ?>.filters', $this->configuration->getFilterDefaults(), 'admin_module');
    }

    protected function setFilters(array $filters)
    {
        return $this->getUser()->setAttribute($this->getPartialPrefix() . '<?php echo $this->getModuleName() ?>.filters', $filters, 'admin_module');
    }
