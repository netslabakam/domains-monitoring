<?php
//$hosts = Doctrine::getTable("DomainList")->findAll();
$myips_dirty = Doctrine::getTable('ServerList')->findAll();

ServerList::getList();

$myips = array();
foreach ($myips_dirty as $item) {
    $myips[$item['ip_address']] = $item['title'];
}
//echo $domain_list->getServer();
if (array_key_exists($domain_list->getServer(), $myips)){
    echo '<p style="color: green">'.'Наш  </br>' . $domain_list->getServer();
}elseif($domain_list->getServer() == null)
{
    echo ' ';
}elseif (!array_key_exists($domain_list->getServer(), $myips)){
    echo '<p style="color: #bdbdbd">'.'Не наш</br>' . $domain_list->getServer();
};
