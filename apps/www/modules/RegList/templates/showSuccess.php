<table>
  <tbody>
    <tr>
      <th>Id:</th>
      <td><?php echo $reg_list->getId() ?></td>
    </tr>
    <tr>
      <th>Address:</th>
      <td><?php echo $reg_list->getAddress() ?></td>
    </tr>
    <tr>
      <th>Created at:</th>
      <td><?php echo $reg_list->getCreatedAt() ?></td>
    </tr>
    <tr>
      <th>Updated at:</th>
      <td><?php echo $reg_list->getUpdatedAt() ?></td>
    </tr>
  </tbody>
</table>

<hr />

<a href="<?php echo url_for('RegList/edit?id='.$reg_list->getId()) ?>">Edit</a>
&nbsp;
<a href="<?php echo url_for('RegList/index') ?>">List</a>
