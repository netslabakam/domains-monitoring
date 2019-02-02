<?php
if ($domain_list->getLastCheck()){
    echo date('d-m-Y',strtotime($domain_list->getLastCheck()));
}