<?php use_helper('I18N', 'Date') ?>
<?php include_partial('client_list/assets') ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
<?php
$return = url_for('client_list/index');
if($sf_request->hasParameter('return'))
{
  $return = $sf_request->getParameter('return');
}
?>
<div class="lui_form_layer"><a href="<?php echo $return;?>" class="lui_form_layer__close anb"></a>
<?php endif; ?>
    <?php if (!isset($_partial)): ?>
<span class="lui__h1"><?php echo __('Редактирование клиента', array(), 'messages') ?></span>
<i class="br15 hidden_element"></i>
    <?php endif; ?>
<div class="lui__list_actions__wrapper"<?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?>>
<?php include_partial('client_list/form_actions', array('client_list' => $client_list, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
</div>
<?php include_partial('client_list/flashes') ?>
<?php if ($form->hasGlobalErrors()): ?>
  <?php echo $form->renderGlobalErrors() ?>
<?php endif; ?>
<?php include_partial('client_list/form', array('client_list' => $client_list, 'form' => $form, 'configuration' => $configuration, 'helper' => $helper, '_partial' => isset($_partial))) ?>
<?php include_partial('client_list/form_footer', array('client_list' => $client_list, 'form' => $form, 'configuration' => $configuration)) ?>
<?php if (!$sf_request->isXmlHttpRequest() && !isset($_partial)): ?>
</div>
<?php endif; ?>