<?php
if ($domain_list->getExpiresAt()){
    echo date('d-m-Y',strtotime($domain_list->getExpiresAt()));
}
