<?php if (!$pager->getNbResults()): ?>
<div class="lui__list_empty">Нет элементов</div>
<?php else: ?>

<table width="100%" cellspacing="0" cellpadding="3" border="0" class="lui__list_table<?php echo (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '' : ' lui__list_table_donor lui__list_table__sourse'); ?>" id="<?php echo (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '' : 'lui__list_table_donor'); ?>">
      <thead>
        <tr>
          <th id="sf_admin_list_batch_actions" class="sf_admin_batch_checkbox__td"><input id="sf_admin_list_batch_checkbox" type="checkbox" onclick="$('.sf_admin_batch_checkbox').prop('checked', $(this).is(':checked'));" /></th>
          <?php include_partial('domain_list/list_th_tabular', array('sort' => $sort, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => $_partial)) ?>

          <th id="sf_admin_list_th_actions">&nbsp;</th>
        </tr>
      </thead>
 
      <tbody>
        <?php $notice_ids = (class_exists(DomainList) && method_exists(DomainList, 'getNoticeIds')) ? DomainList::getNoticeIds() : array();?>
        <?php foreach ($pager->getResults() as $i => $domain_list): $odd = fmod(++$i, 2) ? 'odd' : 'even' ?>
          <tr
              <?php
                  $expires = $domain_list->getExpiresAt();
                  if ($expires) {
                      $date = substr($expires, 0, 10);

                      $date_now = date_create(date('Y-m-d'));
                      $date_db = date_create($date);

                      $date_diff = date_diff($date_now, $date_db);

                      $days = $date_diff->days;
                  }
                  if ($expires){
                      if ($days <= 0 )
                          echo 'style="background: #ff8a65"';
                      if (($days <= 7))
                          echo 'style="background: #ffccbc"';
                      if ($days <= 30)
                          echo 'style="background: #fbe9e7"';
                  }
                   ?>
                  class="sf_admin_row <?php echo $odd ?> <?php echo (in_array($domain_list->getId(), $notice_ids) ? 'sf_admin_row_notice' : '') ?> <?php echo !$sf_user->hasCredential('domain_list_edit') ? ' sf_admin_tr_stop' : ''?>" valign="top" data-href="<?php echo ($_partial && (!isset($_partial_no_scroll) || $_partial_no_scroll === false) ? '?_spath=' : '') . url_for('domain_list/edit?id=' . $domain_list->getPrimaryKey() . (isset($_partial_no_scroll) && $_partial_no_scroll === true ? '&return=' . $sf_request->getUri() : ''));?>">
            <?php include_partial('domain_list/list_td_batch_actions', array('domain_list' => $domain_list, 'helper' => $helper)) ?>
            <?php include_partial('domain_list/list_td_tabular', array('domain_list' => $domain_list, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters->getRawValue() : array()), '_partial' => $_partial)) ?>
            <td>
            <?php include_partial('domain_list/list_td_actions', array('domain_list' => $domain_list, 'helper' => $helper)) ?>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
</table>
<?php endif; ?>

<?php include_partial('domain_list/list_footer', array('domain_list' => $domain_list, 'helper' => $helper)) ?>
