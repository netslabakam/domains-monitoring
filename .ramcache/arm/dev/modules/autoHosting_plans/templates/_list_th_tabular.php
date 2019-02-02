<?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('name_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_name">
  <?php if ('name' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=name&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Название') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=name&sort_type=desc' . $q) . '">' . __('Название') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('memory_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_memory">
  <?php if ('memory' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=memory&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Память') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=memory&sort_type=desc' . $q) . '">' . __('Память') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('site_count_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_site_count">
  <?php if ('site_count' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=site_count&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Количество сайтов') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=site_count&sort_type=desc' . $q) . '">' . __('Количество сайтов') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('db_count_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_db_count">
  <?php if ('db_count' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=db_count&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Количество баз данных') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=db_count&sort_type=desc' . $q) . '">' . __('Количество баз данных') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('price_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_price">
  <?php if ('price' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=price&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Цена') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@hosting_plans?sort=price&sort_type=desc' . $q) . '">' . __('Цена') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?>