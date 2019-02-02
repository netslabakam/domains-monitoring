<?php if (!isset($_partial)): ?>
<?php use_helper('I18N', 'Date') ?>
<?php if (!$sf_request->isXmlHttpRequest()): ?>
<?php include_partial('csSetting/assets') ?>
<?php endif; ?>

<span class="lui__h1"><?php echo __('Settings', array(), 'messages') ?></span><sup
        class="lui__list_count">&nbsp;<?php echo ($sf_request->getParameter('q') ? 'найдено:&nbsp;' : '');?><?php echo isset($pager) ? $pager->getNbResults() : ''; ?>&nbsp;</sup>
<?php endif; ?>
<?php include_partial('csSetting/flashes') ?>
<?php if (!isset($_partial)): ?>



<?php endif; ?>

<?php if (!$sf_request->isXmlHttpRequest()): ?>

    <?php if (!isset($_partial)): ?>
    <span class="br15"></span>
        <?php endif; ?>
    <div class="batch_form__class">
        <?php endif; ?>

        <?php if (isset($pager)): ?>

        <div class="lui__list_actions__wrapper"<?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?> data-count="<?php echo $pager->getNbResults();?>">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <?php include_partial('csSetting/list_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?>
                <?php include_partial('csSetting/list_batch_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?>
                                                <?php if ($pager->haveToPaginate()): ?>
                <td align="right" width="100%">
                    <div class="lui_pager">
                        <?php include_partial('csSetting/pagination', array('pager' => $pager, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => isset($_partial))) ?>&nbsp;
                        <b style="position:relative;top:2px"><?php echo __('%%page%%/%%nb_pages%%', array('%%page%%' => $pager->getPage(), '%%nb_pages%%' => $pager->getLastPage()), 'sf_admin') ?></b>
                    </div>
                </td>
                <?php endif; ?>
            </tr>
        </table>


    </div>


    <form id="batch_form" action="<?php echo ($_partial ? '?_spath=' : '') . url_for('cs_setting_collection', array('action' => 'batch')) ?>" method="post">


        <div id="lui_scroller" class="<?php echo (isset($_partial_no_scroll) ? '' : 'lui_scroller'); ?>">
            <div class="lui__scroller_wrapper"<?php echo (isset($_partial) ? ' style="padding:0 !important"' : ''); ?>><?php include_partial('csSetting/list', array('pager' => $pager, 'sort' => $sort, 'helper' => $helper, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters->getRawValue() : array()), '_partial' => isset($_partial), '_partial_no_scroll' => isset($_partial_no_scroll))) ?></div>
        </div>

        <input type="hidden" name="batch_action" id="batch_action_id"/>
        <?php $form = new BaseForm(); if ($form->isCSRFProtected()): ?>
        <input type="hidden" name="<?php echo $form->getCSRFFieldName() ?>" value="<?php echo $form->getCSRFToken() ?>"/>
        <?php endif; ?>

    </form>

    <?php endif; ?>

    <?php if (!$sf_request->isXmlHttpRequest()): ?>
    </div>

    <?php endif; ?>
<?php if (isset($replace_content) && $replace_content !== false): ?>
<?php echo htmlspecialchars_decode($replace_content); ?>
<?php endif; ?>