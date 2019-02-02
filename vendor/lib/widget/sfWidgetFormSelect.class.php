<?php

/*
 * This file is part of the symfony package.
 * (c) Fabien Potencier <fabien.potencier@symfony-project.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * sfWidgetFormSelect represents a select HTML tag.
 *
 * @package    symfony
 * @subpackage widget
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @version    SVN: $Id: sfWidgetFormSelect.class.php 23994 2009-11-15 22:55:24Z bschussek $
 */
class sfWidgetFormSelect extends sfWidgetFormChoiceBase
{
    /**
     * Constructor.
     *
     * Available options:
     *
     *  * choices:  An array of possible choices (required)
     *  * multiple: true if the select tag must allow multiple selections
     *
     * @param array $options An array of options
     * @param array $attributes An array of default HTML attributes
     *
     * @see sfWidgetFormChoiceBase
     */
    protected function configure($options = array(), $attributes = array())
    {
        parent::configure($options, $attributes);

        $this->addOption('multiple', false);
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
    public function render($name, $value = null, $attributes = array(), $errors = array())
    {
        if ($this->getOption('multiple')) {
            $attributes['is_multiple'] = 'multiple';

            if ('[]' != substr($name, -2)) {
                $name .= '[]';
            }
        }

        $choices = $this->getChoices();

        return $this->renderContentTag('select', "\n" . implode("\n", $this->getOptionsForSelect($value, $choices)) . "\n", array_merge(array('name' => $name), $attributes));
    }

    /**
     * Returns an array of option tags for the given choices
     *
     * @param  string $value The selected value
     * @param  array $choices An array of choices
     *
     * @return array  An array of option tags
     */

    protected $choices = array();
    protected $disabled = array();

    protected function getOptionsForSelectRec($choices)
    {
        foreach ($choices as $k => $choice) {
            $this->choices[$k] = $choice['value'];
            if ($choice['disabled']) {
                $this->disabled[] = $k;
            }
            if (is_array($choice['children']) && count($choice['children']) > 0) {
                $this->getOptionsForSelectRec($choice['children']);
            }
        }
    }

    protected function getOptionsForSelect($value, $choices)
    {
        $mainAttributes = $this->attributes;
        $this->attributes = array();
        if (!is_array($value) && strstr($value, ';') !== false) {
            $value = explode(';', $value);
        }
        if (!is_array($value)) {
            $value = array($value);
        }

        $value = array_map('strval', array_values($value));
        $value_set = array_flip($value);

        $options = array();
        $tree = false;

        foreach ($choices as $key => $option) {
            $tree = isset($option['children']) && is_array($option['children']);
            break;
        }
        if ($tree) {
            $this->getOptionsForSelectRec($choices);
            $choices = $this->choices;
        }

        foreach ($choices as $key => $option) {
            if (is_array($option)) {
                $options[] = $this->renderContentTag('optgroup', implode("\n", $this->getOptionsForSelect($value, $option)), array('label' => self::escapeOnce($key)));
            } else {
                $attributes = array('value' => self::escapeOnce($key));
                if (isset($value_set[strval($key)])) {
                    $attributes['selected'] = 'selected';
                }
                if (in_array($key, $this->disabled)) {
                    $attributes['disabled'] = 'disabled';
                }

                $options[] = $this->renderContentTag('option', self::escapeOnce($option), $attributes);
            }
        }


        $this->attributes = $mainAttributes;

        return $options;
    }
}
