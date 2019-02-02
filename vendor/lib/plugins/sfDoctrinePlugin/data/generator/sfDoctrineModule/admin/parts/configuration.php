[?php

/**
 * <?php echo $this->getModuleName() ?> module configuration.
 *
 * @package    ##PROJECT_NAME##
 * @subpackage <?php echo $this->getModuleName()."\n" ?>
 * @author     ##AUTHOR_NAME##
 * @version    SVN: $Id: configuration.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
 */
abstract class Base<?php echo ucfirst($this->getModuleName()) ?>GeneratorConfiguration extends sfModelGeneratorConfiguration
{
<?php include dirname(__FILE__).'/actionsConfiguration.php' ?>

<?php include dirname(__FILE__).'/searchConfiguration.php' ?>

<?php include dirname(__FILE__).'/fieldsConfiguration.php' ?>

  /**
   * Gets the form class name.
   *
   * @return string The form class name
   */
  public function getFormClass()
  {
    return '<?php echo isset($this->config['form']['class']) ? $this->config['form']['class'] : $this->getModelClass().'Form' ?>';
<?php unset($this->config['form']['class']) ?>
  }

  public function hasFilterForm()
  {
    return <?php echo !isset($this->config['filter']['class']) || false !== $this->config['filter']['class'] ? 'true' : 'false' ?>;
  }

  /**
   * Gets the filter form class name
   *
   * @return string The filter form class name associated with this generator
   */
  public function getFilterFormClass()
  {
    return '<?php echo isset($this->config['filter']['class']) && !in_array($this->config['filter']['class'], array(null, true, false), true) ? $this->config['filter']['class'] : $this->getModelClass().'FormFilter' ?>';
<?php unset($this->config['filter']['class']) ?>
  }

<?php include dirname(__FILE__).'/paginationConfiguration.php' ?>

<?php include dirname(__FILE__).'/sortingConfiguration.php' ?>


  public function getTableMethod()
  {
    return '<?php echo isset($this->config['list']['table_method']) ? $this->config['list']['table_method'] : null ?>';
<?php unset($this->config['list']['table_method']) ?>
  }

  public function getTableCountMethod()
  {
    return '<?php echo isset($this->config['list']['table_count_method']) ? $this->config['list']['table_count_method'] : null ?>';
<?php unset($this->config['list']['table_count_method']) ?>
  }
  
  public function getListExport()
  {
    return <?php echo isset($this->config['list']['export']) && $this->config['list']['export'] ? $this->config['list']['export'] : 'false';?>;
<?php unset($this->config['list']['export']) ?>
  }
  
  public function hasTabs()
  {
    return <?php echo (isset($this->config['tabs']) && is_array($this->config['tabs']) && count($this->config['tabs']) > 0 ? 'true' : 'false') ?>;
  }
  public function getTabs()
  {
    <?php
    if(isset($this->config['tabs']) && is_array($this->config['tabs']) && count($this->config['tabs']) > 0)
    {
    ?>
    return <?php echo $this->asPhp($this->config['tabs']);?>;
    <?php
    }
    else
    {
    ?>
    return false;
    <?php
    }
    ?>
<?php unset($this->config['tabs']) ?>
  }
  public function hasStruct()
  {
    return <?php echo (isset($this->config['struct']) && is_array($this->config['struct']) && count($this->config['struct']) > 0) ?>;
  }
  public function getStruct()
  {
    <?php
    if(isset($this->config['struct']) && $this->config['struct'])
    {
    ?>
    return <?php echo $this->asPhp($this->config['struct']);?>;
    <?php
    }
    else
    {
    ?>
    return false;
    <?php
    }
    ?>
<?php unset($this->config['struct']) ?>
  }
}
