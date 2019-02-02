<div class="aStruct__form__box">
    [?php
    $form_names = array();
    $form_name = (isset($form_names[$form->getName()]) ? $form_names[$form->getName()] : $form->getName());
    ?]
    <?php
    if ($this->configuration->hasStruct()) {
        $struct = $this->configuration->getStruct();
        $struct_tabs_tables = array();


//        echo "<pre>";
//        print_r($struct);
//        echo "</pre>";
//        die();

    foreach ($struct as $s) {
    if (isset($s['tabs']) && count($s['tabs']) > 0) {
        $struct_tabs_tables[] = mb_strtolower($s['table']);
        ?>
        [?php
        if(mb_strtolower($form->getName()) == '<?php echo mb_strtolower($s['table']); ?>'){
        ?]
        <?php
        echo '<div class="aStruct__form__head"><div class="a_tabs" data-id="1">';
        foreach ($s['tabs'] as $tab_key => $tab) {
            echo '<div class="a_tab_selector[?php echo isset($active_tab) && $active_tab == ' . $tab_key . ' ? \' a_tab_selector_active\' : \'\';?]">' . $tab . '</div>';
        }
        echo '</div></div>';
    foreach ($s['tabs'] as $tab_key => $tab) {
        ?>
        <div class="a_tab_item a_tab_item_1_<?php echo ($tab_key + 1);?>">
            [?php
            $obj = (!$form->isNew() ? $form->getObject() : false);
            echo '<form class="struct_' . $form_name . '_form" data-id="' . ($obj ? str_replace('_', '', $form_name) . '_' . $obj->getId() : '') . '" method="post" action="/arm/' . $form_name . ($obj ? '/' . $obj->getId() : '') . '" data-inited="1">';
                ?]
                <div class="aStruct__form__head">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            [?php
                            if(($sf_user->hasCredential($form_name . '_create') && $form->isNew()) || ($sf_user->hasCredential($form_name . '_update') && !$form->isNew())){
                            ?]
                            <td style="padding-right: 10px;">
                                <button class="lui_pseudo">Сохранить</button>
                            </td>
                            [?php
                            }
                            ?]
                            <td align="left" width="100%">
                                [?php
                                if (!$form->isNew() && $sf_user->hasCredential($form_name . '_delete')) {
                                echo '<button class="lui_pseudo lui_pseudo_delete aStruct__form__btn_act" data-confirm="Вы уверены что хотите удалить объект?" data-url="/arm/' . $form_name . '/' . $obj->getId() . '?sf_method=delete&_csrf_token=' . $form->getCSRFToken() . '" data-method="post">Удалить</button>';
                                }
                                ?]
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="aStruct__form__body">
                    [?php
                    echo $form->renderHiddenFields();
                    echo $form->renderGlobalErrors();
                    if (!$form->isNew()) {
                    echo '<input name="sf_method" value="put" type="hidden"/>';
                    }
                    foreach ($form as $name => $field) {
                    if (!$field->isHidden()) {
                    $opts = $form[$name]->getWidget()->getOptions();
                    $label = $opts['label'];
                    $attributes = $form[$name]->getWidget()->getAttributes();
                    $class = 'sf_admin_form_row sf_admin_' . strtolower($opts['type']) . ' sf_admin_form_field_' . $name;
                    ?]
                    <div class="[?php echo $class ?][?php $form[$name]->hasError() and print ' errors' ?]">
                        <div>
                            [?php ?]
                            [?php if ($opts['type'] == 'checkbox'): ?]
                            <div class="content">
                                <label>[?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ?
                                    $attributes->getRawValue() : $attributes); ?][?php echo $label; ?]</label>
                            </div>
                            [?php else: ?]
                            <span class="inline-label">[?php echo $form[$name]->renderLabel($label) ?]</span>
                            <div class="content">
                                [?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ? $attributes->getRawValue() : $attributes) ?]
                                [?php echo $form[$name]->renderError() ?]
                                [?php if ($help): ?]<span class="help">[?php echo __($help, array(), 'messages') ?]</span>[?php elseif ($help = $form[$name]->renderHelp()): ?]
                                <span class="help">[?php echo strip_tags($help, '<a><i>') ?]</span>[?php endif;$help = false; ?]
                            </div>
                            [?php endif; ?]
                        </div>
                    </div>
                    [?php
                    }
                    }
                    ?]
                </div>
            </form>
        </div>
        <?php
    }
        ?>
        [?php
        }
        ?]
    <?php
    }
    }
    if(count($struct_tabs_tables) > 0){
        ?>
        [?php
        if(!in_array(mb_strtolower($form->getName()), array('<?php echo implode('\', \'', $struct_tabs_tables); ?>'))){
        ?]
        <?php
    }
    ?>
        [?php
        $obj = (!$form->isNew() ? $form->getObject() : false);
        echo '
        <form class="struct_' . $form_name . '_form" method="post" data-id="' . ($obj ? str_replace('_', '', $form_name) . '_' . $obj->getId() : '') . '" action="/arm/' . $form_name . (!$form->isNew() ? '/' . $obj->getId() : '') . '" data-inited="1">';
            ?]
            <div class="aStruct__form__head">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        [?php
                        if(($sf_user->hasCredential($form_name . '_create') && $form->isNew()) || ($sf_user->hasCredential($form_name . '_update') && !$form->isNew())){
                        ?]
                        <td style="padding-right: 10px;">
                            <button class="lui_pseudo">Сохранить</button>
                        </td>
                        [?php
                        }
                        ?]
                        <td align="left" width="100%">
                            [?php
                            if (!$form->isNew() && $sf_user->hasCredential($form_name . '_delete')) {
                            echo '<button class="lui_pseudo lui_pseudo_delete aStruct__form__btn_act" data-confirm="Вы уверены что хотите удалить объект?" data-url="/arm/' . $form->getName() . '/' . $obj->getId() . '?sf_method=delete&_csrf_token=' . $form->getCSRFToken() . '" data-method="post">Удалить</button>';
                            }
                            ?]
                        </td>
                    </tr>
                </table>
            </div>
            <div class="aStruct__form__body">
                [?php
                echo $form->renderHiddenFields();
                echo $form->renderGlobalErrors();
                if (!$form->isNew()) {
                echo '<input name="sf_method" value="put" type="hidden"/>';
                }
                foreach ($form as $name => $field) {
                if (!$field->isHidden()) {
                $opts = $form[$name]->getWidget()->getOptions();
                $label = $opts['label'];
                $attributes = $form[$name]->getWidget()->getAttributes();
                $class = 'sf_admin_form_row sf_admin_' . strtolower($opts['type']) . ' sf_admin_form_field_' . $name;
                ?]
                <div class="[?php echo $class ?][?php $form[$name]->hasError() and print ' errors' ?]">
                    <div>
                        [?php ?]
                        [?php if ($opts['type'] == 'checkbox'): ?]
                        <div class="content">
                            <label>[?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ?
                                $attributes->getRawValue() : $attributes); ?][?php echo $label; ?]</label>
                        </div>
                        [?php else: ?]
                        <span class="inline-label">[?php echo $form[$name]->renderLabel($label) ?]</span>
                        <div class="content">
                            [?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ? $attributes->getRawValue() : $attributes) ?]
                            [?php echo $form[$name]->renderError() ?]
                            [?php if ($help): ?]<span class="help">[?php echo __($help, array(), 'messages') ?]</span>[?php elseif ($help = $form[$name]->renderHelp()): ?]
                            <span class="help">[?php echo strip_tags($help, '<a><i>') ?]</span>[?php endif;$help = false; ?]
                        </div>
                        [?php endif; ?]
                    </div>
                </div>
                [?php
                }
                }
                ?]
            </div>
        </form>
    <?php
    if(count($struct_tabs_tables) > 0){
    ?>
        [?php
        }
        ?]
        <script type="text/javascript">
            tabs.init();
        </script>
        <?php
    }
    }
    ?>
</div>