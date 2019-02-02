<?php

/**
 * RegList actions.
 *
 * @package    sf
 * @subpackage RegList
 * @author     Atma
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class RegListActions extends sfActions
{
  public function executeIndex(sfWebRequest $request)
  {
    $this->reg_lists = Doctrine::getTable('RegList')
      ->createQuery('a')
      ->execute();
  }

  public function executeShow(sfWebRequest $request)
  {
    $this->reg_list = Doctrine::getTable('RegList')->find(array($request->getParameter('id')));
    $this->forward404Unless($this->reg_list);
  }

  public function executeNew(sfWebRequest $request)
  {
    $this->form = new RegListForm();
  }

  public function executeCreate(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST));

    $this->form = new RegListForm();

    $this->processForm($request, $this->form);

    $this->setTemplate('new');
  }

  public function executeEdit(sfWebRequest $request)
  {
    $this->forward404Unless($reg_list = Doctrine::getTable('RegList')->find(array($request->getParameter('id'))), sprintf('Object reg_list does not exist (%s).', $request->getParameter('id')));
    $this->form = new RegListForm($reg_list);
  }

  public function executeUpdate(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST) || $request->isMethod(sfRequest::PUT));
    $this->forward404Unless($reg_list = Doctrine::getTable('RegList')->find(array($request->getParameter('id'))), sprintf('Object reg_list does not exist (%s).', $request->getParameter('id')));
    $this->form = new RegListForm($reg_list);

    $this->processForm($request, $this->form);

    $this->setTemplate('edit');
  }

  public function executeDelete(sfWebRequest $request)
  {
    $request->checkCSRFProtection();

    $this->forward404Unless($reg_list = Doctrine::getTable('RegList')->find(array($request->getParameter('id'))), sprintf('Object reg_list does not exist (%s).', $request->getParameter('id')));
    $reg_list->delete();

    $this->redirect('RegList/index');
  }

  protected function processForm(sfWebRequest $request, sfForm $form)
  {
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
    if ($form->isValid())
    {
      $reg_list = $form->save();

      $this->redirect('RegList/edit?id='.$reg_list->getId());
    }
  }
}
