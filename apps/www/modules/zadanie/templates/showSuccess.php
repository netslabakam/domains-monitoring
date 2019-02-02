<?php

include '../../../lib/Whois.php';

$sld = 'youtube.com';

$domain = new Phois\Whois\Whois($sld);

$whois_answer = $domain->info();

echo $whois_answer;

if ($domain->isAvailable()) {
    echo "Domain is available\n";
} else {
    echo "Domain is registered\n";
}
?>


<!--<table>-->
<!--  <tbody>-->
<!--    <tr>-->
<!--      <th>Id:</th>-->
<!--      <td>--><?php //echo $zadanie->getId() ?><!--</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <th>Name:</th>-->
<!--      <td>--><?php //echo $zadanie->getName() ?><!--</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <th>Email:</th>-->
<!--      <td>--><?php //echo $zadanie->getEmail() ?><!--</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <th>Created at:</th>-->
<!--      <td>--><?php //echo $zadanie->getCreatedAt() ?><!--</td>-->
<!--    </tr>-->
<!--    <tr>-->
<!--      <th>Updated at:</th>-->
<!--      <td>--><?php //echo $zadanie->getUpdatedAt() ?><!--</td>-->
<!--    </tr>-->
<!--  </tbody>-->
<!--</table>-->
<!---->
<!--<hr />-->
<!---->
<!--<a href="--><?php //echo url_for('zadanie/edit?id='.$zadanie->getId()) ?><!--">Edit</a>-->
<!--&nbsp;-->
<!--<a href="--><?php //echo url_for('zadanie/index') ?><!--">List</a>-->
