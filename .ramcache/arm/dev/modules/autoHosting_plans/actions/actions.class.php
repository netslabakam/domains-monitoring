<?php

require_once(dirname(__FILE__).'/../lib/BaseHosting_plansGeneratorConfiguration.class.php');
require_once(dirname(__FILE__).'/../lib/BaseHosting_plansGeneratorHelper.class.php');

/**
* hosting_plans actions.
*
* @package    ##PROJECT_NAME##
* @subpackage hosting_plans
* @author     ##AUTHOR_NAME##
* @version    SVN: $Id: actions.class.php 24171 2009-11-19 16:37:50Z Kris.Wallsmith $
*/
abstract class autoHosting_plansActions extends sfActions
{
public function preExecute()
{
$this->configuration = new hosting_plansGeneratorConfiguration();

$user = $this->getUser();
$access = $this->getActionName() == 'batch' || $user->hasCredential('hosting_plans_' . $this->getActionName());
if(!$access){
$access = $this->getActionName() == 'select_list' && ($user->hasCredential('hosting_plans_edit') || $user->hasCredential('hosting_plans_create'));
}
if (!$access){
$this->forward(sfConfig::get('sf_secure_module'), sfConfig::get('sf_secure_action'));
}

$this->dispatcher->notify(new sfEvent($this, 'admin.pre_execute', array('configuration' => $this->configuration)));

$this->helper = new hosting_plansGeneratorHelper();
}


  public function executeIndex(sfWebRequest $request)
  {
    // sorting
    if ($request->getParameter('sort') && $this->isValidSortColumn($request->getParameter('sort')))
    {
    $this->setSort(array($request->getParameter('sort'), $request->getParameter('sort_type')));
    }

    // pager
    if ($request->getParameter('page'))
    {
    $this->setPage($request->getParameter('page'));
    }
    else
    {
    $this->setPage(1);
    }

    //search
    if ($request->getParameter('q'))
    {
    $this->setSearch($request->getParameter('q'), ($request->hasParameter('checked') ? $request->getParameter('checked') : false));
    }
    else
    {
    $this->setSearch(false);
    }

    //checked
    if ($request->getParameter('checked'))
    {
    $this->setChecked($request->getParameter('checked'));
    }
    else
    {
    $this->setChecked(false);
    }
    
    $this->pager = $this->getPager($request);
    $this->sort = $this->getSort();








  }



public function executeNew(sfWebRequest $request)
{
    $this->form = $this->configuration->getForm();



    $this->setPartialFilter();

    $this->hosting_plans = $this->form->getObject();
    }

    public function executeCreate(sfWebRequest $request)
    {
        $this->form = $this->configuration->getForm();
        $this->hosting_plans = $this->form->getObject();
        $this->setPartialFilter();
        $this->processForm($request, $this->form);

        $this->setTemplate('new');
    }

    public function executeEdit(sfWebRequest $request)
    {
        $this->hosting_plans = $this->getRoute()->getObject();
        $user = $this->getUser();
        $this->form = $this->configuration->getForm($this->hosting_plans);
        $this->setPartialFilter();
    }

    public function executeUpdate(sfWebRequest $request)
    {
        $this->hosting_plans = $this->getRoute()->getObject();
        $this->form = $this->configuration->getForm($this->hosting_plans);

        $this->setPartialFilter();

        $user = $this->getUser();
        $this->processForm($request, $this->form);

        $this->setTemplate('edit');
    }

    public function executeDelete(sfWebRequest $request)
    {
        $this->dispatcher->notify(new sfEvent($this, 'admin.delete_object', array('object' => $this->getRoute()->getObject())));

        $user = $this->getUser();

        if ($this->getRoute()->getObject()->delete())
        {
            if(!$request->isXmlHttpRequest())
            {
                $this->getUser()->setFlash('notice', 'The item was deleted successfully.');
            }
        }
        if(!$request->isXmlHttpRequest())
        {
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('hosting_plans');
            $this->redirect($redirect_url);
        }
        else
        {
            return sfView::NONE;
        }
    }

        public function executeBatch(sfWebRequest $request)
    {

        $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('hosting_plans');

        if (!$ids = $request->getParameter('ids'))
        {
            $this->getUser()->setFlash('error', 'You must at least select one item.');
            $this->redirect($redirect_url);
        }

        if (!$action = $request->getParameter('batch_action'))
        {
            $this->getUser()->setFlash('error', 'You must select an action to execute on the selected items.');
            $this->redirect($redirect_url);
        }

        if (!method_exists($this, $method = 'execute'.ucfirst($action)))
        {
            throw new InvalidArgumentException(sprintf('You must create a "%s" method for action "%s"', $method, $action));
        }

        if (!$this->getUser()->hasCredential('hosting_plans_' . $action))
        {
            $this->forward(sfConfig::get('sf_secure_module'), sfConfig::get('sf_secure_action'));
        }

        $validator = new sfValidatorDoctrineChoice(array('multiple' => true, 'model' => 'HostingPlans'));
        try
        {
            $ids = $validator->clean($ids);
            $ret = $this->$method($request);
            if($ret === false)
            {
                return sfView::NONE;
            }
        }
        catch (sfValidatorError $e)
        {
            $this->getUser()->setFlash('error', 'A problem occurs when deleting the selected items as some items do not exist anymore.');
        }

        $this->redirect($redirect_url);
    }

    protected function executeBatchDelete(sfWebRequest $request)
    {
        $ids = $request->getParameter('ids');

        $records = Doctrine_Query::create()
            ->from('HostingPlans')
            ->whereIn('id', $ids)
            ->execute();

        foreach ($records as $record)
        {
            $record->delete();
        }

        $this->getUser()->setFlash('notice', 'The selected items have been deleted successfully.');
        $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('hosting_plans');

        $this->redirect($redirect_url);
    }

    protected function executeBatchMerge(sfWebRequest $request)
    {
        $ids = $request->getParameter('ids');

        $primary = Doctrine::getTable(HostingPlans)->find($request->getParameter('batch_primary_id'));

        $records = Doctrine_Query::create()
            ->from('HostingPlans')
            ->whereIn('id', $ids)
            ->execute();

        foreach ($records as $record)
        {
            if($primary->getPrimaryKey() == $record->getPrimaryKey())
            {
                continue;
            }
            foreach($record->getTable()->getRelations() as $relation_name => $relation)
            {
                if($relation['type'] == 1)
                {
                    $method = 'get' . $relation_name;
                    foreach($record->$method() as $child)
                    {
                        $child_method = 'set' . str_replace(' ', '', ucwords(str_replace('_', ' ', $relation['foreign'])));
                        $child->$child_method($primary->getPrimaryKey());
                        $child->save();
                    }
                }
            }
            $record->delete();
        }



        $this->getUser()->setFlash('notice', 'Выделенные объекты успешно объеденены.');
        $this->redirect($request->getReferer());
    }


protected function setPartialFilter() {
    if (isset($this->_partial_filters)) {
        foreach ($this->form->getWidgetSchema()->getPositions() as $field) {
            if (isset($this->_partial_filters[$field])) {
                $this->form->setWidget($field, new sfWidgetFormInputHidden());
                $ex = explode("=", $this->_partial_filters[$field]);
                $this->form->setDefault($field, trim($ex[1]));
            }
        }
    }
}

protected function processForm(sfWebRequest $request, sfForm $form)
{
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
        if ($form->isValid())
    {
        $notice = $form->getObject()->isNew() ? 'The item was created successfully.' : 'The item was updated successfully.';
        try
        {
            $hosting_plans = $form->save();
        }
        catch (Doctrine_Validator_Exception $e)
        {
            $errorStack = $form->getObject()->getErrorStack();
            $message = get_class($form->getObject()) . ' has ' . count($errorStack) . " field" . (count($errorStack) > 1 ?  's' : null) . " with validation errors: ";
            foreach ($errorStack as $field => $errors)
            {
                $message .= "$field (" . implode(", ", $errors) . "), ";
            }
            $message = trim($message, ', ');
            $this->getUser()->setFlash('error', $message);
            return sfView::SUCCESS;
        }
        $this->dispatcher->notify(new sfEvent($this, 'admin.save_object', array('object' => $hosting_plans)));
        if ($request->hasParameter('_save_and_add'))
        {
            $this->getUser()->setFlash('notice', $notice.' You can add another one below.');
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('hosting_plans_new');
            $this->redirect($redirect_url);
        }
        elseif ($request->hasParameter('_save_and_list'))
        {
            $this->getUser()->setFlash('notice', $notice);
            $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->generateUrl('hosting_plans');
            $this->redirect($redirect_url);
        }
        else
        {
            if(!$request->isXmlHttpRequest())
            {
                $this->getUser()->setFlash('notice', $notice);
                $redirect_url = (isset($this->_partial) ? $_SERVER['DOCUMENT_URI'] . '?_spath=' : '') . $this->getController()->genUrl(array('sf_route' => 'hosting_plans_edit', 'sf_subject' => $hosting_plans));


                $this->redirect($request->hasParameter('return') ? $request->getParameter('return') : $redirect_url);
            }
        }
    }
    else
    {
        $this->getUser()->setFlash('error', 'The item has not been saved due to some errors.', false);
        $this->getResponse()->addHttpMeta('Sf-Form-Error', '1', true);
    }
}


    protected function getPager(sfWebRequest $request)
    {
        $pager = $this->configuration->getPager('HostingPlans');
        $pager->setQuery($this->buildQuery());
        $pager->setPage($this->getPage());
        if($request->hasParameter('export'))
        {
            $pager->setMaxPerPage(100000);
        }
        $pager->init();
        return $pager;
    }

    protected function setPage($page)
    {
        $this->getUser()->setAttribute($this->getPartialPrefix() . 'hosting_plans.page', $page, 'admin_module');
    }

    protected function getPage()
    {
        return $this->getUser()->getAttribute($this->getPartialPrefix() . 'hosting_plans.page', 1, 'admin_module');
    }

    protected function buildQuery()
    {
        $tableMethod = $this->configuration->getTableMethod();
        $query = Doctrine::getTable('HostingPlans')->createQuery('r');
        if ($tableMethod)
        {
            $query = Doctrine::getTable('HostingPlans')->$tableMethod($query);
        }
        $this->addSortQuery($query);
        $event = $this->dispatcher->filter(new sfEvent($this, 'admin.build_query'), $query);
        $this->addSearchQuery($query);
        $this->addCheckedQuery($query);
        $this->addPartialQuery($query);
        $query = $event->getReturnValue();

        return $query;
    }

    protected function addSortQuery($query)
    {
        if (array(null, null) == ($sort = $this->getSort()))
        {
            return;
        }
        if (!in_array(strtolower($sort[1]), array('asc', 'desc')))
        {
            $sort[1] = 'asc';
        }
        $query->addOrderBy($sort[0] . ' ' . $sort[1]);
    }

    protected function getSort()
    {
        if (null !== $sort = $this->getUser()->getAttribute($this->getPartialPrefix() . 'hosting_plans.sort', null, 'admin_module'))
        {
            return $sort;
        }
        $this->setSort($this->configuration->getDefaultSort());
        return $this->getUser()->getAttribute($this->getPartialPrefix() . 'hosting_plans.sort', null, 'admin_module');
    }

    protected function setSort(array $sort)
    {
        if (null !== $sort[0] && null === $sort[1])
        {
            $sort[1] = 'asc';
        }
        $this->getUser()->setAttribute($this->getPartialPrefix() . 'hosting_plans.sort', $sort, 'admin_module');
    }

    protected function addSearchQuery($query)
    {
        if ($search = $this->getSearch())
        {
            $query->andWhere("CONCAT_WS(' ', " . $this->configuration->getSearchFields() . ") LIKE '%" . $search . "%'");
        }
    }

    protected function addTabQuery($query)
    {
        $current_tab = $this->tabs[$this->getTab()];
        if(isset($current_tab['where']))
        {
            $query->andWhere($current_tab['where']);
        }
        if(isset($current_tab['inner_join']))
        {
            $query->innerJoin($current_tab['inner_join']);
        }
    }

    protected function addCheckedQuery($query)
    {
        if ($checked = $this->getChecked())
        {
            $query->orWhereIn("id", explode(':', $checked));
        }
    }

    protected function addPartialQuery($query)
    {
        if (isset($this->_partial_query) && isset($this->_partial_query["where"]))
        {
            foreach ($this->_partial_query["where"] as $field => $value) {
                $query->andWhere($field . ($value != "" ? " = '" . $value . "'" : ""));
            }
        }
    }

    protected function getPartialPrefix()
    {
        $prefix = '';
        if (isset($this->_partial_module)) {
            $prefix = $this->_partial_module . '.';
        }
        return $prefix;
    }

    protected function setSearch($search)
    {
        $this->getUser()->setAttribute($this->getPartialPrefix() . 'hosting_plans.search', $search, 'admin_module');
    }

    protected function setChecked($checked)
    {
        $this->getUser()->setAttribute($this->getPartialPrefix() . 'hosting_plans.checked', $checked, 'admin_module');
    }

    protected function getSearch()
    {
        return $this->getUser()->getAttribute($this->getPartialPrefix() . 'hosting_plans.search', false, 'admin_module');
    }

    protected function getChecked()
    {
        return $this->getUser()->getAttribute($this->getPartialPrefix() . 'hosting_plans.checked', false, 'admin_module');
    }

    protected function isValidSortColumn($column)
    {
        return Doctrine::getTable('HostingPlans')->hasColumn($column);
    }


  public function executeSelect_list(sfWebRequest $request)
  {
      $page_count = 50;
      $items = array();
      $page = $request->getParameter('page', 1);
      if(!is_numeric($page) || $page < 1){
          $page = 1;
      }
      $table = $request->getParameter('t');
      $q = $request->getParameter('q');
      if($q){
          $q = trim(strip_tags($q));
          $q = preg_replace('/[^А-Яа-яA-Za-z0-9_\- ]/u', '', $q);
          if($q != ''){
              $q = preg_replace('/[ ]*[ ]/u', ' ', $q);
              $exp = explode(' ', $q);
              if(count($exp) > 0){
                  $q_fields = ($table == 'Company' ? array("title") : array("username", "iname", "oname", "fname"));
                  $q_arr = array();
                  foreach ($exp as $value){
                      $q_arr[] = implode(" LIKE '%" . $value . "%' OR ", $q_fields) . " LIKE '%" . $value . "%'";
                  }
                  if(count($q_arr) > 1){
                      $q = "(" . implode(") AND (", $q_arr) . ")";
                  }else{
                      $q = $q_arr[0];
                  }
              }
          }
      }
      if($table){
          $vid = $request->getParameter('vid');
          if($table == 'table_name'){
              $items_q = Doctrine_Query::create()
                  ->select("id, title")
                  ->from("table_name")
                  ->offset($page == 1 ? 0 : (($page - 1) * $page_count))
                  ->limit($page_count)
                  ->orderBy("title ASC");
              if($q){
                $items_q->where($q);
              }elseif($vid){
                $items_q->where("id <> ?", $vid);
              }
              $arr = $items_q->fetchArray();
              if(count($arr) > 0){
                  foreach ($arr as $value){
                    $items[] = array('title' => $value['title'], 'value' => $value['id']);
                  }
              }
          }elseif($table == 'table_name2'){

          }
      }
      echo json_encode($items);
      return sfView::NONE;
  }

}
