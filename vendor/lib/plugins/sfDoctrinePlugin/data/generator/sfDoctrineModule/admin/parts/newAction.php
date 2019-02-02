public function executeNew(sfWebRequest $request)
{
    $this->form = $this->configuration->getForm();



    $this->setPartialFilter();

    $this-><?php echo $this->getSingularName() ?> = $this->form->getObject();
    <?php if ($this->configuration->hasStruct()): ?>
    <?php
    $struct = $this->configuration->getStruct();
    ?>
    <?php if(count($struct) == 1):?>
    $pid = $request->getParameter('pid');
    if ($pid) {
        $pid = str_replace('<?php echo strtolower($struct[0]['table']);?>_', '', $pid);
        if (is_numeric($pid)) {
            $this->form->setDefault('<?php echo strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct[0]['table']))?>_id', $pid);
        }
    }
    <?php endif;?>
    echo $this->getPartial('struct_form', array('form' => $this->form));
    return sfView::NONE;
    <?php endif;?>
}
