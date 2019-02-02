<?php if (!isset($_partial)): ?>
<?php use_helper('I18N', 'Date') ?>
<?php if (!$sf_request->isXmlHttpRequest()): ?>
<?php include_partial('server_list/assets') ?>
<?php endif; ?>

<span class="lui__h1"><?php echo __('Наши сервера', array(), 'messages') ?></span><sup
        class="lui__list_count">&nbsp;<?php echo ($sf_request->getParameter('q') ? 'найдено:&nbsp;' : '');?><?php echo isset($pager) ? $pager->getNbResults() : ''; ?>&nbsp;</sup>
<?php endif; ?>
<?php include_partial('server_list/flashes') ?>
<?php if (!isset($_partial)): ?>



<?php endif; ?>

<?php if (!$sf_request->isXmlHttpRequest()): ?>

    <span class="br15"></span>
    <div class="batch_form__class">
        <?php endif; ?>

        <?php if (isset($pager)): ?>

        <div class="lui__list_actions__wrapper"<?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?> data-count="<?php echo $pager->getNbResults();?>">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <?php include_partial('server_list/list_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?>
                <?php include_partial('server_list/list_batch_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?>
                <?php if (!isset($_partial)): ?>
                                    <td style="padding-right: 10px"><input style="background-color:#fff;width:360px;" type="text" autocomplete="off" value="<?php echo $sf_request->getParameter('q'); ?>"
                                                           class="type_search input_with_erase" id="server_list_live_search" placeholder="Найти"/>
                    </td>
                                <?php endif; ?>
                                                <?php if ($pager->haveToPaginate()): ?>
                <td align="right" width="100%">
                    <div class="lui_pager">
                        <?php include_partial('server_list/pagination', array('pager' => $pager, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => isset($_partial))) ?>&nbsp;
                        <b style="position:relative;top:2px"><?php echo __('%%page%%/%%nb_pages%%', array('%%page%%' => $pager->getPage(), '%%nb_pages%%' => $pager->getLastPage()), 'sf_admin') ?></b>
                    </div>
                </td>
                <?php endif; ?>
            </tr>
        </table>


    </div>


    <form id="batch_form" action="<?php echo ($_partial ? '?_spath=' : '') . url_for('server_list_collection', array('action' => 'batch')) ?>" method="post">


        <div id="lui_scroller" class="<?php echo (isset($_partial_no_scroll) ? '' : 'lui_scroller'); ?>">
            <div class="lui__scroller_wrapper"<?php echo (isset($_partial) ? ' style="padding:0 !important"' : ''); ?>><?php include_partial('server_list/list', array('pager' => $pager, 'sort' => $sort, 'helper' => $helper, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters->getRawValue() : array()), '_partial' => isset($_partial), '_partial_no_scroll' => isset($_partial_no_scroll))) ?></div>
        </div>

        <input type="hidden" name="batch_action" id="batch_action_id"/>
        <?php $form = new BaseForm(); if ($form->isCSRFProtected()): ?>
        <input type="hidden" name="<?php echo $form->getCSRFFieldName() ?>" value="<?php echo $form->getCSRFToken() ?>"/>
        <?php endif; ?>

    </form>

    <?php endif; ?>

    <?php if (!$sf_request->isXmlHttpRequest()): ?>
    </div>

            <?php if (isset($pager)): ?>
        <script type="text/javascript">
            var jqxhr = false;
            var jqxhr_o = false;

            if ($('#server_list_live_search').length) {


                var jqxhr_old = $('#server_list_live_search').val().trim();
                var jqxhr_last_result = $('#server_list_live_search').val().trim();

                var is_not_good_style_of_code = function (url) {


                    var state = {
                        title: $('title').html(),
                        url: window.location.pathname + url
                    }


                    history.pushState(state, state.title, state.url);

                    jqxhr_o = sOverlay($('.lui_scroller'));
                    jqxhr = $.ajax(url).done(function (html) {

                        var new_html = $('<div>' + html + '</div>');


                        $('.lui_pager').html(new_html.find('.lui_pager').length > 0 ? new_html.find('.lui_pager').html() : '');
                        $('.lui__scroller_wrapper').html(new_html.find('.lui__scroller_wrapper').html());

                        $('.sf_admin_tabs').html(new_html.find('.sf_admin_tabs').html());

                        create_custom_table_head();
                        $('.lui__list_count').html('&nbsp;' + (jqxhr_old == '' ? '' : 'найдено:&nbsp;') + new_html.find('.lui__list_actions__wrapper').data('count'));
                        $('.lui__list_table__sourse').removeHighlight().highlight(jqxhr_old);
                        $('.export_excel').prop('href', url + '&export');
                        if (new_html.data('count') == '0') {
                            $('.export_excel').hide();
                        } else {
                            $('.export_excel').show();
                        }

                        jqxhr_last_result = $('#server_list_live_search').val().trim();

                        jqxhr_o.remove();
                    });
                }

                $(document).ready(function () {
                    $('#server_list_live_search').keyup(function (event) {

                        if (jqxhr_last_result == $(this).val().trim()) {
                            return;
                        }

                        var checked = [];
                        $('.sf_admin_batch_checkbox:checked').each(function (k, v) {
                            checked.push($(v).val());
                        });
                        jqxhr_old = $(this).val().trim();
                        try {
                            jqxhr.abort();
                            jqxhr_o.remove();
                        } catch (e) {
                        }

                        if ($(this).val().trim() != '' && event.which == 13) {
                            is_not_good_style_of_code('?q=' + jqxhr_old + (checked.length > 0 ? '&checked=' + checked.join(':') : ''));
                        } else if ($(this).val().trim() == '') {
                            is_not_good_style_of_code(checked.length > 0 ? '?checked=' + checked.join(':') : '?q=');
                        }


                    });
                    if (jqxhr_old != '') {
                        cl(jqxhr_old);
                        $('.lui__list_table__sourse').removeHighlight().highlight(jqxhr_old);
                    }
                });
            }
        </script>
        <?php endif; ?>
    <?php endif; ?>
<?php if (isset($replace_content) && $replace_content !== false): ?>
<?php echo htmlspecialchars_decode($replace_content); ?>
<?php endif; ?>