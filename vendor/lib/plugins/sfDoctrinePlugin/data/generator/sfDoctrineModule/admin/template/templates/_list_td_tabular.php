<?php foreach ($this->configuration->getValue('list.display') as $name => $field): ?>
    [?php


    if(!isset($_partial_filters) || !array_key_exists('<?php echo $name;?>_id', $_partial_filters->getRawValue())) {
    ?]
<?php echo $this->addCredentialCondition(sprintf(<<<EOF
<td class="sf_admin_%s sf_admin_list_td_%s">
  [?php echo %s ?]
</td>

EOF
, strtolower($field->getType()), $name, $this->renderField($field)), $field->getConfig()) ?>
    [?php
    }
    ?]
<?php endforeach; ?>
