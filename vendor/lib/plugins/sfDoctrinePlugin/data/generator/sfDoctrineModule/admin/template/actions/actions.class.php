[?php

require_once(dirname(__FILE__).'/../lib/Base<?php echo ucfirst($this->moduleName) ?>GeneratorConfiguration.class.php');
require_once(dirname(__FILE__).'/../lib/Base<?php echo ucfirst($this->moduleName) ?>GeneratorHelper.class.php');

/**
* <?php echo $this->getModuleName() ?> actions.
*
* @package    ##PROJECT_NAME##
* @subpackage <?php echo $this->getModuleName()."\n" ?>
* @author     ##AUTHOR_NAME##
* @version    SVN: $Id: actions.class.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
*/
abstract class <?php echo $this->getGeneratedModuleName() ?>Actions extends <?php echo $this->getActionsBaseClass()."\n" ?>
{
public function preExecute()
{
$this->configuration = new <?php echo $this->getModuleName() ?>GeneratorConfiguration();

$user = $this->getUser();
$access = $this->getActionName() == 'batch' || $user->hasCredential('<?php echo $this->getModuleName() ?>_' . $this->getActionName());
if(!$access){
$access = $this->getActionName() == 'select_list' && ($user->hasCredential('<?php echo $this->getModuleName() ?>_edit') || $user->hasCredential('<?php echo $this->getModuleName() ?>_create'));
}
if (!$access){
$this->forward(sfConfig::get('sf_secure_module'), sfConfig::get('sf_secure_action'));
}

$this->dispatcher->notify(new sfEvent($this, 'admin.pre_execute', array('configuration' => $this->configuration)));

$this->helper = new <?php echo $this->getModuleName() ?>GeneratorHelper();
}

<?php if ($this->configuration->hasStruct()): ?>
    public function buildStruct($request, $params = array())
    {
    $items = array();
    $menu = array();
    $props = array(
    'parentId' => $request->getParameter('pid', isset($params['pid']) ? $params['pid'] : 0),
    'url' => '/<?php echo sfConfig::get('sf_app') . '/' . $this->getModuleName() ?>',
    'urlFile' => '/<?php echo sfConfig::get('sf_app') . '/' . $this->getModuleName() ?>'
    );
    if (count($params) == 0) {
    foreach (array('pid', 'id') as $item) {
    if ($request->hasParameter($item)) {
    $params[$item] = $request->getParameter($item);
    }
    }
    }
    if (count($params) > 0) {
    $param = (isset($params['pid']) ? $params['pid'] : $params['id']);
    $type = (isset($params['pid']) ? 'folder' : 'file');
    $exp = explode('_', $param);
    if (count($exp) == 2) {
    $id = (is_numeric($exp[1]) ? $exp[1] : 'no');
    $table = $exp[0];
    if ($type == 'folder') {
    <?php
    $struct = $this->configuration->getStruct();
    foreach ($struct as $key => $struct_item):?>
        <?php echo ($key != 0 ? 'else' : '');?>if ($table == '<?php echo strtolower($struct_item['table']);?>') {
        <?php if(isset($struct[$key + 1])):?>
            $items = Doctrine_Query::create()
            ->select("id, s.title, '<?php echo (!isset($struct[$key + 2]) ? 'file' : 'folder');?>' AS type")
            ->from("<?php echo $struct[$key + 1]['table'];?> s")
            ->where("s.<?php echo strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct_item['table']));?>_id = ?", $id)
            /*->orderBy("s.title ASC")*/
            ->fetchArray();
            if(count($items) > 0){
            foreach($items as $item_key => $item){
            $items[$item_key]['id'] = '<?php echo strtolower($struct[$key + 1]['table']);?>_' . $item['id'];
            }
            }
            if($this->getUser()->hasCredential('<?php echo strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct[$key + 1]['table']));?>_new')){
            $menu[] = array(
            'title' => '<?php echo $struct[$key + 1]['menu_label'];?>',
            'type' => '<?php echo (!isset($struct[$key + 1]) ? 'file': 'folder');?>',
            'url' => '/<?php echo sfConfig::get('sf_app') . '/' . strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct[$key + 1]['table']));?>/new'
            );
            }
            $props['title'] = '<?php echo $struct[$key + 1]['label'];?>';
        <?php else:?>
            $file = Doctrine::getTable("<?php echo $struct_item['table'];?>")->find($id);
            if ($file) {
            echo $this->getPartial('struct_form', array('form' => new <?php echo $struct_item['table'];?>Form($file)));
            }
            return sfView::NONE;
        <?php endif;?>
        }
    <?php endforeach;?>
    } elseif ($type == 'file') {
    $form = null;
    <?php foreach ($struct as $key => $struct_item):?>
        <?php if(!isset($struct[$key + 1])):break;endif;?>
        <?php echo ($key != 0 ? 'else' : '');?>if ($table == '<?php echo strtolower($struct_item['table']);?>') {
        $file = Doctrine::getTable("<?php echo $struct_item['table'];?>")->find($id);
        if ($file) {
        echo $this->getPartial('struct_form', array('form' => new <?php echo $struct_item['table'];?>Form($file)));
        }
        }
    <?php endforeach;?>
    return sfView::NONE;
    }
    }
    } else {
    $items = Doctrine_Query::create()
    ->select("id, c.title, 'folder' AS type")
    ->from("<?php echo $struct[0]['table'];?> c")
    /*->orderBy("c.title ASC")*/
    ->fetchArray();
    if(count($items) > 0){
    foreach($items as $item_key => $item){
    $items[$item_key]['id'] = '<?php echo strtolower($struct[0]['table']);?>_' . $item['id'];
    }
    }
    if($this->getUser()->hasCredential('<?php echo strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct[0]['table']));?>_new')){
    $menu[] = array(
    'title' => '<?php echo $struct[0]['menu_label'];?>',
    'type' => 'folder',
    'url' => '/<?php echo sfConfig::get('sf_app') . '/' . strtolower(preg_replace('/([a-z]{1})([A-Z]{1})/', '$1_$2', $struct[0]['table']));?>/new'
    );
    }
    $props['title'] = '<?php echo $struct[0]['label'];?>';
    }
    return array(
    'items' => $items,
    'props' => $props,
    'menu' => $menu,
    );
    }
<?php endif;?>

<?php include dirname(__FILE__).'/../../parts/indexAction.php' ?>

<?php if ($this->configuration->hasFilterForm()): ?>
    <?php include dirname(__FILE__).'/../../parts/filterAction.php' ?>
<?php endif; ?>

<?php include dirname(__FILE__).'/../../parts/newAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/createAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/editAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/updateAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/deleteAction.php' ?>

<?php if ($this->configuration->getValue('list.batch_actions')): ?>
    <?php include dirname(__FILE__).'/../../parts/batchAction.php' ?>
<?php endif; ?>

<?php include dirname(__FILE__).'/../../parts/processFormAction.php' ?>

<?php if ($this->configuration->hasFilterForm()): ?>
    <?php include dirname(__FILE__).'/../../parts/filtersAction.php' ?>
<?php endif; ?>

<?php include dirname(__FILE__).'/../../parts/paginationAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/sortingAction.php' ?>

<?php include dirname(__FILE__).'/../../parts/selectListAction.php' ?>
}
