<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title><?php include_slot('title', sfConfig::get('app_arm_title')); ?></title>
    <link rel="shortcut icon" href="/i/favicon.png" type="image/png">
    <?php
    $path_prefix = isset($_SERVER['PATH_PREFIX']) ? $_SERVER['PATH_PREFIX'] : '';
    ?>
    <script type="text/javascript">
        var sf_app = '<?php echo sfConfig::get('sf_app');?>';
        var sf_prefix = '<?php echo $path_prefix;?>';
        var sf_user = <?php echo $sf_user->isAuthenticated() ? $sf_user->getUserId() : 'false';?>;
        var sf_user_root = <?php echo($sf_user->isAuthenticated() ? ($sf_user->getUsername() == 'root' ? 'true' : 'false') : 'false');?>;
        var sf_ws_pub = '<?php echo sfConfig::get('app_ws_pub');?>';
    </script>
    <?php
    if ($sf_user->isAuthenticated()) {
        if (file_exists(sfConfig::get('sf_web_js_dir_name', 'js') . $path_prefix . '/' . $this->getModuleName() . '.js')) {
            use_javascript(mb_substr($path_prefix, 1) . '/' . $this->getModuleName() . '.js');
        }
        if (file_exists(sfConfig::get('sf_web_css_dir_name', 'css') . $path_prefix . '/' . $this->getModuleName() . '.css')) {
            use_stylesheet(mb_substr($path_prefix, 1) . '/' . $this->getModuleName() . '.css');
        }
    }
    include_http_metas();
    include_stylesheets();
    include_javascripts();
    ?>
</head>
<body>
<div class="lui__root">
    <div class="ftm_wrap ftm" onclick="$(this).hide();">
        <div class="ftm__actions">
            <div class="ftm__close"></div>
            <div class="ftm__rotate" title="Повернуть по часовой стрелке"
                 onclick="ftm.rotate(this);event.stopPropagation();return false;"></div>
        </div>
        <table width="100%" height="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td valign="middle" align="center">
                    <div class="fotorama " data-auto="false" onclick="event.stopPropagation();"></div>
                    <div class="jcrop_curtain__long_item"></div>
                </td>
            </tr>
        </table>
    </div>

    <?php
    if (!$sf_user->isAuthenticated()) {
        echo $sf_content;
    } else {
        ?>
        <table class="lui__desktop" border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr valign="top">
                <td class="lui__desktop_left invert" style="padding-top:20px;">
                    <?php
                    if ($sf_user->getUsername() === 'root') {
                        echo '<a href="' . url_for('@version') . '" class="version_top">v&nbsp;' . ProjectUtils::getVersion() . '</a>';
                    }
                    ?>
                    <div class="lui__desktop_left_hider" title="<?php echo __('Свернуть'); ?>"></div>
                    <div class="lui__desktop_left__wrapper">
                        <a target="_blank" href="/" class="logo"></a>
                        <i class="br20" style="border-bottom:1px solid #D8D8D866"></i>
                        <b class="br20"></b>
                        <div class="lui__nav__wrapper" style="position:relative;">
                            <ul class="lui__nav">
                                <?php
                                function menu_cmp($a, $b)
                                {
                                    if ($a['order'] == $b['order']) {
                                        return 0;
                                    }
                                    return ($a['order'] < $b['order']) ? -1 : 1;
                                }

                                $parser = new sfYamlParser();
                                $modules = glob(sfConfig::get('sf_app_module_dir') . '/*');
                                $links = array();
                                $group_counts = array();
                                foreach ($modules as $k => $v) {
                                    if (file_exists($v . '/config/generator.yml')) {
                                        $p = $parser->parse(file_get_contents($v . '/config/generator.yml'));
                                        $module = basename($v);
                                        if ((!$sf_user->hasCredential($module . '_index') && $module !== 'help_dialog') || $p['generator']['param']['skip'] || $p['generator']['param']['config']['list']['title'] == '') {
                                            continue;
                                        }
                                        $model = str_replace(' ', '', ucwords(str_replace('_', ' ', $module)));
                                        $count = '';
                                        $count_number = 0;
                                        if (class_exists($model) && method_exists($model, 'getMenuCount')) {
                                            $count = $model::getMenuCount();
                                            $count_number = $count;
                                            $count = '<span class="lui__nav_menu__count">' . ($count > 0 ? $count : '') . '</span>';
                                        }

                                        if(in_array($module, array('test_company', 'test_item_company', 'company_official_struct', 'document_company', 'company_service', 'event', 'menu_cat', 'company_info', 'breach_company')) && !myUser::$company){
                                            continue;
                                        }

                                        $group_class = isset($p['generator']['param']['group']) ? Page::translit($p['generator']['param']['group']) : false;
                                        if($group_class !== false){
                                            if(!isset($group_counts[$group_class])){
                                                $group_counts[$group_class] = 0;
                                            }
                                            $group_counts[$group_class] += $count_number;
                                        }

                                        $links[] = array(
                                            'm' => $module,
                                            'title' => $p['generator']['param']['config']['list']['title'],
                                            'order' => isset($p['generator']['param']['order']) ? $p['generator']['param']['order'] : 0,
                                            'group' => isset($p['generator']['param']['group']) ? $p['generator']['param']['group'] : false,
                                            'group_class' => $group_class,
                                            'tab_group' => isset($p['generator']['param']['tab_group']) ? $p['generator']['param']['tab_group'] : false,
                                            'add' => isset($p['generator']['param']['add']) ? $p['generator']['param']['add'] : true,
                                            'hr' => isset($p['generator']['param']['hr']),
                                            'count' => $count
                                        );
                                    }
                                }

                                usort($links, 'menu_cmp');

                                $open_group = '';
                                $tab_groups = array();
                                foreach ($links as $link){
                                    if($link['tab_group']){
                                        if(!isset($tab_groups[$link['tab_group']])){
                                            $tab_groups[$link['tab_group']] = array();
                                        }
                                        $tab_groups[$link['tab_group']][] = $link['m'];
                                    }
                                    if($link['group'] && $this->getModuleName() == $link['m']){
                                        $open_group = $link['group_class'];
                                        break;
                                    }
                                }

                                foreach ($links as $k => $v) {
                                    if($v['tab_group']){
                                        $tab_groups_on = in_array($this->getModuleName(), $tab_groups[$v['tab_group']]);
                                        if(($tab_groups_on && $this->getModuleName() != $v['m']) || (!$tab_groups_on && $tab_groups[$v['tab_group']][0] != $v['m'])){
                                            continue;
                                        }
                                    }
                                    if ($v['group'] && (!isset($links[$k - 1]) || $links[$k - 1]['group'] != $v['group'])) {
                                        echo '<li class="lui__nav_li_group_btn' . ($v['group_class'] === $open_group ? ' lui__nav_li_group_btn_open' : '') . '" data-group="' . $v['group_class'] . '">';
                                        echo '<div class="lui__nav_li_group_btn__cont">' . $v['group'] . '</div>';
                                        if(isset($group_counts[$v['group_class']]) && $group_counts[$v['group_class']] > 0){
                                            echo '<span class="lui__nav_menu__count">' . $group_counts[$v['group_class']] . '</span>';
                                        }
                                        echo '</li>';
                                    }
                                    echo '<li class="' . ($this->getModuleName() == $v['m'] ? 'current' : '') . ($v['group'] ? ' lui__nav_li_group lui__nav_li_group_' . $v['group_class'] : '') . '" ' . ($v['group'] && $v['group_class'] !== $open_group ? 'style="display:none;"' : '') . '>';
                                    $link = $v['m'];
                                    echo '<a class="lui__nav_a lui__nav_a_' . $v['m'] . '" href="' . url_for('@' . $v['m']) . '">' . $v['title'] . '</a>' . $v['count'];
                                    echo '</li>';
                                    if ($v['hr'] && $k != count($links) - 1) {
                                        echo '<i class="hr20" style="margin:10px 0;background:#D8D8D866;"></i>';
                                    }
                                }
                                echo '</ul>';
                                echo '</div>';
                                echo '<div class="fixed_user_menu">';
                                echo '<div style="position:relative;">';
//                                echo link_to('Профиль', '@profile', array('class' => 'sprite_link sprite_link_user'));
                                echo '</div>';
                                echo '<i class="br10"></i>';
                                if ($sf_user->getUsername() === 'root') {
                                    echo '<a href="' . url_for('@cs_setting') . '" class="sprite_link sprite_link_setting">Настройки</a>';
                                    echo '<i class="br10"></i>';
                                }
                                echo '<a href="' . url_for('@signout') . '" class="sprite_link sprite_link_logout">Выйти</a>';
                                echo '</div>';
                                ?>
                        </div>
                </td>
                <td width="100%" class="lui__desktop_right" height="100%">
                    <div class="lui__desktop_right__wrapper <?php echo sfConfig::get('sf_app') . '_' . $this->getModuleName(); ?>">
                        <?php
                        echo $sf_content;
                        ?>
                    </div>
                </td>
            </tr>
        </table>
        <?php
    }
    ?>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        var calc_lui__nav__wrapper = function () {
            $('.lui__nav__wrapper').height($(window).height() - $('.lui__nav__wrapper').offset().top - $('.fixed_user_menu').outerHeight());
            $('.lui__nav__wrapper').perfectScrollbar('update');
        };
        $('.lui__nav__wrapper').perfectScrollbar();
        $('.lui__nav__wrapper').scroll(function () {
            var top = $(this).scrollTop();
            var bottom = $('.lui__nav').outerHeight() - $(this).outerHeight();

            $(this).removeClass('lui__nav__wrapper__sh_top');
            $(this).removeClass('lui__nav__wrapper__sh_bottom');
            $(this).removeClass('lui__nav__wrapper__sh_bottom_top');

            if (bottom < 0) {
                return false;
            }

            if (top == 0) {
                $(this).addClass('lui__nav__wrapper__sh_bottom');
            } else if (top == bottom) {
                $(this).addClass('lui__nav__wrapper__sh_top');
            } else {
                $(this).addClass('lui__nav__wrapper__sh_bottom_top');
            }
        }).scroll();

        $(window).resize(function () {
            calc_lui__nav__wrapper();
            $('.lui__nav__wrapper').scroll();
        }).resize();

        $('.lui__nav_li_group_btn').click(function(){
            var btn = $(this);
            if(btn.data('group')){
                var groupLi = $('.lui__nav_li_group_' + btn.data('group'));
                if(btn.hasClass('lui__nav_li_group_btn_open')){
                    btn.removeClass('lui__nav_li_group_btn_open');
                    groupLi.hide();
                }else{
                    btn.addClass('lui__nav_li_group_btn_open');
                    groupLi.show();
                }
                $('.lui__nav__wrapper').scroll();
            }
        });
    });
</script>

</body>
</html>