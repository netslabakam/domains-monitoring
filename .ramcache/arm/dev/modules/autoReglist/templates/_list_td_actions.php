
  <ul class="sf_admin_td_actions">
<?php if ($sf_user->hasCredential('reglist_delete')): ?>
<?php echo $helper->linkToDelete($reglist, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'reglist_delete',)) ?>
<?php endif; ?>
    
  </ul>

