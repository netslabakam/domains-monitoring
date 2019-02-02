[?php if (!isset($_partial)): ?]
[?php use_helper('I18N', 'Date') ?]
[?php if (!$sf_request->isXmlHttpRequest()): ?]
[?php include_partial('<?php echo $this->getModuleName() ?>/assets') ?]
[?php endif; ?]

<span class="lui__h1">[?php echo <?php echo $this->getI18NString('list.title') ?> ?]</span><sup
        class="lui__list_count">&nbsp;[?php echo ($sf_request->getParameter('q') ? 'найдено:&nbsp;' : '');?][?php echo isset($pager) ? $pager->getNbResults() : ''; ?]&nbsp;</sup>
[?php endif; ?]
[?php include_partial('<?php echo $this->getModuleName() ?>/flashes') ?]
[?php if (!isset($_partial)): ?]
<?php if ($this->configuration->hasStruct()): ?>
    <i style="border-bottom: 1px solid #D9D9D9;" class="br15"></i>
    <style type="text/css">
        .error_list{
            margin: 0;
            padding: 0;
            color: red;
            font-size: 11px;
        }
        .struct_post_form input[type="text"],
        .struct_post_form textarea{
            width: 100%;
            max-width: 800px;
        }
        .lui__h1{
            margin-left:9px;
        }
    </style>
<?php endif;?>


<?php if ($this->configuration->hasTabs()): ?>
    <div class="sf_admin_tabs">
        [?php
        $model = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->getModuleName())));
        $tab_count = class_exists($model) && method_exists($model, 'getTabCount');
        foreach($tabs as $tab_key => $tab_val)
        {
        $tab_count_html = '';
        if($tab_count){
        $tc = $model::getTabCount($tab_key, $tab_key == $current_tab);
        $tab_count_html = $tc > 0 ? '<span class="sf_admin_tab__notice">' . $tc . '</span>' : '';
        }
        echo '<a href="' . (isset($tab_val['url_for']) ? url_for($tab_val['url_for']) : '?tab=' . $tab_key) . ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '&q=' . $sf_request->getParameter('q') : '') . '" class="sf_admin_tab' . ($tab_key == $current_tab ? ' sf_admin_tab__active' : '') . '">' . $tab_val['label'] . $tab_count_html . '</a>';
        }
        ?]
    </div>
<?php endif; ?>

[?php endif; ?]

[?php if (!$sf_request->isXmlHttpRequest()): ?]

<?php if ($this->configuration->hasStruct()): ?>
    [?php
    $path = $sf_request->getParameter('path');
    ?]
    <div class="aStruct" data-url-start="/arm/<?php echo $this->getModuleName();?>" [?php echo ($path ? 'data-url-path="' . $path . '"' : '');?]></div>
    <script type="text/javascript">
        $(document).ready(function () {
            aStruct.init();
        });
    </script>
<?php else:?>
    <span class="br15"></span>
    <div class="batch_form__class">
        [?php endif; ?]

        [?php if (isset($pager)): ?]

        <div class="lui__list_actions__wrapper"[?php echo (isset($_partial) ? ' style="margin-top:0"' : ''); ?] data-count="[?php echo $pager->getNbResults();?]">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                [?php include_partial('<?php echo $this->getModuleName() ?>/list_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?]
                [?php include_partial('<?php echo $this->getModuleName() ?>/list_batch_actions', array('helper' => $helper, '_partial' => isset($_partial))) ?]
                [?php if (!isset($_partial)): ?]
                <?php if ($this->configuration->hasSearch()): ?>
                    <td style="padding-right: 10px"><input style="background-color:#fff;width:360px;" type="text" autocomplete="off" value="[?php echo $sf_request->getParameter('q'); ?]"
                                                           class="type_search input_with_erase" id="<?php echo $this->getModuleName() ?>_live_search" placeholder="Найти"/>
                    </td>
                <?php endif; ?>
                [?php endif; ?]
                <?php if ($this->configuration->hasFilterForm()): ?>
                    <td style="padding-right: 10px">
                        [?php include_partial('<?php echo $this->getModuleName() ?>/filters', array('form' => $filters, 'configuration' => $configuration, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => isset($_partial))) ?]
                    </td>
                <?php endif; ?>
                <?php
                if ($this->configuration->getListExport() !== false) {
                    ?>
                    [?php
                    if($pager->getNbResults() > 0)
                    {
                    ?]
                    <td>
                        <a href="[?php echo url_for('<?php echo $this->getModuleName(); ?>/index');?]?[?php echo ($sf_request->hasParameter('q') ? 'q=' . $sf_request->getParameter('q') . '&' : '');?]export"
                           class="export_excel pseudo_button lui_pseudo anywhere_icon__excel">Excel</a>
                    </td>
                    [?php
                    }
                    ?]
                    <?php
                }
                ?>
                [?php if ($pager->haveToPaginate()): ?]
                <td align="right" width="100%">
                    <div class="lui_pager">
                        [?php include_partial('<?php echo $this->getModuleName() ?>/pagination', array('pager' => $pager, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters : array()), '_partial' => isset($_partial))) ?]&nbsp;
                        <b style="position:relative;top:2px">[?php echo __('%%page%%/%%nb_pages%%', array('%%page%%' => $pager->getPage(), '%%nb_pages%%' => $pager->getLastPage()), 'sf_admin') ?]</b>
                    </div>
                </td>
                [?php endif; ?]
            </tr>
        </table>


    </div>


    <form id="batch_form" action="[?php echo ($_partial ? '?_spath=' : '') . url_for('<?php echo $this->getUrlForAction('collection') ?>', array('action' => 'batch')) ?]" method="post">


        <div id="lui_scroller" class="[?php echo (isset($_partial_no_scroll) ? '' : 'lui_scroller'); ?]">
            <div class="lui__scroller_wrapper"[?php echo (isset($_partial) ? ' style="padding:0 !important"' : ''); ?]>[?php include_partial('<?php echo $this->getModuleName() ?>/list', array('pager' => $pager, 'sort' => $sort, 'helper' => $helper, '_partial_filters' => (isset($_partial_filters) ? $_partial_filters->getRawValue() : array()), '_partial' => isset($_partial), '_partial_no_scroll' => isset($_partial_no_scroll))) ?]</div>
        </div>

        <input type="hidden" name="batch_action" id="batch_action_id"/>
        [?php $form = new BaseForm(); if ($form->isCSRFProtected()): ?]
        <input type="hidden" name="[?php echo $form->getCSRFFieldName() ?]" value="[?php echo $form->getCSRFToken() ?]"/>
        [?php endif; ?]

    </form>

    [?php endif; ?]

    [?php if (!$sf_request->isXmlHttpRequest()): ?]
    </div>

    <?php if ($this->configuration->hasSearch()): ?>
        [?php if (isset($pager)): ?]
        <script type="text/javascript">
            var jqxhr = false;
            var jqxhr_o = false;

            if ($('#<?php echo $this->getModuleName() ?>_live_search').length) {


                var jqxhr_old = $('#<?php echo $this->getModuleName() ?>_live_search').val().trim();
                var jqxhr_last_result = $('#<?php echo $this->getModuleName() ?>_live_search').val().trim();

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

                        jqxhr_last_result = $('#<?php echo $this->getModuleName() ?>_live_search').val().trim();

                        jqxhr_o.remove();
                    });
                }

                $(document).ready(function () {
                    $('#<?php echo $this->getModuleName() ?>_live_search').keyup(function (event) {

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
        [?php endif; ?]
    <?php endif; ?>
<?php endif;?>
[?php endif; ?]
[?php if (isset($replace_content) && $replace_content !== false): ?]
[?php echo htmlspecialchars_decode($replace_content); ?]
[?php endif; ?]