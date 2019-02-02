<?php
if (isset($_GET['_pi'])) {
    phpinfo();
    die();
}
require_once(dirname(__FILE__).'/../config/ProjectConfiguration.class.php');
$configuration = ProjectConfiguration::getApplicationConfiguration('arm', 'dev', true);
sfContext::createInstance($configuration)->dispatch();
