<?php slot('title', 'Авторизация'); ?>
<?php use_helper('I18N') ?>
<style>
    input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
</style>
<table width="100%" class="login_form_table">
    <tr>
        <td align="center">
            <form method="post" id="login_form" class="form" action="<?php echo url_for('@signin'); ?>">
                <?php
                foreach (array('notice', 'error') as $flash){
                    if($sf_user->hasFlash($flash)){
                        echo '<ul class="notice_list"><li>' . $sf_user->getFlash($flash) . '</li></ul>';
                    }
                }
                ?>
                <div>
                    <table cellpadding="0">
                        <tr align="center">
                            <td>
                                <?php
                                /*
<img style="position: absolute;margin-left: -100px; margin-top: -200px" src="/i/arm/logo.png" width="200" height="127"/>
                                 */
                                echo $form;
                                ?>
                            </td>
                        </tr>
                        <tr align="center">
                            <td>
                                <input type="submit" id="submit" name="submit" data-title_normal="Войти" data-title_progress="Вход..." data-title_error="Ошибка" value="Войти"/>
                            </td>
                        </tr>
                        <?php
                        /*
                        ?>
                        <tr align="center">
                            <td>
                                <span class="br10"></span>
                                <?php echo link_to('Восстановить пароль', '@reset');?>
                            </td>
                        </tr>
                        <?php
                        */
                        ?>
                    </table>
                </div>
            </form>
        </td>
    </tr>
</table>
<div class="bg_changer" style="background-color:#182A36;"></div>
<script type="text/javascript">

    $(document).ready(function () {

    });

</script>


<script type="text/javascript">

</script>
