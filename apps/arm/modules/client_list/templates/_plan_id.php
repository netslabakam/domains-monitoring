<?php
if ($client_list->getHostingPlans()) {
    echo $client_list->getHostingPlans()->getName();
}