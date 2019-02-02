<td colspan="2">
  <?php echo __('%%name%% - %%value%%', array('%%name%%' => $cs_setting->getName(), '%%value%%' => get_partial('csSetting/value', array('type' => 'list', 'cs_setting' => $cs_setting))), 'messages') ?>
</td>
