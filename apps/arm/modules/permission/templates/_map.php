<?php
if(isset($user_group_permissions)){
    $user_group_permissions = $user_group_permissions->getRawValue();
}
if(isset($user_permissions)){
    $user_permissions = $user_permissions->getRawValue();
}
$rows = array();
$cols = array();
$rows_cols = array();
$rows_cols_title = array();
$base_permissions = Permission::$base_permission;
unset($base_permissions['batch|batchMerge']);
foreach ($permissions as $permission) {
    $c_split = explode('-', $permission['credential']);
    $d_split = explode(':', $permission['description']);
    $rows[$c_split[0]] = $d_split[0];
    $cols[$c_split[1]] = $d_split[1];
    $rows_cols[$c_split[0]][$c_split[1]] = $permission['id'];
    $rows_cols_title[$permission['id']] = $d_split[1];
}
function sort_rows($a, $b)
{
    if ($a['order'] == $b['order']) {
        return 0;
    }
    return ($a['order'] < $b['order']) ? -1 : 1;
}
$orders = array();
$parser = new sfYamlParser();
foreach ($rows as $row_key => $row_value) {
    $v = array('module' => $row_key, 'title' => $row_value, 'order' => 0);
    $generator = sfConfig::get('sf_app_module_dir') . '/' . $row_key . '/config/generator.yml';
    if(file_exists($generator)){
        $p = $parser->parse(file_get_contents($generator));
        if(isset($p['generator']['param']['order'])){
            $v['order'] = $p['generator']['param']['order'];
        }
    }
    $orders[] = $v;
}
usort($orders, 'sort_rows');
$rows = array();
foreach ($orders as $order){
    $rows[$order['module']] = $order['title'];
}
?>
<div style="margin-right: 10px !important;" class="lui_pseudo magick_checker__check_all">Отметить все</div><div class="lui_pseudo magick_checker__uncheck_all">Убрать все</div>
<table class="lui__list_table lui__list_table_permissions" cellpadding="0" cellspacing="0">
    <thead>
    <tr>
        <th align="left">Модуль</th>
        <?php
        foreach ($base_permissions as $base_permission){
            echo '<th class="magick_checker__col" width="1">'. $base_permission . '</th>';
        }
        ?>
        <th class="magick_checker__col">Дополнительно</th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($rows as $row_key => $row_value) {
        echo '<tr>';
        echo '<td valign="middle" title="' . $row_key . '" class="magick_checker__row"><b>' . ($row_value ? $row_value : $row_key) . '</b></td>';
        foreach ($base_permissions as $base_permission_key => $base_permission){
            echo '<td align="center" valign="middle">';
            if(in_array($row_key, array('test_item_company', 'test_item')) && in_array($base_permission_key, array('new|create', 'update', 'show|edit'))){
                echo '</td>';
                continue;
            }
            $perm_buff = '';
            if(isset($rows_cols[$row_key][$base_permission_key]) && ($row_key)){
                $perm_buff_item = '<label style="height: 14px;"  title="' . $base_permission_key . '"><input autocomplete="off" type="checkbox" name="' . $form->getName() . '_permissions[]"' . (in_array($rows_cols[$row_key][$base_permission_key], $user_group_permissions) ? ' checked="checked"' . ($form->getName() == 'user' ? ' disabled="disabled"' : '') : (in_array($rows_cols[$row_key][$base_permission_key], $user_permissions) ? ' checked="checked"' : '')) . ' value="' . $rows_cols[$row_key][$base_permission_key] . '" /></label>';
                if (array_key_exists($base_permission_key, $base_permissions)) {
                    echo $perm_buff_item;
                } else {
                    $perm_buff .= $perm_buff_item;
                }
                echo $perm_buff;
            }
            echo '</td>';
        }
        echo '<td align="left" valign="middle">';
        $perm_buff = '';
        foreach ($rows_cols[$row_key] as $col_key => $col_value) {
            if(isset($base_permissions[$col_key]) && (!in_array($row_key, array('test_item_company', 'test_item')) || (!in_array($col_key, array('new|create', 'update', 'show|edit'))))){
                continue;
            }
            if(($row_key == 'user_log' && $col_key == 'return') || (in_array($row_key, array('test', 'test_company'))&& $col_key == 'questions_list') || ($row_key == 'pay' && $col_key == 'form_data')){
                continue;
            }
            $perm_buff_item = '<div class="lui__list_table_permissions__item" title="' . $col_key . '">';
            $perm_buff_item .= '<label style="height: 14px;"><input autocomplete="off" type="checkbox" name="' . $form->getName() . '_permissions[]"' . (in_array($col_value, $user_group_permissions) ? ' checked="checked"' . ($form->getName() == 'user' ? ' disabled="disabled"' : '') : (in_array($col_value, $user_permissions) ? ' checked="checked"' : '')) . ' value="' . $col_value . '" />' . ($rows_cols_title[$col_value] != '' ? $rows_cols_title[$col_value] : $col_key) . '</label>';
            $perm_buff_item .= '</div>';
            if (array_key_exists($col_key, $base_permissions)) {
                echo $perm_buff_item;
            } else {
                $perm_buff .= $perm_buff_item;
            }
        }
        echo $perm_buff;
        echo '</td>';
        echo '</tr>';
    }
    ?>
    </tbody>
</table>
<script type="text/javascript">
    var magickChecker = {
        col: function(checker){
            var check = false;
            checker.parent().parent().parent().find('td').each(function (k, de) {
                if (checker.prop('cellIndex') == $(de).prop('cellIndex')) {
                    if ($(de).find('input').length > 0 && !$(de).find('input').is(':checked')) {
                        check = true;
                        return false;
                    }
                }
            });
            checker.parent().parent().parent().find('td').each(function (k, de) {
                if (checker.prop('cellIndex') == $(de).prop('cellIndex')) {
                    $(de).find('input').prop('checked', check);
                }
            });
        },
        row: function(checker){
            var check = false;
            checker.parent().find('td').each(function (k, de) {
                if ($(de).find('input').length > 0 && !$(de).find('input').is(':checked')) {
                    check = true;
                }
            });
            checker.parent().find('td').each(function (k, de) {
                $(de).find('input').prop('checked', check);
            });
        },
        all: function(check){
            $('.lui__list_table_permissions input[type="checkbox"]:enabled').prop('checked', check);
        },
        init: function(){
            $('.magick_checker__col').click(function () {
                magickChecker.col($(this));
            });
            $('.magick_checker__row').click(function () {
                magickChecker.row($(this));
            });
            $('.magick_checker__check_all, .magick_checker__uncheck_all').click(function(){
                magickChecker.all($(this).hasClass('magick_checker__check_all'));
            });
        }
    };
    magickChecker.init();
</script>