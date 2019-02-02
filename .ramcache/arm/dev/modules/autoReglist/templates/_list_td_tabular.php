    <?php


    if(!isset($_partial_filters) || !array_key_exists('address_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_address">
  <?php echo $reglist->getAddress() ?>
</td>
    <?php
    }
    ?>
