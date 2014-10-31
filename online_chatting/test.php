<html>
<?php
      $_msg = $_POST['Msg'];
      $con = mysql_connect("localhost","yangli","yangli");
      if (!$con) {
        die('Could not connect: ' . mysql_error());
      }
      mysql_select_db("test_message", $con);
      mysql_query("CREATE TABLE if not exists Message ( Time DATETIME, Urs VARCHAR(50), Msg TEXT)");

      if($_msg!=""){
        $_usr = $_POST['Urs'];
        echo "INSERT INTO Message (Time, Urs, Msg) VALUES ('". date('Y-m-d H:i:s')."', '".$_usr."', '".addslashes($_msg)."')";
        mysql_query("INSERT INTO Message (Time, Urs, Msg) VALUES ('". date( 'Y-m-d H:i:s')."', '".$_usr."', '".addslashes($_msg)."')");
      }
      $result = mysql_query("SELECT * FROM Message ORDER BY TIME ASC");
      $list = "<ul>";
      while($row=mysql_fetch_array($result)) {
        $list = $list."<li>".$row[0]."<br/>".$row[1].": ".$row[2]."</li>";
      }
      $list = $list."</ul>";
      echo $list;
      mysql_close($con);
?>
</html>