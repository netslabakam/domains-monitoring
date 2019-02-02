<?php use_stylesheet('bootstrap.css'); ?>
<div >
    <?php
    if ($domain_list->getClientList()){
        echo $domain_list->getClientList()->getEmail();
    }?>
</div>
