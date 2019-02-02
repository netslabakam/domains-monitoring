<?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('domain_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_domain">
  <?php if ('domain' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=domain&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Домен') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=domain&sort_type=desc' . $q) . '">' . __('Домен') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('client_id_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_foreignkey sf_admin_list_th_client_id">
  <?php if ('client_id' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=client_id&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Почта владельца') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=client_id&sort_type=desc' . $q) . '">' . __('Почта владельца') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('server_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_server">
  <?php if ('server' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=server&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Сервер (IP)') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=server&sort_type=desc' . $q) . '">' . __('Сервер (IP)') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('reg_id_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_foreignkey sf_admin_list_th_reg_id">
  <?php if ('reg_id' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=reg_id&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Регистратор') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=reg_id&sort_type=desc' . $q) . '">' . __('Регистратор') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('expires_at_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_date sf_admin_list_th_expires_at">
  <?php if ('expires_at' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=expires_at&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Оплачено до') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=expires_at&sort_type=desc' . $q) . '">' . __('Оплачено до') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('sslexp_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_sslexp">
  <?php if ('sslexp' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=sslexp&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Дни до окончания SSL сертификата') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=sslexp&sort_type=desc' . $q) . '">' . __('Дни до окончания SSL сертификата') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('last_check_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_last_check">
  <?php if ('last_check' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=last_check&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Последняя проверка') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@domain_list?sort=last_check&sort_type=desc' . $q) . '">' . __('Последняя проверка') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?>