<?php use_stylesheets_for_form($form) ?>
<?php use_javascripts_for_form($form) ?>
<?php echo form_tag_for($form, '@user') ?>

<div id="lui_scroller" class="lui__scroller_class">
    <div class="lui__scroller_wrapper" style="position:relative;z-index:102;padding-left:10px;">
        <?php foreach ($configuration->getFormFields($form, $form->isNew() ? 'new' : 'edit') as $fieldset => $fields): ?>
            <?php include_partial('user/form_fieldset', array('groups' => $groups, 'form' => $form, 'fields' => $fields, 'fieldset' => $fieldset)) ?>
        <?php endforeach; ?>
        <?php

        echo '<div style="position:relative;">';
        include_component('permission', 'map', array('form' => $form));
        echo '</div>';

        ?>
    </div>
</div>
</form>
<script type="text/javascript" class="ajax_eval">
    var check_is_admin = function () {
        if ($('#user_is_super_admin').is(':checked')) {
            $('#user_password,#user_email').parent().parent().find('label').css('font-weight', 'bold');
            $('.lui__list_table_permissions,.sf_admin_form_row_user_division').show();
        } else {
            $('#user_password,#user_email').parent().parent().find('label').css('font-weight', 'normal');
            $('.lui__list_table_permissions,.sf_admin_form_row_user_division').hide();
        }
    };
    check_is_admin();
    $('#user_is_super_admin').click(check_is_admin);

    var userStatus = $('#user_status');
    userStatus.change(function(event){
        $('.sf_admin_form_field_block_reason').css('display', (event.target.value == 'Заблокирован' ? 'inline-block' : 'none'));
    });
    $(document).ready(function(){
        userStatus.change();
    });
</script>
<style type="text/css">
    .sf_admin_form_field_fname,
    .sf_admin_form_field_iname,
    .sf_admin_form_field_oname{
        display:inline-block;
        vertical-align:top;
    }
</style>