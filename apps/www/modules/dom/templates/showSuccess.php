<table>
  <tbody>
    <tr>
      <th>Id:</th>
      <td><?php echo $domain_list->getId() ?></td>
    </tr>
    <tr>
      <th>Title:</th>
      <td><?php echo $domain_list->getTitle() ?></td>
    </tr>
    <tr>
      <th>Domain:</th>
      <td><?php echo $domain_list->getDomain() ?></td>
    </tr>
    <tr>
      <th>Reg:</th>
      <td><?php echo $domain_list->getRegId() ?></td>
    </tr>
  </tbody>
</table>

<hr />

<a href="<?php echo url_for('dom/edit?id='.$domain_list->getId()) ?>">Edit</a>
&nbsp;
<a href="<?php echo url_for('dom/index') ?>">List</a>
