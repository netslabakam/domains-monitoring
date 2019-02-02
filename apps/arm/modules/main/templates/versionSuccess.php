<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html>
<head>
    <title><?php include_slot('title', sfConfig::get('app_arm_title')); ?></title>
    <link rel="shortcut icon" href="/i/favicon.ico" type="image/x-icon"/>
    <link rel="alternate stylesheet" type="text/css" href="resource://gre-resources/plaintext.css" title="Переносить длинные строки">
</head>
<body>
<pre>
<?php
echo file_get_contents(sfConfig::get('sf_data_dir') . '/version.txt');
?>
</pre>
</body>
</html>