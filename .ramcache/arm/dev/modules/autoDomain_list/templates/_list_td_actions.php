
  <ul class="sf_admin_td_actions">
<?php if ($sf_user->hasCredential('domain_list_delete')): ?>
<?php echo $helper->linkToDelete($domain_list, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'domain_list_delete',)) ?>
<?php endif; ?>
    
  </ul>

