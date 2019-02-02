<?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('name_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_name">
  <?php if ('name' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=name&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Имя') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=name&sort_type=desc' . $q) . '">' . __('Имя') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('plan_id_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_foreignkey sf_admin_list_th_plan_id">
  <?php if ('plan_id' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=plan_id&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Тариф') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=plan_id&sort_type=desc' . $q) . '">' . __('Тариф') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('email_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_email">
  <?php if ('email' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=email&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Почта') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=email&sort_type=desc' . $q) . '">' . __('Почта') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('paidtillc_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_paidtillc">
  <?php echo __('Осталось дней', array(), 'messages') ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('is_paid_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_boolean sf_admin_list_th_is_paid">
  <?php if ('is_paid' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=is_paid&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Оплачено') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=is_paid&sort_type=desc' . $q) . '">' . __('Оплачено') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('period_id_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_period_id">
  <?php if ('period_id' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=period_id&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Period') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@client_list?sort=period_id&sort_type=desc' . $q) . '">' . __('Period') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?>