<?php
if (!function_exists('hex2bin')) {
    function hex2bin($data)
    {
        static $old;
        if ($old === null) {
            $old = version_compare(PHP_VERSION, '5.2', '<');
        }
        $isobj = false;
        if (is_scalar($data) || (($isobj = is_object($data)) && method_exists($data, '__toString'))) {
            if ($isobj && $old) {
                ob_start();
                echo $data;
                $data = ob_get_clean();
            } else {
                $data = (string)$data;
            }
        } else {
            trigger_error(__FUNCTION__ . '() expects parameter 1 to be string, ' . gettype($data) . ' given', E_USER_WARNING);
            return;
        }
        $len = strlen($data);
        if ($len % 2) {
            trigger_error(__FUNCTION__ . '(): Hexadecimal input string must have an even length', E_USER_WARNING);
            return false;
        }
        if (strspn($data, '0123456789abcdefABCDEF') != $len) {
            trigger_error(__FUNCTION__ . '(): Input string must be hexadecimal string', E_USER_WARNING);
            return false;
        }
        return pack('H*', $data);
    }
}
require_once __DIR__ . '/../vendor/lib/autoload/sfCoreAutoload.class.php';
sfCoreAutoload::register();

class ProjectConfiguration extends sfProjectConfiguration
{
    public function setup()
    {
        $this->enablePlugins('sfDoctrinePlugin');
        $this->enablePlugins('sfImageTransformPlugin');
        $this->enablePlugins('sfCaptchaGDPlugin');
        $this->enablePlugins('doAuthPlugin');
        $this->enablePlugins('sfRUtilsPlugin');
        $this->enablePlugins('sfSphinxPlugin');
        $this->enablePlugins('csSettingsPlugin');
    }
    public function configureDoctrine(Doctrine_Manager $manager)
    {
        if(class_exists('customListener')){
            $manager->setAttribute(Doctrine_Core::ATTR_THROW_EXCEPTIONS, false);
        }
    }
    public function configureDoctrineConnection(Doctrine_Connection $connection)
    {
        if(class_exists('customListener')){
            $connection->setEventListener(new customListener());
        }
    }
}

class ProjectUtils
{
    public static function getVersion()
    {
        $version_file = sfConfig::get('sf_data_dir') . '/version.txt';
        if (file_exists($version_file)) {
            $version_content = file_get_contents(sfConfig::get('sf_data_dir') . '/version.txt');
            $exp = explode("\n", $version_content);
            return $exp[0];
        }
        return '';
    }

    public static function uuidToHex($uuid)
    {
        return str_replace('-', '', $uuid);
    }

    public static function hexToUuid($hex)
    {
        $regex = '/^([\da-f]{8})([\da-f]{4})([\da-f]{4})([\da-f]{4})([\da-f]{12})$/';
        return preg_match($regex, $hex, $matches) ?
            "{$matches[1]}-{$matches[2]}-{$matches[3]}-{$matches[4]}-{$matches[5]}" :
            FALSE;
    }

    public static function hexToInteger($hex)
    {
        $bin = pack('h*', $hex);
        return unpack('L*', $bin);
    }

    public static function integerToHex($integers)
    {
        $args[0] = $integers;
        $args[1] = 'L*';
        @ksort($args);
        $bin = call_user_func_array('pack', $args);
        $results = unpack('h*', $bin);
        return $results[1];
    }

    public static function base64url_encode($data)
    {
        return exec("echo -n '" . $data . "' | openssl md5 -binary | openssl base64 | tr +/ -_ | tr -d =");
    }

    public static function nohup($file)
    {
        return exec('nohup ' . $file . ' > /dev/null 2>&1 &');
    }

    public static function nohup_task($task)
    {
        return ProjectUtils::nohup(sfConfig::get('sf_root_dir') . '/symfony ' . $task);
    }

    public static function get($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $r = curl_exec($ch);
        curl_close($ch);
        return $r;
    }

    public static function post($url, $data)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $r = curl_exec($ch);
        curl_close($ch);
        return $r;
    }

    public static function wsPub($channel, $data)
    {
        if(sfConfig::has('app_ws_pub'))
        {
            self::post(sfConfig::get('app_ws_pub') . '?channel=' . $channel, json_encode($data));
        }
    }

    public static function generateUuid()
    {
        mt_srand((double)microtime() * 10000);
        $charid = strtolower(md5(uniqid(rand(), true)));
        $hyphen = chr(45);
        $uuid = substr($charid, 0, 8) . $hyphen . substr($charid, 8, 4) . $hyphen . substr($charid, 12, 4) . $hyphen . substr($charid, 16, 4) . $hyphen . substr($charid, 20, 12);
        return $uuid;
    }

    public static function arrayKeysFilter($items = array(), $key = 'id')
    {
        $ret = array();
        foreach ($items as $item) {
            $ret[] = $item[$key];
        }
        return $ret;
    }

    public static function cubeRecreate()
    {
        exec('nohup ' . sfConfig::get('sf_root_dir') . '/symfony cube:recreate > /dev/null 2>&1 &');
    }
}