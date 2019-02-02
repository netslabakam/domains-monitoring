<h1>Reg lists List</h1>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Address</th>
      <th>Created at</th>
      <th>Updated at</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($reg_lists as $reg_list): ?>
    <tr>
      <td><a href="<?php echo url_for('RegList/show?id='.$reg_list->getId()) ?>"><?php echo $reg_list->getId() ?></a></td>
      <td><?php echo $reg_list->getAddress() ?></td>
      <td><?php echo $reg_list->getCreatedAt() ?></td>
      <td><?php echo $reg_list->getUpdatedAt() ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>

  <a href="<?php echo url_for('RegList/new') ?>">New</a>
