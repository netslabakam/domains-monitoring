<?php use_helper('I18N', 'Date') ?>
<div class="lui_form_layer">
    <span style="margin-left: 16px;" class="lui__h1"><?php echo __('Профиль', array(), 'messages') ?></span>
    <i class="br15 hidden_element"></i>
    <div class="lui__list_actions__wrapper">
        <ul class="sf_admin_actions sf_admin_actions__pseudo">
            <li class="sf_admin_action_save"><input type="submit" value="Сохранить"></li>
            <li style="visibility:hidden;"><input type="submit"></li>
        </ul>
        <?php if (!$sf_request->isXmlHttpRequest()): ?>
            <script type="text/javascript">
                $(document).ready(function () {
                    $('.sf_admin_actions input').click(function () {
                        $(this).closest('.lui_form_layer').find('form').append('<input type="hidden" name="' + $(this).attr("name") + '">');
                        $(this).closest('.lui_form_layer').find('form').submit();
                    });
                });
            </script>
        <?php endif; ?>
    </div>
    <?php if ($sf_user->hasFlash('notice')): ?>
        <i class="lui__notice<?php echo(!$sf_request->isXmlHttpRequest() ? ' lui__notice__no_ajax' : ''); ?>">&nbsp;&nbsp;&nbsp;<?php echo __($sf_user->getFlash('notice'), array(), 'sf_admin') ?></i>
    <?php endif; ?>

    <?php if ($sf_user->hasFlash('error')): ?>
        <i class="lui__error<?php echo(!$sf_request->isXmlHttpRequest() ? ' lui__error__no_ajax' : ''); ?>">&nbsp;&nbsp;&nbsp;<?php echo __($sf_user->getFlash('error'), array(), 'sf_admin') ?></i>
    <?php endif; ?>

    <?php if ($sf_user->hasFlash('restrict_error')): ?>
        <span class="lui__error lui__restrict_error<?php echo(!$sf_request->isXmlHttpRequest() ? ' lui__error__no_ajax' : ''); ?>">&nbsp;&nbsp;&nbsp;<?php echo htmlspecialchars_decode($sf_user->getFlash('restrict_error')) ?></span>
    <?php endif; ?>

    <?php if ($form->hasGlobalErrors()): ?>
        <?php echo $form->renderGlobalErrors() ?>
    <?php endif; ?>

    <?php use_stylesheets_for_form($form) ?>
    <?php use_javascripts_for_form($form) ?>
    <?php echo '<form method="post" action="' . url_for('@profile') . '">' ?>

    <div id="lui_scroller" class="lui__scroller_class">
        <div class="lui__scroller_wrapper" style="position:relative;z-index:102;padding-left:10px;">
            <fieldset>
                <?php
                echo $form->renderHiddenFields();
                echo $form->renderGlobalErrors();
                foreach ($form as $name => $field) {
                    if (!$form[$name]->isHidden()) {
                        $attributes = array();
                        $help = null;
                        $opts = $form[$name]->getWidget()->getOptions();
                        $class = 'sf_admin_form_row sf_admin_' . strtolower($opts['type']) . ' sf_admin_form_field_' . $name;
                        ?>
                        <div class="<?php echo $class ?><?php $form[$name]->hasError() and print ' errors' ?>">
                            <div>
                                <?php $opts = $form[$name]->getWidget()->getOptions(); ?>
                                <?php if ($opts['type'] == 'checkbox'): ?>
                                    <div class="content">
                                        <label><?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ? $attributes->getRawValue() : $attributes); ?><?php echo $label; ?></label>
                                    </div>
                                <?php else: ?>
                                    <span class="inline-label"><?php echo $form[$name]->renderLabel() ?></span>
                                    <div class="content">
                                        <?php echo $form[$name]->render($attributes instanceof sfOutputEscaper ? $attributes->getRawValue() : $attributes) ?>
                                        <?php echo $form[$name]->renderError() ?>
                                        <?php if ($help): ?><span
                                                class="help"><?php echo __($help, array(), 'messages') ?></span><?php elseif ($help = $form[$name]->renderHelp()): ?>
                                            <span class="help"><?php echo strip_tags($help, '<a><i>') ?></span><?php endif; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
            </fieldset>
            <span class="br30"></span>
        </div>
    </div>
    </form>
</div>