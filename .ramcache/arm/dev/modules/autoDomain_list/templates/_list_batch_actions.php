<td><div class="batch_actions_wrapper"><ul class="lui__list_actions"><b class="batch_action" id="list_checked"></b><?php if ($sf_user->hasCredential('domain_list_batchDelete')): ?>
<li class="batch_action sf_admin_action_delete"><span class="lui_pseudo" onclick="if(confirm('Подтверждаете удаление?')){$('#batch_action_id').val('batchDelete');$('#batch_form').submit();};"><?php echo __('Delete', array(), 'sf_admin') ?></span></li><?php endif; ?>
</ul></div></td>