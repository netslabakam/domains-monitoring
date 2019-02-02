<h1>Domain lists List</h1>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Domain</th>
        <th>Reg</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($domain_lists as $domain_list): ?>
    <tr>
        <td><a href="<?php echo url_for('@check?id=' . $domain_list->getId()) ?>"><?php echo $domain_list->getId() ?></a></td>

        <td><a href="<?php echo url_for('@check?id=' . $domain_list->getId()) ?>"><?php echo $domain_list->getDomain() ?></a></td>
      <td><?php echo $domain_list->getDomain() ?></td>
      <td><?php echo $domain_list->getRegId() ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>

  <a href="<?php echo url_for('dom/new') ?>">New</a>
