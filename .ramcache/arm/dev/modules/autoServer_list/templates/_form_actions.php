<ul class="sf_admin_actions sf_admin_actions__pseudo">
    <?php
            if($sf_user->hasCredential('server_list_create') && $form->isNew())
        {
        ?>
                    <?php echo $helper->linkToList(array(  'params' =>   array(  ),  'class_suffix' => 'list',  'label' => 'Back to list',)) ?>                                <?php echo $helper->linkToSave($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save',  'label' => 'Save',)) ?>                                <?php echo $helper->linkToSaveAndAdd($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save_and_add',  'label' => 'Save and add',)) ?>                                <?php echo $helper->linkToSaveAndList($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save_and_list',  'label' => 'Save and list',)) ?>                                <?php if ($sf_user->hasCredential('server_list_delete')): ?>
<?php echo $helper->linkToDelete($form->getObject(), array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',), array("_partial" => $_partial)) ?>
<?php endif; ?>
                            <?php
        }
            elseif($sf_user->hasCredential('server_list_update') && !$form->isNew())
        {
        ?>
                    <?php echo $helper->linkToList(array(  'params' =>   array(  ),  'class_suffix' => 'list',  'label' => 'Back to list',)) ?>                                <?php echo $helper->linkToSave($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save',  'label' => 'Save',)) ?>                                <?php echo $helper->linkToSaveAndAdd($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save_and_add',  'label' => 'Save and add',)) ?>                                <?php echo $helper->linkToSaveAndList($form->getObject(), array(  'params' =>   array(  ),  'class_suffix' => 'save_and_list',  'label' => 'Save and list',)) ?>                                <?php if ($sf_user->hasCredential('server_list_delete')): ?>
<?php echo $helper->linkToDelete($form->getObject(), array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',), array("_partial" => $_partial)) ?>
<?php endif; ?>
                            <?php
        }
        ?>
    <li style="visibility:hidden;"><input type="submit"></li>
</ul>
<?php if (!$sf_request->isXmlHttpRequest()): ?>
<script type="text/javascript">
    $(document).ready(function(){
        $('.sf_admin_actions input').click(function(){
            $(this).closest('.lui_form_layer').find('form').append('<input type="hidden" name="' + $(this).attr("name") + '">');
            $(this).closest('.lui_form_layer').find('form').submit();
        });
    });
</script>
<?php endif; ?>