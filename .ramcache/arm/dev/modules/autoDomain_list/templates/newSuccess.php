<?php use_helper('I18N', 'Date') ?>
<?php include_partial('domain_list/assets') ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
<?php
$return = url_for('domain_list/index');
if($sf_request->hasParameter('return'))
{
  $return = $sf_request->getParameter('return');
}
elseif($sf_request->getReferer() != '' && strpos($sf_request->getReferer(), $sf_request->getUri()) === false)
{
  $return = $sf_request->getReferer();
}
?>
<div class="lui_form_layer"><a href="<?php echo $return;?>" class="lui_form_layer__close anb"></a>
<?php endif; ?>
    <?php if (!isset($_partial)): ?>
<span class="lui__h1"><?php echo __('Новый домен', array(), 'messages') ?></span>
<i class="br15 hidden_element"></i>
    <?php endif; ?>
<div class="lui__list_actions__wrapper"<?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?>>
<?php include_partial('domain_list/form_actions', array('domain_list' => $domain_list, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
</div>
<?php include_partial('domain_list/flashes') ?>
<?php if ($form->hasGlobalErrors()): ?>
  <?php echo $form->renderGlobalErrors() ?>
<?php endif; ?>
<?php include_partial('domain_list/form', array('domain_list' => $domain_list, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
<?php include_partial('domain_list/form_footer', array('domain_list' => $domain_list, 'form' => $form, 'configuration' => $configuration, '_partial' => isset($_partial))) ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
</div>
<?php endif; ?>
