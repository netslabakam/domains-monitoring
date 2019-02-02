 <table width="100%" cellspacing="0" cellpadding="3" border="0" class="lui__list_table lui__list_table_donor lui__list_table__sourse" id="lui__list_table_donor">
<?php if (!$pager->getNbResults()): ?>
  
   <thead><tr></tr></thead>
<?php else: ?>
 
<?php
$parser = new sfYamlParser();
$generators = array();
?>
      <thead>
        <tr>
          <th id="sf_admin_list_batch_actions" class="sf_admin_batch_checkbox__td"><input id="sf_admin_list_batch_checkbox" type="checkbox" onclick="$('.sf_admin_batch_checkbox').prop('checked', $(this).is(':checked'));" /></th>
          <?php include_partial('user_log/list_th_tabular', array('sort' => $sort)) ?>
          <th id="sf_admin_list_th_actions">&nbsp;</th>
        </tr>
      </thead>
 
      <tbody>
        <?php foreach ($pager->getResults() as $i => $user_log): $odd = fmod(++$i, 2) ? 'odd' : 'even' ?>
        <?php
        if(!isset($generators[$user_log->getModule()]) && file_exists(sfConfig::get('sf_app_module_dir') . '/' . $user_log->getModule() . '/config/generator.yml'))
        {
          $generators[$user_log->getModule()] = $parser->parse(file_get_contents(sfConfig::get('sf_app_module_dir') . '/' . $user_log->getModule() . '/config/generator.yml'));
        }
        ?>
          <tr class="sf_admin_tr_stop tr_log_type_<?php echo $user_log->getLogType();?> sf_admin_row <?php echo $odd ?>" valign="top" data-href="<?php echo url_for('user_log/edit?id=' . $user_log->getPrimaryKey());?>">
            <?php include_partial('user_log/list_td_batch_actions', array('user_log' => $user_log, 'helper' => $helper)) ?>
            <?php include_partial('user_log/list_td_tabular', array('user_log' => $user_log, 'generators' => $generators)) ?>
            <?php 
            //include_partial('user_log/list_td_actions', array('user_log' => $user_log, 'helper' => $helper))
             ?>
          </tr>
        <?php endforeach; ?>
      </tbody>

<?php endif; ?>
</table>
<?php include_partial('user_log/list_footer', array('user_log' => $user_log, 'helper' => $helper)) ?>
