    <?php


    if(!isset($_partial_filters) || !array_key_exists('name_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_name">
  <?php echo $hosting_plans->getName() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('memory_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_memory">
  <?php echo $hosting_plans->getMemory() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('site_count_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_site_count">
  <?php echo $hosting_plans->getSiteCount() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('db_count_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_db_count">
  <?php echo $hosting_plans->getDbCount() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('price_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_price">
  <?php echo get_partial('hosting_plans/price', array('type' => 'list', 'hosting_plans' => $hosting_plans)) ?>
</td>
    <?php
    }
    ?>
