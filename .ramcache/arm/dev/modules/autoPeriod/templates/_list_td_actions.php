
  <ul class="sf_admin_td_actions">
<?php if ($sf_user->hasCredential('period_delete')): ?>
<?php echo $helper->linkToDelete($period, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'period_delete',)) ?>
<?php endif; ?>
    
  </ul>

