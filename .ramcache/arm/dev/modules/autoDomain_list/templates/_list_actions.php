<td>
<ul class="lui__list_actions">
<?php if ($sf_user->hasCredential('domain_list_new')): ?>
<?php echo $helper->linkToNew(array(  'params' =>   array(  ),  'class_suffix' => 'new',  'label' => 'New',), array("_partial" => $_partial)) ?>
<?php endif; ?>

</ul>
</td>
