    <?php


    if(!isset($_partial_filters) || !array_key_exists('id_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_id">
  <?php echo link_to($period->getId(), 'period_edit', $period) ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('title_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_title">
  <?php echo $period->getTitle() ?>
</td>
    <?php
    }
    ?>
    <?php


    if(!isset($_partial_filters) || !array_key_exists('period_id', $_partial_filters->getRawValue())) {
    ?>
<td class="sf_admin_text sf_admin_list_td_period">
  <?php echo $period->getPeriod() ?>
</td>
    <?php
    }
    ?>
