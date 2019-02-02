<?php
// auto-generated by sfViewConfigHandler
// date: 2019/02/01 16:42:49
$response = $this->context->getResponse();

if ($this->actionName.$this->viewName == 'default')
{
  $templateName = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_template', $this->actionName);
  $this->setTemplate($templateName.$this->viewName.$this->getExtension());
}
else
{
  $templateName = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_template', $this->actionName);
  $this->setTemplate($templateName.$this->viewName.$this->getExtension());
}

if ($templateName.$this->viewName == 'default')
{
  if (null !== $layout = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_layout'))
  {
    $this->setDecoratorTemplate(false === $layout ? false : $layout.$this->getExtension());
  }
  else
  {
    $this->setDecoratorTemplate('' == 'layout' ? false : 'layout'.$this->getExtension());
  }
  $response->addHttpMeta('content-type', 'text/html', false);

  $response->addStylesheet('arm/g.css?deploy=1526014609', '', array ());
  $response->addStylesheet('arm/p.css?deploy=1526014609', '', array ());
  $response->addStylesheet('chosen.css', '', array ());
  $response->addStylesheet('arm/redactor.css', '', array ());
  $response->addStylesheet('arm/atma-struct.css?deploy=1526014609', '', array ());
  $response->addStylesheet('arm/atma-select.css?deploy=1526014609', '', array ());
  $response->addStylesheet('atma-charts.css', '', array ());
  $response->addStylesheet('fotorama.css', '', array ());
  $response->addJavascript('jquery-2.1.4.min.js', '', array ());
  $response->addJavascript('arm/redactor.js?deploy=1526014609', '', array ());
  $response->addJavascript('jquery.idle.min.js', '', array ());
  $response->addJavascript('arm/plugins.js', '', array ());
  $response->addJavascript('perfect-scrollbar.min.js', '', array ());
  $response->addJavascript('chosen.jquery.js', '', array ());
  $response->addJavascript('arm/jquery.hideseek.js', '', array ());
  $response->addJavascript('jquery.liteuploader.js', '', array ());
  $response->addJavascript('sexypicker.js', '', array ());
  $response->addJavascript('atmaUI.js', '', array ());
  $response->addJavascript('stickyeah.js', '', array ());
  $response->addJavascript('fotorama.js', '', array ());
  $response->addJavascript('arm/jquery-ui.js', '', array ());
  $response->addJavascript('arm/arm.js', '', array ());
  $response->addJavascript('arm/atma-struct.js?deploy=1526014609', '', array ());
  $response->addJavascript('arm/atma-select.js?deploy=1526014609', '', array ());
  $response->addJavascript('atma-charts.js', '', array ());
  $response->addJavascript('arm/init.d.js?deploy=1526014609', '', array ());
}
else
{
  if (null !== $layout = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_layout'))
  {
    $this->setDecoratorTemplate(false === $layout ? false : $layout.$this->getExtension());
  }
  else if (null === $this->getDecoratorTemplate() && !$this->context->getRequest()->isXmlHttpRequest())
  {
    $this->setDecoratorTemplate('' == 'layout' ? false : 'layout'.$this->getExtension());
  }
  $response->addHttpMeta('content-type', 'text/html', false);

  $response->addStylesheet('arm/g.css?deploy=1526014609', '', array ());
  $response->addStylesheet('arm/p.css?deploy=1526014609', '', array ());
  $response->addStylesheet('chosen.css', '', array ());
  $response->addStylesheet('arm/redactor.css', '', array ());
  $response->addStylesheet('arm/atma-struct.css?deploy=1526014609', '', array ());
  $response->addStylesheet('arm/atma-select.css?deploy=1526014609', '', array ());
  $response->addStylesheet('atma-charts.css', '', array ());
  $response->addStylesheet('fotorama.css', '', array ());
  $response->addJavascript('jquery-2.1.4.min.js', '', array ());
  $response->addJavascript('arm/redactor.js?deploy=1526014609', '', array ());
  $response->addJavascript('jquery.idle.min.js', '', array ());
  $response->addJavascript('arm/plugins.js', '', array ());
  $response->addJavascript('perfect-scrollbar.min.js', '', array ());
  $response->addJavascript('chosen.jquery.js', '', array ());
  $response->addJavascript('arm/jquery.hideseek.js', '', array ());
  $response->addJavascript('jquery.liteuploader.js', '', array ());
  $response->addJavascript('sexypicker.js', '', array ());
  $response->addJavascript('atmaUI.js', '', array ());
  $response->addJavascript('stickyeah.js', '', array ());
  $response->addJavascript('fotorama.js', '', array ());
  $response->addJavascript('arm/jquery-ui.js', '', array ());
  $response->addJavascript('arm/arm.js', '', array ());
  $response->addJavascript('arm/atma-struct.js?deploy=1526014609', '', array ());
  $response->addJavascript('arm/atma-select.js?deploy=1526014609', '', array ());
  $response->addJavascript('atma-charts.js', '', array ());
  $response->addJavascript('arm/init.d.js?deploy=1526014609', '', array ());
}

