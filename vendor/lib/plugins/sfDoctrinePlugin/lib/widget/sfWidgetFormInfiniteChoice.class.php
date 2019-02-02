<?php
class sfWidgetFormInfiniteChoice extends sfWidgetFormChoice
{
    /**
     * @see sfWidget
     */
    protected $value = null;

    public function __construct($options = array(), $attributes = array())
    {
        $options['choices'] = array();

        parent::__construct($options, $attributes);
    }

    /**
     * Constructor.
     *
     * Available options:
     *
     *  * model:        The model class (required)
     *  * add_empty:    Whether to add a first empty value or not (false by default)
     *                  If the option is not a Boolean, the value will be used as the text value
     *  * method:       The method to use to display object values (__toString by default)
     *  * key_method:   The method to use to display the object keys (getPrimaryKey by default)
     *  * order_by:     An array composed of two fields:
     *                    * The column to order by the results (must be in the PhpName format)
     *                    * asc or desc
     *  * query:        A query to use when retrieving objects
     *  * multiple:     true if the select tag must allow multiple selections
     *  * table_method: A method to return either a query, collection or single object
     *
     * @see sfWidgetFormSelect
     */
    protected function configure($options = array(), $attributes = array())
    {
        $this->addRequiredOption('model');
        $this->addOption('add_empty', false);
        $this->addOption('method', '__toString');
        $this->addOption('key_method', 'getPrimaryKey');
        $this->addOption('order_by', null);
        $this->addOption('query', null);
        $this->addOption('multiple', false);
        $this->addOption('table_method', null);
        $this->addOption('limit', 50);

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
        if (false !== $this->getOption('add_empty'))
        {
            $choices[''] = true === $this->getOption('add_empty') ? '—' : $this->translate($this->getOption('add_empty'));
        }

        if (null === $this->getOption('table_method'))
        {
            $query = null === $this->getOption('query') ? Doctrine_Core::getTable($this->getOption('model'))->createQuery() : $this->getOption('query');
            if ($order = $this->getOption('order_by'))
            {
                $query->addOrderBy($order[0] . ' ' . $order[1]);
            }
            if($this->value !== null){
                $query->andWhere("id <> ?", $this->value);
            }
            $query->limit($this->getOption('limit'));
            $objects = $query->execute();
        }
        else
        {
            $tableMethod = $this->getOption('table_method');
            $results = Doctrine_Core::getTable($this->getOption('model'))->$tableMethod();

            if ($results instanceof Doctrine_Query)
            {
                $objects = $results->execute();
            }
            else if ($results instanceof Doctrine_Collection)
            {
                $objects = $results;
            }
            else if ($results instanceof Doctrine_Record)
            {
                $objects = new Doctrine_Collection($this->getOption('model'));
                $objects[] = $results;
            }
            else
            {
                $objects = array();
            }
        }
        $method = $this->getOption('method');
        $keyMethod = $this->getOption('key_method');

        if($this->value !== null){
            $value_obj = Doctrine_Core::getTable($this->getOption('model'))->find($this->value);
            if($value_obj){
                $choices[$this->value] = $value_obj->$method();
            }
        }
        foreach ($objects as $object)
        {
            $choices[$object->$keyMethod()] = $object->$method();
        }
        return $choices;
    }
    public function getRenderer()
    {
        if ($this->getOption('renderer'))
        {
            return $this->getOption('renderer');
        }

        if (!$class = $this->getOption('renderer_class'))
        {
            $type = !$this->getOption('expanded') ? '' : ($this->getOption('multiple') ? 'checkbox' : 'radio');
            $class = sprintf('sfWidgetFormSelect%s', ucfirst($type));
        }
        return new $class(array_merge(array('choices' => new sfCallable(array($this, 'getChoices'))), $this->options['renderer_options']), $this->getAttributes());
    }
    public function render($name, $value = null, $attributes = array(), $errors = array())
    {
        $this->value = is_array($value) ? $value[0] : $value;
        $attributes['data-ajx-url'] .= (strpos($attributes['data-ajx-url'], '?') === false ? '?' : '&') . 't=' . $this->getOption('model') . ($this->value !== null ? '&vid=' . $this->value : '');
        if ($this->getOption('multiple'))
        {
            $attributes['multiple'] = 'multiple';

            if ('[]' != substr($name, -2))
            {
                $name .= '[]';
            }
        }

        if (!$this->getOption('renderer') && !$this->getOption('renderer_class') && $this->getOption('expanded'))
        {
            unset($attributes['multiple']);
        }
        return $this->getRenderer()->render($name, $value, $attributes, $errors);
    }
}
?>