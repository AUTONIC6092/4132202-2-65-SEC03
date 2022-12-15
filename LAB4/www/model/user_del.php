<?php

$id = $_GET['id'];

require "condb.php";

try {
    $sql = "DELETE FORM tb_user WHERE user_id = '$id' ";
    mysql_query($link,$sql);
    echo "Affected : " . mysqli_affected_rows($link);
} catch (Exception $e) {
    echo $e . " Error no : " . mysqli_errno($link);
}
?>