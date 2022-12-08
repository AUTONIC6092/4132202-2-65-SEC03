<?php
$host = "db";
$user = "root";
$pass = "1234";
$db = "db_test";
$port = 3306;
mysqli_connect($host,$user,$pass,$db,$port);
try {
    $link = mysqli_connect($host,$user,$pass,$db,$port);
    mysqli_query($link,"SET NANES utf8");
} catch (exception $e){
    echo $e . " :: " . mysqli_errno($link);
}
?>