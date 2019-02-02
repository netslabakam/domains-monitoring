    <?php


    if(!isset($_partial_filters) || !array_key_exists('title_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_title">
  <?php echo $server_list->getTitle() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('ip_address_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_ip_address">
  <?php echo $server_list->getIpAddress() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('comment_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_comment">
  <?php echo $server_list->getComment() ?>
</td>
    <?php
    }
    ?>
