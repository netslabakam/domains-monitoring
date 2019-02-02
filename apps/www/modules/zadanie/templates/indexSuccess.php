<h1>Zadanies List</h1>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Created at</th>
      <th>Updated at</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($zadanies as $zadanie): ?>
    <tr>
<!--      <td><a href="--><?php //echo url_for('show', $zadanie) ?><!--">--><?php //echo $zadanie->getId() ?><!--</a></td>-->
        <td><a href="<?php echo url_for('@check?id=' . $zadanie->getId()) ?>"><?php echo $zadanie->getId() ?></a></td>

        <td><a href="<?php echo url_for('@check?id=' . $zadanie->getId()) ?>"><?php echo $zadanie->getName() ?></a></td>
      <td><?php echo $zadanie->getEmail() ?></td>
      <td><?php echo $zadanie->getCreatedAt() ?></td>
      <td><?php echo $zadanie->getUpdatedAt() ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>

  <a href="<?php echo url_for('zadanie/new') ?>">New</a>
