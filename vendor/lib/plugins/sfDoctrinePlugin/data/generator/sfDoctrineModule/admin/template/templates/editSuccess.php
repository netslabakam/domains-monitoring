[?php use_helper('I18N', 'Date') ?]
[?php include_partial('<?php echo $this->getModuleName() ?>/assets') ?]
[?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?]
[?php
$return = url_for('<?php echo $this->getModuleName() ?>/index');
if($sf_request->hasParameter('return'))
{
  $return = $sf_request->getParameter('return');
}
?]
<div class="lui_form_layer"><a href="[?php echo $return;?]" class="lui_form_layer__close anb"></a>
[?php endif; ?]
    [?php if (!isset($_partial)): ?]
<span class="lui__h1">[?php echo <?php echo $this->getI18NString('edit.title') ?> ?]</span>
<i class="br15 hidden_element"></i>
    [?php endif; ?]
<div class="lui__list_actions__wrapper"[?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?]>
[?php include_partial('<?php echo $this->getModuleName() ?>/form_actions', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?]
</div>
[?php include_partial('<?php echo $this->getModuleName() ?>/flashes') ?]
[?php if ($form->hasGlobalErrors()): ?]
  [?php echo $form->renderGlobalErrors() ?]
[?php endif; ?]
[?php include_partial('<?php echo $this->getModuleName() ?>/form', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?]
[?php include_partial('<?php echo $this->getModuleName() ?>/form_footer', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'form' => $form, 'configuration' => $configuration)) ?]
[?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?]
</div>
[?php endif; ?]