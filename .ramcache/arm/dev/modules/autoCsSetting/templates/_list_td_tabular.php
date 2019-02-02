    <?php


    if(!isset($_partial_filters) || !array_key_exists('name_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_name">
  <?php echo $cs_setting->getName() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('value_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_value">
  <?php echo get_partial('csSetting/value', array('type' => 'list', 'cs_setting' => $cs_setting)) ?>
</td>
    <?php
    }
    ?>
