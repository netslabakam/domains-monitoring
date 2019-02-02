<td class="sf_admin_text sf_admin_list_td_name" width="400">
  <?php if (sfConfig::get('sf_environment') === 'dev' && csSettings::isAuthenticated($sf_user)): ?>
    <?php echo link_to($cs_setting->getName(), 'cs_setting_edit', $cs_setting) ?>
  <?php else: ?>
    <?php echo $cs_setting->getName() ?>
  <?php endif ?>
</td>
<td class="sf_admin_text sf_admin_list_td_value" width="1">
  <?php echo $form[$cs_setting['slug']] ?>
</td>
<td>
    <?php if ($form[$cs_setting['slug']]->hasError()): ?>
        <?php echo $form[$cs_setting['slug']]->renderError() ?>
    <?php endif ?>
</td>
<td>
    <?php
    if($variables = $cs_setting['variables']){
        $variables = sfToolkit::stringToArray($cs_setting['variables']);
        if(count($variables) > 0){
            echo '<b>Переменные:</b><br>';
            foreach ($variables as $key => $value){
                echo '<i>' . $key . '</i> - ' . $value . '<br>';
            }

            /*
            echo '<div class="variables variables_action"><table class="csSetting__tbl variables__tbl" width="100%" cellpadding="0" cellspacing="0">';
            echo '<tr class="sf_admin_tr_stop"><th align="left" colspan="2" class="variables__tbl__h"></th></tr>';
            foreach ($variables as $key => $value){
                echo '<tr class="sf_admin_tr_stop"><td><span class="variables__tbl__val" data-body="#cs_setting_' . $cs_setting['slug'] . '" onclick="variables.insert(this);event.stopPropagation();return false;">' . $key . '</span></td><td>' . $value . '</td></tr>';
            }
            echo '</table></div>';
            */

        }
    }
    ?>
</td>