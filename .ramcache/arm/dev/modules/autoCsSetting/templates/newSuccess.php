<?php use_helper('I18N', 'Date') ?>
<?php include_partial('csSetting/assets') ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
<?php
$return = url_for('csSetting/index');
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
<span class="lui__h1"><?php echo __('New Setting', array(), 'messages') ?></span>
<i class="br15 hidden_element"></i>
    <?php endif; ?>
<div class="lui__list_actions__wrapper"<?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?>>
<?php include_partial('csSetting/form_actions', array('cs_setting' => $cs_setting, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
</div>
<?php include_partial('csSetting/flashes') ?>
<?php if ($form->hasGlobalErrors()): ?>
  <?php echo $form->renderGlobalErrors() ?>
<?php endif; ?>
<?php include_partial('csSetting/form', array('cs_setting' => $cs_setting, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
<?php include_partial('csSetting/form_footer', array('cs_setting' => $cs_setting, 'form' => $form, 'configuration' => $configuration, '_partial' => isset($_partial))) ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
</div>
<?php endif; ?>
