
  <ul class="sf_admin_td_actions">
    
<?php if ($sf_user->hasCredential('csSetting_delete')): ?>
<?php echo $helper->linkToDelete($cs_setting, array(  'params' =>   array(  ),  'confirm' => 'Are you sure?',  'class_suffix' => 'delete',  'label' => 'Delete',  'credentials' => 'csSetting_delete',)) ?>
<?php endif; ?>
    <li class="sf_admin_action_restore_defaults">
      <?php if ($sf_user->hasCredential('csSettingrestore_defaults')): ?>
<?php echo link_to(__('Restore defaults', array(), 'messages'), 'csSetting/ListRestoreDefaults?id='.$cs_setting->getId(), array()) ?>
<?php endif; ?>
    </li>
  </ul>

