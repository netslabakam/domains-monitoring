<?php

/*
 * This file is part of the symfony package.
 * (c) Fabien Potencier <fabien.potencier@symfony-project.com>
 * (c) Jonathan H. Wage <jonwage@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * sfWidgetFormDoctrineChoice represents a choice widget for a model.
 *
 * @package    symfony
 * @subpackage doctrine
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @author     Jonathan H. Wage <jonwage@gmail.com>
 * @version    SVN: $Id: sfWidgetFormDoctrineChoice.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class sfWidgetFormDoctrineChoice extends sfWidgetFormChoice
{
    /**
     * @see sfWidget
     */
    public function __construct($options = array(), $attributes = array())
    {
        $options['choices'] = array();
        parent::__construct($options, $attributes);
    }

    protected $tree = array();
    protected $tree_all = array();

    protected function buildTree($parent_id = null, $level = 0, $disabled = false)
    {
        $chs = array();
        foreach ($this->tree_all as $k => $v) {
            $disabled_item = $disabled === true || $k == $this->getOption('disabled');
            if ($v['parent_id'] == $parent_id) {
                $chs[$k] = array(
                    'value' => str_repeat((!$this->getOption('expanded') ? '&nbsp;&nbsp;&nbsp;' : ' '), $level) . $v['value'],
                    'level' => $level,
                    'children' => $k != '' ? $this->buildTree($k, $level + 1, $disabled_item) : array(),
                    'disabled' => $disabled_item
                );
            }
        }
        return $chs;
    }

    protected function configure($options = array(), $attributes = array())
    {
        $this->addRequiredOption('model');
        $this->addOption('disabled', false);
        $this->addOption('add_empty', false);
        $this->addOption('method', '__toString');
        $this->addOption('key_method', 'getPrimaryKey');
        $this->addOption('order_by', null);
        $this->addOption('query', null);
        $this->addOption('multiple', false);
        $this->addOption('table_method', null);
        $this->addOption('expanded', false);
        $this->addOption('tree', false);

        parent::configure($options, $attributes);
    }

    /**
     * Returns the choices associated to the model.
     *
     * @return array An array of choices
     */
    public function getChoices()
    {
        $choices = array();
        if (false !== $this->getOption('add_empty')) {
            $choices[''] = true === $this->getOption('add_empty') ? '—' : $this->getOption('add_empty');
        }

        $tree = false;

        if (null === $this->getOption('table_method')) {
            $query = null === $this->getOption('query') ? Doctrine_Core::getTable($this->getOption('model'))->createQuery() : $this->getOption('query');
            if ($order = $this->getOption('order_by')) {
                $query->addOrderBy($order[0] . ' ' . $order[1]);
            }
            $objects = $query->execute();
        } else {
            $tableMethod = $this->getOption('table_method');
            $results = Doctrine_Core::getTable($this->getOption('model'))->$tableMethod();

            if ($results instanceof Doctrine_Query) {
                $objects = $results->execute();
            } else if ($results instanceof Doctrine_Collection) {
                $objects = $results;
            } else if ($results instanceof Doctrine_Record) {
                $objects = new Doctrine_Collection($this->getOption('model'));
                $objects[] = $results;
            } else {
                $objects = array();
            }
        }

        if ($model = $this->getOption('model')) {
            $object = new $model();
            $tree = isset($object['parent_id']) && $this->getOption('tree');
        }

        if ($tree && $this->getOption('add_empty') !== false) {
            $this->tree_all[''] = (true === $this->getOption('add_empty') ? array('value' => '—', 'parent_id' => null) : array('value' => $this->getOption('add_empty'), 'parent_id' => null));
        }

        $method = $this->getOption('method');
        $keyMethod = $this->getOption('key_method');
        foreach ($objects as $object) {
            $choices[$object->$keyMethod()] = $object->$method();
            if ($tree) {
                $this->tree_all[$object->$keyMethod()] = array('value' => $object->$method(), 'parent_id' => $object->getParentId());
            }
        }
        if (count($this->tree_all) > 0) {
            $choices = $this->buildTree(null, 0, $this->getOption('disabled'));
        }

        return $choices;
    }
}