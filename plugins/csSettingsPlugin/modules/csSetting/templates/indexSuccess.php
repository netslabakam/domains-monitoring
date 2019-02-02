<?php use_helper('I18N', 'Date') ?>
<?php include_partial('csSetting/assets') ?>

<style type="text/css">
    #sf_admin_content tr:first-child th{
        border-top:none;
    }
</style>

<div id="sf_admin_container">
    <span class="lui__h1">Настройки</span>
    <span class="br15"></span>

    <?php include_partial('csSetting/flashes') ?>

    <form action="<?php echo url_for('@cs_setting_save_all'); ?>" method="post" enctype="multipart/form-data">

        <div id="sf_admin_header">
            <div class="lui__list_actions__wrapper" data-count="4">
                <ul class="sf_admin_actions">
                    <?php include_partial('csSetting/list_batch_actions', array('helper' => $helper)) ?>
                    <?php include_partial('csSetting/list_actions', array('helper' => $helper)) ?>
                </ul>
            </div>
            <?php /*include_partial('csSetting/list_header', array('pager' => $pager))*/ ?>
        </div>

        <div id="sf_admin_content">
            <div id="lui_scroller" class="lui_scroller">
                <?php if ($form->isCSRFProtected()) : ?>
                    <?php echo $form['_csrf_token']->render(); ?>
                <?php endif; ?>
                <?php include_partial('csSetting/list', array('pager' => $pager, 'sort' => $sort, 'helper' => $helper, 'form' => $form)) ?>
            </div>
        </div>

    </form>

    <div id="sf_admin_footer">
        <?php include_partial('csSetting/list_footer', array('pager' => $pager)) ?>
    </div>
</div>