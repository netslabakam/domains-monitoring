<td colspan="3">
  <?php echo __('%%id%% - %%title%% - %%period%%', array('%%id%%' => link_to($period->getId(), 'period_edit', $period), '%%title%%' => $period->getTitle(), '%%period%%' => $period->getPeriod()), 'messages') ?>
</td>
