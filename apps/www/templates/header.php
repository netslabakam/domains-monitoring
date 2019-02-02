<!DOCTYPE html>
<html>
<head>
    <?php
    include_http_metas();
    include_metas();
    ?>
    <link rel="shortcut icon" href="/i/favicon.png" type="image/png">
    <title><?php echo Seo::$page['title'] !== null ? Seo::$page['title'] : get_slot('title', sfConfig::get('app_www_title'));?></title>
    <?php
    include_stylesheets();
    include_javascripts();
    ?>
</head>
<body>