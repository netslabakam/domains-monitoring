<?php
class permissionComponents extends sfComponents
{
    public function executeMap(sfWebRequest $request)
    {
        $permissions_q = Doctrine_Query::create()
            ->select("p.*")
            ->from("Permission p")
            ->orderBy("p.description ASC");
        if(isset($this->allow_group_id) && $this->allow_group_id){
            $permissions_q
                ->innerJoin("p.UserGroupPermissions u")
                ->where("u.user_group_id = ?", $this->allow_group_id);
        }
        $this->permissions = $permissions_q->fetchArray();
        $this->user_group_permissions = $request->isMethod('post') && $request->hasParameter($this->form->getName() . '_permissions') ? $request->getParameter($this->form->getName() . '_permissions')->getRawValue() : array();
        $this->user_permissions = array();
        if(in_array($this->form->getName(), array('post', 'my_post', 'company_post'))){
            $user_group = $this->form->getObject()->getUserGroup();
            if(count($user_group) > 0){
                $permissions = Doctrine_Query::create()
                    ->select("p.id")
                    ->from("Permission p INDEXBY p.id")
                    ->innerJoin("p.UserGroupPermissions u")
                    ->where("u.user_group_id = ?", $user_group[0]['id'])
                    ->fetchArray();
                foreach ($permissions as $user_group_permission) {
                    $this->user_group_permissions[] = $user_group_permission['id'];
                }
            }
        }elseif($this->form->getName() == 'user_group') {
            foreach ($this->form->getObject()->getUserGroupPermissions() as $user_group_permission) {
                $this->user_group_permissions[] = $user_group_permission->getId();
            }
        }elseif($this->form->getName() == 'user'){
            $this->user_permissions = Doctrine_Query::create()
                ->select("*")
                ->from("UserPermissions INDEXBY permission_id")
                ->where("user_id = ?", $this->form->getObject()->getId())
                ->fetchArray();
            $this->user_permissions = array_keys($this->user_permissions);
            if (!$this->form->getObject()->isNew()) {
                $user_groupss = Doctrine_Query::create()
                    ->select("ugs.*")
                    ->from("UserGroupUsers ugs")
                    ->where("ugs.user_id = " . $this->form->getObject()->getId())
                    ->execute();
                foreach ($user_groupss as $user_groups) {
                    $user_group = Doctrine::getTable("UserGroup")->find($user_groups->getUserGroupId());
                    if ($user_group) {
                        foreach ($user_group->getUserGroupPermissions() as $user_group_permission) {
                            $this->user_group_permissions[] = $user_group_permission->getId();
                        }
                    }
                }
            }
        }
    }
}
