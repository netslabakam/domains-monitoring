<?php use_stylesheets_for_form($form) ?>
<?php use_javascripts_for_form($form) ?>
<?php echo form_tag_for($form, '@user_group') ?>
<div id="lui_scroller" class="lui__scroller_class">
    <div class="lui__scroller_wrapper" style="position:relative;z-index:102;padding-left:10px;">
        <?php foreach ($configuration->getFormFields($form, $form->isNew() ? 'new' : 'edit') as $fieldset => $fields): ?>
            <?php include_partial('user_group/form_fieldset', array('groups' => $groups, 'form' => $form, 'fields' => $fields, 'fieldset' => $fieldset)) ?>
        <?php endforeach; ?>
        <?php
        include_component('permission', 'map', array('form' => $form));
        ?>
    </div>
</div>
</form>
