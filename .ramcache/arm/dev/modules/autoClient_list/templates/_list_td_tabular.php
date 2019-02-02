    <?php


    if(!isset($_partial_filters) || !array_key_exists('name_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_name">
  <?php echo $client_list->getName() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('plan_id_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_foreignkey sf_admin_list_td_plan_id">
  <?php echo get_partial('client_list/plan_id', array('type' => 'list', 'client_list' => $client_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('email_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_email">
  <?php echo $client_list->getEmail() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('paidtillc_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_paidtillc">
  <?php echo get_partial('client_list/paidtillc', array('type' => 'list', 'client_list' => $client_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('is_paid_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_boolean sf_admin_list_td_is_paid">
  <?php echo get_partial('client_list/list_field_boolean', array('value' => $client_list->getIsPaid())) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('period_id_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_period_id">
  <?php echo $client_list->getPeriodId() ?>
</td>
    <?php
    }
    ?>
