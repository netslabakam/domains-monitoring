<?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('title_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_title">
  <?php if ('title' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=title&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Название сервера') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=title&sort_type=desc' . $q) . '">' . __('Название сервера') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('ip_address_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_ip_address">
  <?php if ('ip_address' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=ip_address&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('IP адрес') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=ip_address&sort_type=desc' . $q) . '">' . __('IP адрес') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?><?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?>
<?php slot('sf_admin.current_header') ?>
    <?php
    if(!isset($_partial_filters) || !array_key_exists('comment_id', $_partial_filters->getRawValue())) {
    ?>
<th class="sf_admin_text sf_admin_list_th_comment">
  <?php if ('comment' == $sort[0]): ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=comment&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('Комментарий') . '</a>';?>
    <?php echo ($sort[1] == 'asc' ? '▼' : '▲');?>
  <?php else: ?>
    <?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@server_list?sort=comment&sort_type=desc' . $q) . '">' . __('Комментарий') . '</a>';?>
  <?php endif; ?>
</th>
    <?php
    }
    ?>
<?php end_slot(); ?>
<?php include_slot('sf_admin.current_header') ?>