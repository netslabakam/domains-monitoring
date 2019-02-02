
  <ul class="sf_admin_td_actions">
<?php if ($sf_user->hasCredential('hosting_plans_delete')): ?>
<?php echo $helper->linkToDelete($hosting_plans, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'hosting_plans_delete',)) ?>
<?php endif; ?>
    
  </ul>

