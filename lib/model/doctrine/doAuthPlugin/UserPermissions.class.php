<?php

/**
 * UserPermissions
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @package    sf
 * @subpackage model
 * @author     Atma
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
class UserPermissions extends PluginUserPermissions
{
    public static function build(sfWebRequest $request, $user, $allow_group_id = false, $from_group_id = false)
    {
        if($from_group_id){
            $permissions = Doctrine_Query::create()
                ->select("p.id")
                ->from("Permission p INDEXBY p.id")
                ->innerJoin("p.UserGroupPermissions u")
                ->where("u.user_group_id = ?", $from_group_id)
                ->fetchArray();
            $values = array_keys($permissions);
            $existing = array();
        }else{
            $values = $request->hasParameter('user_permissions') && is_array($request->getParameter('user_permissions')) ? $request->getParameter('user_permissions') : array();
            $existing = ProjectUtils::arrayKeysFilter($user->getUserPermissions(), 'id');
        }
        $unlink = array_diff($existing, $values);
        if (count($unlink) > 0) {
            $q = Doctrine_Query::create()
                ->delete("r.*")
                ->from("UserPermissions r")
                ->whereIn("r.permission_id", array_values($unlink))
                ->andWhere("r.user_id= ?", $user->getId())
                ->execute();
        }
        $link = array_diff($values, $existing);

        if($allow_group_id && is_numeric($allow_group_id)){
            $permissions = Doctrine_Query::create()
                ->select("p.id")
                ->from("Permission p INDEXBY p.id")
                ->innerJoin("p.UserGroupPermissions u")
                ->where("u.user_group_id = ?", $allow_group_id)
                ->fetchArray();
            $allow_permissions = array_keys($permissions);
        }
        if (count($link) > 0) {
            foreach ($link as $id) {
                if(isset($allow_permissions) && !in_array($id, $allow_permissions)){
                    continue;
                }
                $user_permissions = new UserPermissions();
                $user_permissions->setPermissionId($id);
                $user_permissions->setUserId($user->getId());
                $user_permissions->save();
            }
        }
    }
}
