<?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('id_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_id">
  <?php if ('id' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=id&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=id&sort_type=desc' . $q) . '">' . __('') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('title_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_title">
  <?php if ('title' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=title&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Название') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=title&sort_type=desc' . $q) . '">' . __('Название') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('period_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_period">
  <?php if ('period' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=period&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@period?sort=period&sort_type=desc' . $q) . '">' . __('') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?>