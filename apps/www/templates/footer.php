<?php
if(sfConfig::get('sf_environment') === 'prod'){
    ?>
    <script src="https://yastatic.net/browser-updater/v1/script.js" charset="utf-8"></script><script>var yaBrowserUpdater = new ya.browserUpdater.init({"lang":"ru","browsers":{"yabrowser":"16.12","chrome":"62","ie":"10","opera":"49","safari":"9.1","fx":"57","iron":"35","flock":"Infinity","palemoon":"25","camino":"Infinity","maxthon":"4.5","seamonkey":"2.3"},"theme":"red"});</script>
    <?php
}
?>
</body>
</html>