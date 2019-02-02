
  <ul class="sf_admin_td_actions">
<?php if ($sf_user->hasCredential('server_list_delete')): ?>
<?php echo $helper->linkToDelete($server_list, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'server_list_delete',)) ?>
<?php endif; ?>
    
  </ul>

