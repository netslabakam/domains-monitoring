<?php
if ($image) {
    $image_arr = explode(';', $image);
    if(count($image_arr) > 0){
        foreach ($image_arr as $key => $image_item){
            echo ($line_length ? ($key % $line_length == 0 && $key != 0 ? '<br>' : '') : '') . '<img width="100%"' . ($type == 'fotorama' ? 'data-ad_id="' . $id . '" class="ftm_used_image ftm_used_image_' . $id . '" onclick="ftm.init(\'list\', this);event.stopPropagation();return false;"' : '') . ' src="/u/i/' . (isset($equal) ? $image_item : Page::replaceImageSize($image_item, 'S')) . ($sf_request->isXmlHttpRequest() ? '?u=' . rand(1, 10000) : '') . '">';
        }
    }
}
?>