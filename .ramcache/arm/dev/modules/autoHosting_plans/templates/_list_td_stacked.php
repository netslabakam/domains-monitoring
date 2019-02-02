<td colspan="5">
  <?php echo __('%%name%% - %%memory%% - %%site_count%% - %%db_count%% - %%price%%', array('%%name%%' => $hosting_plans->getName(), '%%memory%%' => $hosting_plans->getMemory(), '%%site_count%%' => $hosting_plans->getSiteCount(), '%%db_count%%' => $hosting_plans->getDbCount(), '%%price%%' => get_partial('hosting_plans/price', array('type' => 'list', 'hosting_plans' => $hosting_plans))), 'messages') ?>
</td>
