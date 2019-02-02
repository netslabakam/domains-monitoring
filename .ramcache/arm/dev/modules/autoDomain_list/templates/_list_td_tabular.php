    <?php


    if(!isset($_partial_filters) || !array_key_exists('domain_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_domain">
  <?php echo get_partial('domain_list/domain', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('client_id_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_foreignkey sf_admin_list_td_client_id">
  <?php echo get_partial('domain_list/client_id', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('server_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_server">
  <?php echo get_partial('domain_list/server', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('reg_id_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_foreignkey sf_admin_list_td_reg_id">
  <?php echo get_partial('domain_list/reg_id', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('expires_at_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_date sf_admin_list_td_expires_at">
  <?php echo get_partial('domain_list/expires_at', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('sslexp_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_sslexp">
  <?php echo get_partial('domain_list/sslexp', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('last_check_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_last_check">
  <?php echo get_partial('domain_list/last_check', array('type' => 'list', 'domain_list' => $domain_list)) ?>
</td>
    <?php
    }
    ?>
