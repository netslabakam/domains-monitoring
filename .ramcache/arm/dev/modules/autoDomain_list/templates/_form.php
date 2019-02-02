<?php use_stylesheets_for_form($form) ?>
<?php use_javascripts_for_form($form) ?>
<?php echo form_tag_for($form, '@domain_list', array('_partial' => isset($_partial) ? $_partial : false)) ?>

<div id="lui_scroller" class="lui__scroller_class">
<div class="lui__scroller_wrapper" style="position:relative;z-index:102;padding-left:10px;">
    <?php foreach ($configuration->getFormFields($form, $form->isNew() ? 'new' : 'edit') as $fieldset => $fields): ?>
      <?php include_partial('domain_list/form_fieldset', array('domain_list' => $domain_list, 'form' => $form, 'fields' => $fields, 'fieldset' => $fieldset)) ?>
    <?php endforeach; ?>
</div>
</div>
<?php
if($sf_request->hasParameter('return'))
{
  $return = $sf_request->getParameter('return');
  echo '<input type="hidden" name="return" value="' . $return . '">';
}
?>
</form>

