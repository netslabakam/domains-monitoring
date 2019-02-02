<?php

class sfWidgetFormInputFileUpload extends sfWidgetForm
{
    protected function configure($options = array(), $attributes = array())
    {
        parent::configure($options, $attributes);
        $this->addOption('allowedFileTypes', '');
        $this->addOption('types_info', true);
        $this->addOption('sizes_info', true);
        $this->addOption('script', '/uploader');
        $this->addOption('size', 1024 * 1024 * 120);
        $this->addOption('multiple', false);
        $this->addOption('emulateUpload', false);
        $this->addOption('with_text', false);
        $this->addOption('obj_id', null);
        $this->addOption('jcrop', false);
        $this->addOption('theme', false);
        $this->addOption('window', false);
        $this->addOption('btn_title', 'Выберите файл');
        $this->addOption('preview_linefeed', true);
        $this->addOption('progress_bar', true);
        $this->addOption('insert_title', true);
        $this->addOption('lock', null);
    }

    public function render($name, $value = null, $attributes = array(), $errors = array())
    {
        $file_types = array(
            'pdf' => 'application/pdf',
            'xlsx' => 'application/vnd.ms-excel',
            'xls' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'docx' => 'application/msword',
            'doc' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'ppt' => 'application/vnd.ms-powerpoint',
            'pptx' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'svg' => 'image/svg+xml',
            'mp3' => 'audio/mpeg',
            'mp4' => 'video/mp4',
            'mpeg' => 'video/mpeg',
            'webm' => 'video/webm'
        );
        $id = str_replace(array('[', ']'), '_', $name);
        $size = $this->getOption('size');
        $allowedFileTypes = $this->getOption('allowedFileTypes');
        $script = $this->getOption('script');
        $key_exp = explode('=', $script);
        $key = (isset($key_exp[1]) ? $key_exp[1] : '');
        $multiple = $this->getOption('multiple');
        $sizes = sfConfig::get('image_' . $key . '_sizes');
        $ftm_open = 'var ftmOpen = 1;';

        $emulate_script = '';
        if ($this->getOption('emulateUpload')) {
            $emulate_script = 'emulationUploaderClick($(\'.uploader_preview__item\').data(\'val\'), \'write\');';
            if ($this->getOption('multiple')) {
                $emulate_script .= '$(\'.uploader_preview__item\').remove()';
            }
        }

        if ($this->getOption('jcrop')) {
            $jcrop_key = $key;
            $app_param = $sizes;
            $jcrop_param_str = '{';

            $jcrop_c = 0;
            foreach ($app_param as $app_param_key => $app_param_item) {
                if ($app_param_key != 'min' && $app_param_item['jcrop']) {
                    $jcrop_param_str .= ($jcrop_c != 0 ? ', ' : '') . $app_param_key . ': [' . $app_param_item['width'] . ', ' . $app_param_item['height'] . ', false]';
                    $jcrop_c++;
                }
            }
            $jcrop_param_str .= '}';
        }

        $add_js = '';

        $jMethod = $multiple ? 'append' : 'html';

        $html = '';
        $equal = false;
        $name_edit_btn = '<span title="Изменить название" class="uploader_preview__item__edit_name" onclick="liteUploader_editName(this);"></span>';
        if (!is_null($value) && $value != '') {




            foreach (explode(';', $value) as $v) {
                $file = '';
                if ($this->getOption('with_text')) {
                    $ex = explode(':', $v);
                    $file = $ex[0];
                } else {
                    $file = $v;
                }
                $file_type_img = explode('.', $file);
                $format = $file_type_img[count($file_type_img) - 1];

//                $preview_height = 100;
                $preview_height = false;
                $equal = false;
                if($key){
                    $cfg_size = sfConfig::get('image_' . $key . '_sizes');
                    $equal = $equal = sfConfig::get('image_' . $key . '_equal');
                    if($equal && isset($cfg_size['S']['height'])){
                        if($cfg_size['S']['height'] <= 100){
                            $preview_height = false;
                        }
                    }
                }
                if(in_array($format, array('png', 'jpg', 'jpeg'))) {
                    $preview = '<img ' . (true ? 'onclick="ftm.init(\\\'item\\\', this);"' : '') . ' data-' . $key . '_id="' . $this->getOption('obj_id') . '" src="/u/f/' . (trim($key) != '' && !$equal && isset($sizes['S']) ? Page::replaceImageSize($file, 'S') : $file) . '?u=' . rand(1, 10000) . '" ' . ($preview_height ? 'height="' . $preview_height . '"' : '') . ' />';
                }else{
                    $preview = '<a target="_blank" download="" href="/u/f/' . $file . '" class="document_file_icon"></a>';
                }
                $html = '<div class="uploader_preview__item" data-val="' . $v . '"><span title="Удалить файл" class="uploader_preview__item_close" onclick="$(this).parent().remove();liteUploader_updateVal_' . $id . '();"></span>';
                if($this->getOption('with_text')){
                    $html .= $name_edit_btn;
                }
                $html .= $preview . '</div>';
                $add_js .= "$('#" . $id . "__uploader_preview')." . $jMethod . "('" . $html . "');";
            }
        }
        $html = '';
        $tip = array();
        if($allowedFileTypes && $this->getOption('types_info')){
            $file_types_help = array();
            foreach (explode(',', $allowedFileTypes) as $allowed_mime){
                foreach ($file_types as $file_type => $mime){
                    if($allowed_mime == $mime){
                        $file_types_help[] = $file_type;
                        break;
                    }
                }
            }
            if(count($file_types_help) > 0){
                $tip[] = 'Типы файлов: ' . implode(', ', $file_types_help);
            }
        }
        if($this->getOption('sizes_info')){
            $size_type = 'min';
            $size_tip = '';
            if($equal){
                $size_tip .= 'Требуются';
            }elseif(isset($sizes['min'])){
                $size_tip .= 'Минимальные';
            }elseif(isset($sizes['max'])){
                $size_tip .= 'Максимальные';
                $size_type = 'max';
            }
            if($size_tip != ''){
                $size_tip .= ' размеры ' . $sizes[$size_type]['width'] . 'px*' . $sizes[$size_type]['height'] . 'px';
                $tip[] = $size_tip;
            }
            if(count($tip) > 0){
                $html = '<span class="small_gray">' . implode('. ', $tip) . '</span><i class="br5"></i>';
            }
        }

        ob_start();

//        $themes = array('dashed_box', 'dashed_circle', 'line');

        ?>
        <div class="progress_bar_and_file_ct<?php echo ($this->getOption('theme') ? ' progress_bar_and_file_ct_' . $this->getOption('theme') : '');?> progress_bar_and_file_ct__<?php echo $id;?>">
            <label class="pseudo_button lui_pseudo" style="position:relative;z-index:1000;" onclick="<?php echo ($this->getOption('lock') !== null ? 'alert(\'' . $this->getOption('lock') . '\');return false;' : '');?>">
                <span><?php echo $this->getOption('btn_title') . ($multiple ? 'ы' : '');?></span><input accept="<?php echo $allowedFileTypes;?>" type="file" class="pseudo_button_file" name="file<?php echo ($multiple ? '" multiple="multiple' : '');?>" id="<?php echo $id;?>__uploader" />
            </label>
            <input style="font-weight:bold;position:relative;top:1px;border-color:transparent;visibility:hidden;" size="50" readonly="true" type="text" name="<?php echo $name;?>" id="<?php echo $id;?>" value="<?php echo $value;?>" /><?php
            if($this->getOption('preview_linefeed')){
                echo '<i class="br5"></i>';
            }?><div id="<?php echo $id;?>__uploader_preview"></div>
        </div>
        <?php
        if($this->getOption('progress_bar')){
            ?><div class="progress_bar_ct progress_bar_ct_<?php echo $id;?>">
                <div class="progress_bar_ct_bar_info">Загрузка</div><div class="progress_bar_ct_bar_percent">20%</div>
                <div class="progress_bar_ct_bar">
                    <div class="progress_bar_ct_bar_w"></div>
                </div>
                <div class="progress_bar_ct_button"></div>
            </div><?php
        }
        $html .= ob_get_contents();
        ob_end_clean();

        $onUpload = '';
        if (!$multiple) {
            $onUpload = "$('#' . $id . ').val(response.filename);";
        }

        ob_start();
        ?>
        <style type="text/css">
            .uploader_preview__item {
                display:inline-block;
                margin:5px 10px 5px 0;
                position:relative;
                vertical-align:middle;
                border:none;
            }
            .uploader_preview__item[data-val*=".png"],
            .uploader_preview__item[data-val*=".jpeg"],
            .uploader_preview__item[data-val*=".jpg"] {
                width:80px;
                height:80px;
                box-shadow:0 0 0 1px #c8c8c8;
                border-radius:2px;
            }
            .uploader_preview__item_close {
                display:none;
                position:absolute;
                top:-3px;
                right:-3px;
                cursor:pointer;
                color:#FF0000;
                z-index:1;
                background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0id2luZG93cy0xMjUyIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM3MS4yMyAzNzEuMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS4yMyAzNzEuMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cG9seWdvbiBwb2ludHM9IjM3MS4yMywyMS4yMTMgMzUwLjAxOCwwIDE4NS42MTUsMTY0LjQwMiAyMS4yMTMsMCAwLDIxLjIxMyAxNjQuNDAyLDE4NS42MTUgMCwzNTAuMDE4IDIxLjIxMywzNzEuMjMgICAxODUuNjE1LDIwNi44MjggMzUwLjAxOCwzNzEuMjMgMzcxLjIzLDM1MC4wMTggMjA2LjgyOCwxODUuNjE1ICIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4=') no-repeat 50% 50%, #fff;
                background-size:contain;
                background-size:70%;
                width:26px;
                height:26px;
                border:1px solid #c8c8c8;
                border-radius:2px;
            }
            .uploader_preview__item__edit_name {
                display:none;
                position:absolute;
                bottom:-3px;
                right:-3px;
                cursor:pointer;
                color:#FF0000;
                z-index:1;
                background:url('/i/pencil.svg') no-repeat 50% 50%, #fff;
                background-size:contain;
                background-size:70%;
                width:26px;
                height:26px;
                border:1px solid #c8c8c8;
                border-radius:2px;
            }
            .uploader_preview__item:hover .uploader_preview__item_close,
            .uploader_preview__item:hover .uploader_preview__item__edit_name {
                display:inline-block;
            }
            .uploader_preview__item img {
                position:absolute;
                margin:auto;
                top:0;
                bottom:0;
                left:0;
                right:0;
                cursor:pointer;
                max-height:100%;
                max-width:100%;
                border-radius:2px;
            }
            .uploader_preview__item img:hover {
                box-shadow:0 5px 15px 0 rgba(0, 0, 0, 0.2);
            }
            .progress_bar_and_file_ct_dashed_box,
            .progress_bar_and_file_ct_dashed_circle {
                border:1px dashed #8b8b8b;
                width:300px;
                height:150px;
            }
            .progress_bar_and_file_ct input {
                display:none;
            }
            .progress_bar_and_file_ct_line .lui_pseudo {
                position:relative;
                border:none;
                color:#4a4a4a;
                background-color:transparent;
                margin:0 !important;
                padding:0;
                height:auto;
                line-height:normal;
            }
            .progress_bar_and_file_ct_line .lui_pseudo span {
                display:inline-block;
                border-bottom:1px dashed rgba(74, 74, 74, 0.3);
                vertical-align:middle;
            }
            .progress_bar_and_file_ct_line .lui_pseudo:before {
                content:'';
                display:inline-block;
                width:15px;
                height:15px;
                margin-right:3px;
                background:url(/i/arm/clip.svg) no-repeat center;
                background-size:cover;
                vertical-align:middle;
            }
            .progress_bar_and_file_ct_line .lui_pseudo:hover span {
                border-bottom:1px dashed rgba(74, 74, 74, 0.7);
            }
            .progress_bar_and_file_ct_line #help_message_file_ {
                visibility:visible !important;
                height:auto;
            }
            .progress_bar_and_file_ct_line #help_message_file___uploader_preview,
            .progress_bar_and_file_ct_line > .progress_bar_ct,
            .progress_bar_and_file_ct_line .br5 {
                display:none;
            }
        </style>
        <script type="text/javascript">
            <?php
            $css = ob_get_clean();
            ob_start();
            echo $ftm_open;
            ?>
            var liteUploader_updateVal_<?php echo $id;?> = function(){

                <?php echo $emulate_script;?>

                var val = [];
                $('#<?php echo $id;?>__uploader_preview').find('.uploader_preview__item').each(function(k, v){
                    val.push($(v).data('val'));
                });
                $('#<?php echo $id;?>').val(val.join(';')).change();
            };
            var liteUploader_editName = function(btn){
                btn = $(btn);
                var item = btn.parent();
                var oldVal = item.data('val').split(':');
                var newVal = prompt('Введите название', oldVal.length === 2 ? oldVal[1] : '');
                if(newVal !== null){
                    oldVal[1] = newVal.replace(':', '');
                    item.data('val', oldVal.join(':'));
                    liteUploader_updateVal_<?php echo $id;?>();
                }
            };
            $(document).ready(function() {
                $(function() {
                    if(decodeURI(document.location).indexOf('/arm/') != -1){
                        $( "#<?php echo $id;?>__uploader_preview" ).sortable();
                        $( "#<?php echo $id;?>__uploader_preview" ).disableSelection();
                    }
                });
                $("#<?php echo $id;?>__uploader_preview").on( "sortstop", function( event, ui ) {
                    liteUploader_updateVal_<?php echo $id;?>();

                    clearTimeout(ftm.onDragTimer);
                    ftm.onDrag = true;
                    ftm.onDragTimer = setTimeout(function(){
                        ftm.onDrag = false;
                    }, 100);
                });
                var liteUploader_overlay = null;
                $('#<?php echo $id;?>__uploader').liteUploader({
                    singleFileUploads: true,
                    script: (typeof sf_prefix !== 'undefined' ? sf_prefix : '') + '<?php echo $script;?>',
                    rules: {
                        allowedFileTypes: '<?php echo $allowedFileTypes;?>',
                        maxSize: <?php echo $size;?>
                    }
                }).on('lu:errors', function (e, errors) {
                    var isErrors = false;
                    var errors_a = [];
                    $.each(errors, function (i, error) {
                        if (errors.errors.length > 0) {
                            isErrors = true;
                            $.each(errors.errors, function (i, errorInfo) {
                                if(errorInfo.type == 'type')
                                    errors_a.push('Неверный формат файла');
                            });
                        }
                    });
                    if (isErrors) {
                        alert('Ошибка: ' + errors_a.join('\\n'));
                    }
                }).on('lu:before', function (e, files) {
                    $('.progress_bar_and_file_ct__<?php echo $id;?> .progress_bar_and_file_ct').addClass('progress_bar_and_file_ct_progress_bar');
                }).on('lu:progress', function (e, percentage) {
                    $('.progress_bar_ct_<?php echo $id;?>').show();
                    $('.progress_bar_and_file_ct__<?php echo $id;?> .progress_bar_ct_bar_info').html('Загрузка');
                    $('.progress_bar_and_file_ct__<?php echo $id;?> .progress_bar_ct_bar_w').css('width', percentage + '%');
                    $('.progress_bar_and_file_ct__<?php echo $id;?> .progress_bar_ct_bar_percent').html(percentage + '%');
                }).on('lu:success', function (e, response) {
                    $('.progress_bar_ct').hide();
                    var response = $.parseJSON(response);
                    if(response.state == 'success'){
                        if(response.preview64){
                            response.preview = '<img ' + (ftmOpen ? 'onclick="ftm.init(\'item\', this);"' : '') + ' style="border:1px solid #E5E5E5;" src="data:image/jpeg;base64,' + response.preview64 + '" />';
                        }
                        if(response.filename){
                            var editNameBtn = '';
                            <?php
                            if($this->getOption('with_text')){
                            ?>
                            editNameBtn = '<?php echo $name_edit_btn;?>';
                            <?php
                            }
                            ?>
                            if(response.filename.search(/\.(jpg|png|jpeg)$/) != -1){
                                if(response.preview){
                                    <?php
                                    if ($this->getOption('jcrop')) {?>
                                    jCrop.init(response.filename, <?php echo $jcrop_param_str;?>, '<?php echo $jcrop_key;?>');
                                    <?php
                                    }
                                    ?>
                                    var div = '<div class="uploader_preview__item" data-val="' + response.filename + (editNameBtn != '' ? ':' + response.name : '') + '"><span title="Удалить файл" class="uploader_preview__item_close" onclick="$(this).parent().remove();liteUploader_updateVal_<?php echo $id;?>(event);"></span>' + editNameBtn + response.preview.replace('<img', '<img ' + (ftmOpen ? 'onclick="ftm.init(\'item\', this);"' : '')) + '</div>';
                                }
                            }else{
                                var div = '<div class="uploader_preview__item" data-val="' + response.filename + (editNameBtn != '' ? ':' + response.name : '') + '"><span title="Удалить файл" class="uploader_preview__item_close" onclick="$(this).parent().remove();liteUploader_updateVal_<?php echo $id;?>(event);"></span>' + editNameBtn + '<a href="/u/f/' + response.filename + '" download="" target="_blank" class="document_file_icon"></a></div>';
                            }
                            $('#<?php echo $id;?>__uploader_preview').<?php echo $jMethod;?>(div);
                        }
                        liteUploader_updateVal_<?php echo $id;?>();
                        <?php
                        if ($this->getOption('insert_title')) {
                        ?>
                        $('#<?php echo $id;?>__uploader').closest('form, fieldset').find('input').each(function(){
                            if($(this).prop('name').indexOf('[title]') != -1 && $(this).val() == ''){
                                $(this).val(response.name);
                                return false;
                            }
                        });
                        <?php
                        }
                        ?>
                        $('.progress_bar_and_file_ct__<?php echo $id;?> .progress_bar_and_file_ct').removeClass('progress_bar_and_file_ct_progress_bar');
                    }
                    else {
                        alert('Ошибка: ' + response.errorTxt);
                    }
                });
                $('#<?php echo $id;?>__uploader').change(function () {
                    $(this).data('liteUploader').startUpload();
                });
                <?php echo $add_js;?>
            });
        </script>
        <?php
        $js = ob_get_clean();
        return $html . $css . $js;
    }
}
