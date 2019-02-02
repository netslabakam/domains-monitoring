<ul class="sf_admin_actions sf_admin_actions__pseudo">
    [?php
    <?php foreach (array('new', 'edit') as $action): ?>
        <?php echo ($action == 'edit' ? 'else' : '');?>if($sf_user->hasCredential('<?php echo $this->getModuleName() . '_' . ($action == 'edit' ? 'update' : 'create');?>') && <?php echo 'edit' == $action ? '!' : '';?>$form->isNew())
        {
        ?]
        <?php foreach ($this->configuration->getValue($action.'.actions') as $name => $params): ?>
            <?php if ('_save' == $name): echo $this->addCredentialCondition('[?php echo $helper->linkToSave($form->getObject(), '.$this->asPhp($params).') ?]', $params) ?>
            <?php elseif ('_list' == $name): echo $this->addCredentialCondition('[?php echo $helper->linkToList('.$this->asPhp($params).') ?]', $params)?>
            <?php elseif ('_delete' == $name): echo $this->addCredentialCondition('[?php echo $helper->linkToDelete($form->getObject(), '.$this->asPhp($params).', array("_partial" => $_partial)) ?]', array_merge(array('credentials' => $this->getModuleName() . '_delete'), $params))?>
            <?php elseif ('_save_and_add' == $name): echo $this->addCredentialCondition('[?php echo $helper->linkToSaveAndAdd($form->getObject(), '.$this->asPhp($params).') ?]', $params)?>
            <?php elseif ('_save_and_list' == $name): echo $this->addCredentialCondition('[?php echo $helper->linkToSaveAndList($form->getObject(), '.$this->asPhp($params).') ?]', $params)?>
            <?php else: ?>
                <li class="sf_admin_action_<?php echo $params['class_suffix'] ?>">
                    [?php if (method_exists($helper, 'linkTo<?php echo $method = ucfirst(sfInflector::camelize($name)) ?>')): ?]
                    <?php echo $this->addCredentialCondition('[?php echo $helper->linkTo'.$method.'($form->getObject(), '.$this->asPhp($params).') ?]', $params) ?>

                    [?php else: ?]
                    <?php echo $this->addCredentialCondition($this->getLinkToAction($name, $params, true), $params) ?>

                    [?php endif; ?]
                </li>
            <?php endif; ?>
        <?php endforeach; ?>
        [?php
        }
    <?php endforeach; ?>
    ?]
    <li style="visibility:hidden;"><input type="submit"></li>
</ul>
[?php if (!$sf_request->isXmlHttpRequest()): ?]
<script type="text/javascript">
    $(document).ready(function(){
        $('.sf_admin_actions input').click(function(){
            $(this).closest('.lui_form_layer').find('form').append('<input type="hidden" name="' + $(this).attr("name") + '">');
            $(this).closest('.lui_form_layer').find('form').submit();
        });
    });
</script>
[?php endif; ?]