<?php

/*
 * This file is part of the symfony package.
 * (c) 2004-2006 Fabien Potencier <fabien.potencier@symfony-project.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * PartialHelper.
 *
 * @package    symfony
 * @subpackage helper
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @version    SVN: $Id: PartialHelper.php 27755 2010-02-08 20:51:02Z Kris.Wallsmith $
 */

/**
 * Evaluates and echoes a component slot.
 * The component name is deduced from the definition of the view.yml
 * For a variable to be accessible to the component and its partial,
 * it has to be passed in the second argument.
 *
 * <b>Example:</b>
 * <code>
 *  include_component_slot('sidebar', array('myvar' => 12345));
 * </code>
 *
 * @param  string slot name
 * @param  array variables to be made accessible to the component
 *
 * @see    get_component_slot, include_partial, include_component
 */
function include_component_slot($name, $vars = array())
{
    echo get_component_slot($name, $vars);
}

/**
 * Evaluates and returns a component slot.
 * The syntax is similar to the one of include_component_slot.
 *
 * <b>Example:</b>
 * <code>
 *  echo get_component_slot('sidebar', array('myvar' => 12345));
 * </code>
 *
 * @param  string $name slot name
 * @param  array $vars variables to be made accessible to the component
 *
 * @return string result of the component execution
 * @see    get_component_slot, include_partial, include_component
 */
function get_component_slot($name, $vars = array())
{
    $viewInstance = sfContext::getInstance()->get('view_instance');

    if (!$viewInstance->hasComponentSlot($name)) {
        // cannot find component slot
        throw new sfConfigurationException(sprintf('The component slot "%s" is not set.', $name));
    }

    if ($componentSlot = $viewInstance->getComponentSlot($name)) {
        return get_component($componentSlot[0], $componentSlot[1], $vars);
    }
}

/**
 * Returns true if component slot exists.
 *
 * @param  string slot name
 * @return bool true if component slot exists, false otherwise
 */
function has_component_slot($name)
{
    $viewInstance = sfContext::getInstance()->get('view_instance');

    // check to see if one is defined
    if (!$viewInstance->hasComponentSlot($name)) {
        return false;
    }

    // check to see if component slot is empty (null)
    if ($viewInstance->getComponentSlot($name)) {
        return true;
    }

    return false;
}

/**
 * Evaluates and echoes a component.
 * For a variable to be accessible to the component and its partial,
 * it has to be passed in the third argument.
 *
 * <b>Example:</b>
 * <code>
 *  include_component('mymodule', 'mypartial', array('myvar' => 12345));
 * </code>
 *
 * @param  string $moduleName module name
 * @param  string $componentName component name
 * @param  array $vars variables to be made accessible to the component
 *
 * @see    get_component, include_partial, include_component_slot
 */
function include_component($moduleName, $componentName, $vars = array())
{
    echo get_component($moduleName, $componentName, $vars);
}

/**
 * Evaluates and returns a component.
 * The syntax is similar to the one of include_component.
 *
 * <b>Example:</b>
 * <code>
 *  echo get_component('mymodule', 'mypartial', array('myvar' => 12345));
 * </code>
 *
 * @param  string $moduleName module name
 * @param  string $componentName component name
 * @param  array $vars variables to be made accessible to the component
 *
 * @return string result of the component execution
 * @see    include_component
 */
function get_component($moduleName, $componentName, $vars = array())
{
    $context = sfContext::getInstance();
    $actionName = '_' . $componentName;

    $class = sfConfig::get('mod_' . strtolower($moduleName) . '_partial_view_class', 'sf') . 'PartialView';
    $view = new $class($context, $moduleName, $actionName, '');
    $view->setPartialVars(true === sfConfig::get('sf_escaping_strategy') ? sfOutputEscaper::unescape($vars) : $vars);

    if ($retval = $view->getCache()) {
        return $retval;
    }

    $allVars = _call_component($moduleName, $componentName, $vars);

    if (null !== $allVars) {
        // render
        $view->getAttributeHolder()->add($allVars);

        return $view->render();
    }
}

/**
 * Evaluates and echoes a partial.
 * The partial name is composed as follows: 'mymodule/mypartial'.
 * The partial file name is _mypartial.php and is looked for in modules/mymodule/templates/.
 * If the partial name doesn't include a module name,
 * then the partial file is searched for in the caller's template/ directory.
 * If the module name is 'global', then the partial file is looked for in myapp/templates/.
 * For a variable to be accessible to the partial, it has to be passed in the second argument.
 *
 * <b>Example:</b>
 * <code>
 *  include_partial('mypartial', array('myvar' => 12345));
 * </code>
 *
 * @param  string $templateName partial name
 * @param  array $vars variables to be made accessible to the partial
 *
 * @see    get_partial, include_component
 */
function include_partial($templateName, $vars = array())
{
    echo get_partial($templateName, $vars);
}

/**
 * Evaluates and returns a partial.
 * The syntax is similar to the one of include_partial
 *
 * <b>Example:</b>
 * <code>
 *  echo get_partial('mypartial', array('myvar' => 12345));
 * </code>
 *
 * @param  string $templateName partial name
 * @param  array $vars variables to be made accessible to the partial
 *
 * @return string result of the partial execution
 * @see    include_partial
 */
function get_partial($templateName, $vars = array())
{
    $context = sfContext::getInstance();

    // partial is in another module?
    if (false !== $sep = strpos($templateName, '/')) {
        $moduleName = substr($templateName, 0, $sep);
        $templateName = substr($templateName, $sep + 1);
    } else {
        $moduleName = $context->getActionStack()->getLastEntry()->getModuleName();
    }
    $actionName = '_' . $templateName;

    $class = sfConfig::get('mod_' . strtolower($moduleName) . '_partial_view_class', 'sf') . 'PartialView';
    $view = new $class($context, $moduleName, $actionName, '');
    $view->setPartialVars(true === sfConfig::get('sf_escaping_strategy') ? sfOutputEscaper::unescape($vars) : $vars);

    return $view->render();
}

/**
 * Begins the capturing of the slot.
 *
 * @param  string $name slot name
 * @param  string $value The slot content
 *
 * @see    end_slot
 */
function slot($name, $value = null)
{
    $context = sfContext::getInstance();
    $response = $context->getResponse();

    $slot_names = sfConfig::get('symfony.view.slot_names', array());
    if (in_array($name, $slot_names)) {
        throw new sfCacheException(sprintf('A slot named "%s" is already started.', $name));
    }

    if (sfConfig::get('sf_logging_enabled')) {
        $context->getEventDispatcher()->notify(new sfEvent(null, 'application.log', array(sprintf('Set slot "%s"', $name))));
    }

    if (null !== $value) {
        $response->setSlot($name, $value);

        return;
    }

    $slot_names[] = $name;

    $response->setSlot($name, '');
    sfConfig::set('symfony.view.slot_names', $slot_names);

    ob_start();
    ob_implicit_flush(0);
}

/**
 * Stops the content capture and save the content in the slot.
 *
 * @see    slot
 */
function end_slot()
{
    $content = ob_get_clean();

    $response = sfContext::getInstance()->getResponse();
    $slot_names = sfConfig::get('symfony.view.slot_names', array());
    if (!$slot_names) {
        throw new sfCacheException('No slot started.');
    }

    $name = array_pop($slot_names);

    $response->setSlot($name, $content);
    sfConfig::set('symfony.view.slot_names', $slot_names);
}

/**
 * Returns true if the slot exists.
 *
 * @param  string $name slot name
 *
 * @return bool true, if the slot exists
 * @see    get_slot, include_slot
 */
function has_slot($name)
{
    return array_key_exists($name, sfContext::getInstance()->getResponse()->getSlots());
}

/**
 * Evaluates and echoes a slot.
 *
 * <b>Example:</b>
 * <code>
 *  include_slot('navigation');
 * </code>
 *
 * @param  string $name slot name
 * @param  string $default default content to return if slot is unexistent
 *
 * @see    has_slot, get_slot
 */
function include_slot($name, $default = '')
{
    return ($v = get_slot($name, $default)) ? print $v : false;
}

/**
 * Evaluates and returns a slot.
 *
 * <b>Example:</b>
 * <code>
 *  echo get_slot('navigation');
 * </code>
 *
 * @param  string $name slot name
 * @param  string $default default content to return if slot is unexistent
 *
 * @return string content of the slot
 * @see    has_slot, include_slot
 */
function get_slot($name, $default = '')
{
    $context = sfContext::getInstance();
    $slots = $context->getResponse()->getSlots();

    if (sfConfig::get('sf_logging_enabled')) {
        $context->getEventDispatcher()->notify(new sfEvent(null, 'application.log', array(sprintf('Get slot "%s"', $name))));
    }

    return isset($slots[$name]) ? $slots[$name] : $default;
}

function _call_component($moduleName, $componentName, $vars)
{
    $context = sfContext::getInstance();

    $controller = $context->getController();

    if (!$controller->componentExists($moduleName, $componentName)) {
        // cannot find component
        throw new sfConfigurationException(sprintf('The component does not exist: "%s", "%s".', $moduleName, $componentName));
    }

    // create an instance of the action
    $componentInstance = $controller->getComponent($moduleName, $componentName);

    // load component's module config file
    require($context->getConfigCache()->checkConfig('modules/' . $moduleName . '/config/module.yml'));

    // pass unescaped vars to the component if escaping_strategy is set to true
    $componentInstance->getVarHolder()->add(true === sfConfig::get('sf_escaping_strategy') ? sfOutputEscaper::unescape($vars) : $vars);

    // dispatch component
    $componentToRun = 'execute' . ucfirst($componentName);
    if (!method_exists($componentInstance, $componentToRun)) {
        if (!method_exists($componentInstance, 'execute')) {
            // component not found
            throw new sfInitializationException(sprintf('sfComponent initialization failed for module "%s", component "%s".', $moduleName, $componentName));
        }

        $componentToRun = 'execute';
    }

    if (sfConfig::get('sf_logging_enabled')) {
        $context->getEventDispatcher()->notify(new sfEvent(null, 'application.log', array(sprintf('Call "%s->%s()' . '"', $moduleName, $componentToRun))));
    }

    // run component
    if (sfConfig::get('sf_debug') && sfConfig::get('sf_logging_enabled')) {
        $timer = sfTimerManager::getTimer(sprintf('Component "%s/%s"', $moduleName, $componentName));
    }

    $retval = $componentInstance->$componentToRun($context->getRequest());

    if (sfConfig::get('sf_debug') && sfConfig::get('sf_logging_enabled')) {
        $timer->addTime();
    }

    return sfView::NONE == $retval ? null : $componentInstance->getVarHolder()->getAll();
}

function _call_action($moduleName, $actionName, $vars, $request)
{
    $context = sfContext::getInstance();

    $controller = $context->getController();

    if (!$controller->actionExists($moduleName, $actionName)) {
        // cannot find component
        throw new sfConfigurationException(sprintf('The action does not exist: "%s", "%s".', $moduleName, $actionName));
    }

    // create an instance of the action
    $actionInstance = $controller->getAction($moduleName, $actionName);

    $actionInstance->setLayout(false);


    // load component's module config file
    require($context->getConfigCache()->checkConfig('modules/' . $moduleName . '/config/module.yml'));

    // pass unescaped vars to the component if escaping_strategy is set to true
    $actionInstance->getVarHolder()->add(true === sfConfig::get('sf_escaping_strategy') ? sfOutputEscaper::unescape($vars) : $vars);


    $componentPreToRun = 'preExecute';
    if (!method_exists($actionInstance, $componentPreToRun)) {
        if (!method_exists($actionInstance, 'execute')) {
            // component not found
            throw new sfInitializationException(sprintf('sfAction initialization failed for module "%s", component "%s".', $moduleName, $componentPreToRun));
        }
    }

    // dispatch component
    $componentToRun = 'execute' . ucfirst($actionName);
    if (!method_exists($actionInstance, $componentToRun)) {
        if (!method_exists($actionInstance, 'execute')) {
            // component not found
            throw new sfInitializationException(sprintf('sfAction initialization failed for module "%s", component "%s".', $moduleName, $actionName));
        }

        $componentToRun = 'execute';
    }

    if (sfConfig::get('sf_logging_enabled')) {
        $context->getEventDispatcher()->notify(new sfEvent(null, 'application.log', array(sprintf('Call "%s->%s()' . '"', $moduleName, $componentToRun))));
    }

    // run component
    if (sfConfig::get('sf_debug') && sfConfig::get('sf_logging_enabled')) {
        $timer = sfTimerManager::getTimer(sprintf('Action "%s/%s"', $moduleName, $actionName));
    }


    $retval = $actionInstance->$componentPreToRun();
    $retval = $actionInstance->$componentToRun($request);

    if (sfConfig::get('sf_debug') && sfConfig::get('sf_logging_enabled')) {
        $timer->addTime();
    }


    return sfView::NONE == $retval ? null : $actionInstance->getVarHolder()->getAll();
}


function get_action($moduleName, $actionName, $vars = array())
{
    $context = sfContext::getInstance();

    $vars['_partial_module'] = $context->getModuleName();

    $request = $context->getRequest();
    if ($request->hasParameter("_spath")) {


        $ex = explode("_spath=", $request->getUri());

        $router = $context->getRouting();
        $parsed = $router->parse(substr($ex[1], strlen($_SERVER['PATH_PREFIX'])));

        $request->setAttribute('sf_route', $parsed["_sf_route"]);

        $ps = (parse_url($ex[1]));
        parse_str($ps['query'], $getps);

        foreach ($parsed as $pk => $pv) {
            if (!is_object($pv)) {
                if ($pk == 'module') {
                    $moduleName = $pv;
                } elseif ($pk == 'action') {
                    $actionName = $pv;
                } else {
                    $request->setParameter($pk, $pv);
                }
            }
        }

        foreach ($getps as $pk => $pv) {
            $request->setParameter($pk, $pv);
        }
    }

    $vars['_partial'] = true;


    $allVars = _call_action($moduleName, $actionName, $vars, $request);

    if ($actionName == 'create') {
        $actionName = 'new';
    }
    if ($actionName == 'update') {
        $actionName = 'edit';
    }

    $class = sfConfig::get('mod_' . strtolower($moduleName) . '_partial_view_class', 'sf') . 'PartialView';
    $view = new $class($context, $moduleName, $actionName . 'Success', '');


    $view->setPartialVars(true === sfConfig::get('sf_escaping_strategy') ? sfOutputEscaper::unescape($vars) : $vars);


    if ($retval = $view->getCache()) {
        return $retval;
    }

    $view->setDirectory($context->getConfiguration()->getTemplateDir($moduleName, $actionName . 'Success.php'));

    if (null !== $allVars) {
        // render
        $view->getAttributeHolder()->add($allVars);

        return $view->render();
    }
}

function include_action($moduleName, $actionName, $vars = array())
{
    echo get_action($moduleName, $actionName, $vars);
}