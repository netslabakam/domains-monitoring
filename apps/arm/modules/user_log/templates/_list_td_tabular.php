<?php
$generators = $generators->getRawValue();
$log_types = UserLog::$log_types;
?>

<td class="sf_admin_text sf_admin_list_td_user">
    <?php
    $user = $user_log->getUser();
    /*
    if($user->getIname())
    {
      echo $user->getIname() . ' ';
    }
    if($user->getFname())
    {
      echo $user->getIname() . ', ';
    }
    */
    echo $user->getUsername();
    ?>
</td>
<td class="sf_admin_text sf_admin_list_td_log_type">
    <?php echo isset($log_types[$user_log->getLogType()]) ? $log_types[$user_log->getLogType()] : $user_log->getLogType(); ?>
</td>
<td class="sf_admin_text sf_admin_list_td_model">
    <?php
    if (isset($generators[$user_log->getModule()])) {
        $generator = $generators[$user_log->getModule()];
        echo $generator['generator']['param']['config']['list']['title'];
    } else {
        echo $user_log->getModel();
    }
    ?>
</td>
<td class="sf_admin_text sf_admin_list_td_log">
    <?php
    $object = @unserialize($user_log->getLog(ESC_RAW));
    if (is_object($object)) {
        if ($user_log->getLogType() == 'update') {
            $fields = false;
            if (isset($generators[$user_log->getModule()])) {
                $generator = $generators[$user_log->getModule()];
                $fields = $generator['generator']['param']['config']['fields'];
            }
            $old = $object->getModified(true, true);
            $new = $object->getModified(false, true);

            foreach ($old as $fk => $fv) {
                if ($fk != 'updated_at' && $fk != 'created_at') {
                    if ($fields !== false) {
                        echo '<b>' . $fields[$fk]['label'] . '</b>';
                        echo '<i class="br3"></i>';
                    }
                    if ($fk == 'password') {

                    } else {
                        echo ($fv == '' ? '<i>нет значения</i>' : $fv) . '&nbsp;→&nbsp;' . ($new[$fk] == '' ? '<i>нет значения</i>' : $new[$fk]) . '<i class="br5"></i>';
                    }
                }
            }
        } else {
            echo '<b>' . $object . '</b>';
        }
    }
    ?>
</td>
<td class="sf_admin_date sf_admin_list_td_created_at">
    <?php echo false !== strtotime($user_log->getCreatedAt()) ? format_date($user_log->getCreatedAt(), "g") : '&nbsp;' ?>
</td>
<td class="sf_admin_text sf_admin_list_td_action">
    <?php
    if ($sf_user->getUsername() == 'root' && $user_log->getLogType() == 'delete') {
        echo '<ul class="sf_admin_td_actions">';
        echo '<li class="sf_admin_action_return"><a href="' . url_for('user_log/return?id=' . $user_log->getId()) . '">Восстановить</a></li>';
        echo '</ul>';
    }
    ?>
</td>
