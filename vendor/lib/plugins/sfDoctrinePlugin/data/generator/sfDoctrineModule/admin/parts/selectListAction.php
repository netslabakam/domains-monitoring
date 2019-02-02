  public function executeSelect_list(sfWebRequest $request)
  {
      $page_count = 50;
      $items = array();
      $page = $request->getParameter('page', 1);
      if(!is_numeric($page) || $page < 1){
          $page = 1;
      }
      $table = $request->getParameter('t');
      $q = $request->getParameter('q');
      if($q){
          $q = trim(strip_tags($q));
          $q = preg_replace('/[^А-Яа-яA-Za-z0-9_\- ]/u', '', $q);
          if($q != ''){
              $q = preg_replace('/[ ]*[ ]/u', ' ', $q);
              $exp = explode(' ', $q);
              if(count($exp) > 0){
                  $q_fields = ($table == 'Company' ? array("title") : array("username", "iname", "oname", "fname"));
                  $q_arr = array();
                  foreach ($exp as $value){
                      $q_arr[] = implode(" LIKE '%" . $value . "%' OR ", $q_fields) . " LIKE '%" . $value . "%'";
                  }
                  if(count($q_arr) > 1){
                      $q = "(" . implode(") AND (", $q_arr) . ")";
                  }else{
                      $q = $q_arr[0];
                  }
              }
          }
      }
      if($table){
          $vid = $request->getParameter('vid');
          if($table == 'table_name'){
              $items_q = Doctrine_Query::create()
                  ->select("id, title")
                  ->from("table_name")
                  ->offset($page == 1 ? 0 : (($page - 1) * $page_count))
                  ->limit($page_count)
                  ->orderBy("title ASC");
              if($q){
                $items_q->where($q);
              }elseif($vid){
                $items_q->where("id <> ?", $vid);
              }
              $arr = $items_q->fetchArray();
              if(count($arr) > 0){
                  foreach ($arr as $value){
                    $items[] = array('title' => $value['title'], 'value' => $value['id']);
                  }
              }
          }elseif($table == 'table_name2'){

          }
      }
      echo json_encode($items);
      return sfView::NONE;
  }

