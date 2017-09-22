<?php
echo "<html><head><title>图片</title></head><body bgcolor=000000><center><font size=2 color=red>";
$page=$_GET['page'];
$max=1;
$handle = opendir('./'); 
  while (false !== ($file = readdir($handle))) { 
   list($filesname,$kzm)=explode(".",$file);
    if($kzm=="jpg") {
     if (!is_dir('./'.$file)) {
      $array[]=$file;
      $i++;
     }
    }
  }
  for ($j=$max*$page;$j<($max*$page+$max)&&$j<$i;++$j){
  echo "<img widht=800 height=600 src=\"$array[$j]\"><br>";
  }
  $Previous_page=$page-1;
  $next_page=$page+1;
  if ($Previous_page<0){
    echo "上页";
    echo "<a href=?page=$next_page>下页</a>";
  }
  else if ($page<=$i/$max){
     echo "<a href=?page=$Previous_page>上页</a>";
     echo "<a href=?page=$next_page>下页</a>";}
  else{
     echo " <a href=?page=$Previous_page>上页</a>";
     echo "下页";
  }
  echo "</center></body></html>";
?>