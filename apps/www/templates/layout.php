<?php include(sfConfig::get('sf_app_template_dir') . '/header.php'); ?>
    <div class="body_wrapper_wrapper">
        <table class="body_wrapper" width="100%" cellspacing="0" cellpadding="0" height="100%">
            <tr>
                <td><?php include(sfConfig::get('sf_app_template_dir') . '/top.php'); ?></td>
            </tr>
            <tr>
                <td height="100%" align="center">
                    <table class="root_table" width="100%" cellspacing="0" cellpadding="0" height="100%">
                        <tr valign="top">
                            <td class="root_table__middle" align="center" height="100%">
                                <?php
                                echo $sf_content;
                                ?>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td><?php include(sfConfig::get('sf_app_template_dir') . '/bottom.php'); ?></td>
            </tr>
        </table>
    </div>
<?php include(sfConfig::get('sf_app_template_dir') . '/footer.php'); ?>