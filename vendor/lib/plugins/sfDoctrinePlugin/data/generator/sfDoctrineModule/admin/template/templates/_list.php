[?php if (!$pager->getNbResults()): ?]
<div class="lui__list_empty">Нет элементов</div>
[?php else: ?]

<table width="100%" cellspacing="0" cellpadding="3" border="0" class="lui__list_table[?php echo (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '' : ' lui__list_table_donor lui__list_table__sourse'); ?]" id="[?php echo (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '' : 'lui__list_table_donor'); ?]">
      <thead>
        <tr>
<?php if ($this->configuration->getValue('list.batch_actions')): ?>
          <th id="sf_admin_list_batch_actions" class="sf_admin_batch_checkbox__td"><input id="sf_admin_list_batch_checkbox" type="checkbox" onclick="$('.sf_admin_batch_checkbox').prop('checked', $(this).is(':checked'));" /></th>
<?php endif; ?>
          [?php include_partial('<?php echo $this->getModuleName() ?>/list_th_<?php echo $this->configuration->getValue('list.layout') ?>', array('sort' => $sort, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => $_partial)) ?]

          <th id="sf_admin_list_th_actions">&nbsp;</th>
        </tr>
      </thead>
 
      <tbody>
        [?php $notice_ids = (class_exists(<?php echo $this->params['model_class'];?>) && method_exists(<?php echo $this->params['model_class'];?>, 'getNoticeIds')) ? <?php echo $this->params['model_class'];?>::getNoticeIds() : array();?]
        [?php foreach ($pager->getResults() as $i => $<?php echo $this->getSingularName() ?>): $odd = fmod(++$i, 2) ? 'odd' : 'even' ?]
          <tr class="sf_admin_row [?php echo $odd ?] [?php echo (in_array($<?php echo $this->getSingularName() ?>->getId(), $notice_ids) ? 'sf_admin_row_notice' : '') ?] [?php echo !$sf_user->hasCredential('<?php echo $this->getModuleName();?>_edit') ? ' sf_admin_tr_stop' : ''?]" valign="top" data-href="[?php echo ($_partial && (!isset($_partial_no_scroll) || $_partial_no_scroll === false) ? '?_spath=' : '') . url_for('<?php echo $this->getSingularName();?>/edit?id=' . $<?php echo $this->getSingularName();?>->getPrimaryKey() . (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '&return=' . $sf_request->getUri() : ''));?]">
<?php if ($this->configuration->getValue('list.batch_actions')): ?>
            [?php include_partial('<?php echo $this->getModuleName() ?>/list_td_batch_actions', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'helper' => $helper)) ?]
<?php endif; ?>
            [?php include_partial('<?php echo $this->getModuleName() ?>/list_td_<?php echo $this->configuration->getValue('list.layout') ?>', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters->getRawValue() : array()), '_partial' => $_partial)) ?]
            <td>
<?php if ($this->configuration->getValue('list.object_actions')): ?>
            [?php include_partial('<?php echo $this->getModuleName() ?>/list_td_actions', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'helper' => $helper)) ?]
<?php endif; ?>
            </td>
          </tr>
        [?php endforeach; ?]
      </tbody>
</table>
[?php endif; ?]

[?php include_partial('<?php echo $this->getModuleName() ?>/list_footer', array('<?php echo $this->getSingularName() ?>' => $<?php echo $this->getSingularName() ?>, 'helper' => $helper)) ?]
