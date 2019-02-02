<?php
$expires = $domain_list->getSslexp();
if($expires){
    $date = substr($expires, 0,10);

    $date_now = date_create(date('Y-m-d'));
    $date_db = date_create($date);

    $date_diff = date_diff($date_now,$date_db);

    $days = $date_diff->days;
    echo $days;
}
