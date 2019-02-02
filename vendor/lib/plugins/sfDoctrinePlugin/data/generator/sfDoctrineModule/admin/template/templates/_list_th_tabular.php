<?php foreach ($this->configuration->getValue('list.display') as $name => $field): ?>
[?php $q = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : ''); ?]
[?php slot('sf_admin.current_header') ?]
    [?php
    if(!isset($_partial_filters) || !array_key_exists('<?php echo $name;?>_id', $_partial_filters->getRawValue())) {
    ?]
<th class="sf_admin_<?php echo strtolower($field->getType()) ?> sf_admin_list_th_<?php echo $name ?>">
<?php if ($field->isReal()): ?>
  [?php if ('<?php echo $name ?>' == $sort[0]): ?]
    [?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@<?php echo $this->getUrlForAction('list') ?>?sort=<?php echo $name;?>&sort_type='.($sort[1] == 'asc' ? 'desc' : 'asc') . $q) . '">' . __('<?php echo $field->getConfig('label', '', true) ?>') . '</a>';?]
    [?php echo ($sort[1] == 'asc' ? '▼' : '▲');?]
  [?php else: ?]
    [?php echo '<a href="' . ($_partial ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . url_for('@<?php echo $this->getUrlForAction('list') ?>?sort=<?php echo $name;?>&sort_type=desc' . $q) . '">' . __('<?php echo $field->getConfig('label', '', true) ?>') . '</a>';?]
  [?php endif; ?]
<?php else: ?>
  [?php echo __('<?php echo $field->getConfig('label', '', true) ?>', array(), '<?php echo $this->getI18nCatalogue() ?>') ?]
<?php endif; ?>
</th>
    [?php
    }
    ?]
[?php end_slot(); ?]
<?php echo $this->addCredentialCondition("[?php include_slot('sf_admin.current_header') ?]", $field->getConfig()) ?>
<?php endforeach; ?>
