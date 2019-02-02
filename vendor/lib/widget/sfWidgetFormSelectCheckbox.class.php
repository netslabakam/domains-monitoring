<?php

/*
 * This file is part of the symfony package.
 * (c) Fabien Potencier <fabien.potencier@symfony-project.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * sfWidgetFormSelectCheckbox represents an array of checkboxes.
 *
 * @package    symfony
 * @subpackage widget
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @version    SVN: $Id: sfWidgetFormSelectCheckbox.class.php 27738 2010-02-08 15:07:33Z Kris.Wallsmith $
 */
class sfWidgetFormSelectCheckbox extends sfWidgetFormChoiceBase
{
    /**
     * Constructor.
     *
     * Available options:
     *
     *  * choices:         An array of possible choices (required)
     *  * label_separator: The separator to use between the input checkbox and the label
     *  * class:           The class to use for the main <ul> tag
     *  * separator:       The separator to use between each input checkbox
     *  * formatter:       A callable to call to format the checkbox choices
     *                     The formatter callable receives the widget and the array of inputs as arguments
     *  * template:        The template to use when grouping option in groups (%group% %options%)
     *
     * @param array $options An array of options
     * @param array $attributes An array of default HTML attributes
     *
     * @see sfWidgetFormChoiceBase
     */
    protected function configure($options = array(), $attributes = array())
    {
        parent::configure($options, $attributes);

        $this->addOption('class', 'checkbox_list');
        $this->addOption('label_separator', '');
        $this->addOption('separator', "\n");
        $this->addOption('formatter', array($this, 'formatter'));
        $this->addOption('template', '%group% %options%');
    }

    /**
     * @param  string $name The element name
     * @param  string $value The value selected in this widget
     * @param  array $attributes An array of HTML attributes to be merged with the default HTML attributes
     * @param  array $errors An array of errors for the field
     *
     * @return string An HTML tag string
     *
     * @see sfWidgetForm
     */
    protected $tree_all = array();
    protected $tree_levels = array();
    protected $name = '';

    protected function buildTree($choices, $level = false)
    {
        foreach ($choices as $key => $choice){
            $this->tree_levels[$this->generateId($this->name, self::escapeOnce($key))] = $choice['level'];
            if(!isset($this->tree_all[$level ? $level : $key])){
                $this->tree_all[$level ? $level : $key] = array();
            }
            $this->tree_all[$level ? $level : $key][$key] = $choice['value'];
            $this->buildTree($choice['children'], $level ? $level : $key);
        }
    }

    public function render($name, $value = null, $attributes = array(), $errors = array())
    {
        if ('[]' != substr($name, -2)) {
            $name .= '[]';
        }

        if (null === $value) {
            $value = array();
        }
        if (!is_array($value) && strstr($value, ';') !== false) {
            $value = explode(';', $value);
        }
        $choices = $this->getChoices();

        // with groups?
        $current = current($choices);
        if (count($choices) && is_array($current)) {
            $parts = array();
            if(isset($current['children'])){
                $this->setOption('class', $this->getOption('class') . ' ' . $this->getOption('class') . '_groups');
                $this->name = $name;
                $this->buildTree($choices);
                foreach ($this->tree_all as $key => $option){
                    $parts[] = strtr($this->getOption('template'), array('%group%' => '', '%options%' => $this->formatChoices($name, $value, $option, $attributes)));
                }
                return implode("\n", $parts);
            }else{
                foreach ($choices as $key => $option) {
                    $parts[] = strtr($this->getOption('template'), array('%group%' => $key, '%options%' => $this->formatChoices($name, $value, $option, $attributes)));
                }
                return implode("\n", $parts);
            }
        } else {
            return $this->formatChoices($name, $value, $choices, $attributes);
        }
    }

    protected function formatChoices($name, $value, $choices, $attributes)
    {
        $inputs = array();
        foreach ($choices as $key => $option) {
            $baseAttributes = array(
                'name' => $name,
                'type' => 'checkbox',
                'value' => self::escapeOnce($key),
                'id' => $id = $this->generateId($name, self::escapeOnce($key)),
            );
            if(isset($this->tree_levels[$id])){
                $baseAttributes['data-level'] = $this->tree_levels[$id];
                $baseAttributes['onchange'] = 'checkboxListGroups.change(this)';
            }
            if ((is_array($value) && in_array(strval($key), $value)) || strval($key) == strval($value)) {
                $baseAttributes['checked'] = 'checked';
            }

            $inputs[$id] = array(
                'input' => $this->renderTag('input', array_merge($baseAttributes, $attributes)),
                'label' => $this->renderContentTag('label', self::escapeOnce($option), array('for' => $id)),
            );
        }

        return call_user_func($this->getOption('formatter'), $this, $inputs);
    }

    public function formatter($widget, $inputs)
    {
        $rows = array();
        foreach ($inputs as $id => $input) {
            $attr = (isset($this->tree_levels[$id]) && $this->tree_levels[$id] > 0 ? array('style' => 'padding-left:' . ($this->tree_levels[$id] * 20) . 'px') : array());
            $rows[] = $this->renderContentTag('li', '<label>' . $input['input'] . strip_tags($input['label']) . '</label>', $attr);
        }
        return !$rows ? '' : $this->renderContentTag('ul', implode($this->getOption('separator'), $rows), array('class' => $this->getOption('class')));
    }
}
