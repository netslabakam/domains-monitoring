<?php

foreach($user_group->getUser() as $k => $user)
{
  if($k > 0)
  {
    echo ', ';
  }
  echo $user->getUsername();
}

?>