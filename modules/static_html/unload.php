<?php

include("../../server/mysql.php");
include("./module.php");

$mysql = new mysql("localhost","bp_module","aurora");
$mysql->select_db("bp-modules");

$mysql->query("SELECT id FROM module WHERE (code = '".$_module_code."')");

$_module_id = $mysql->fetch_array()["id"];

$mysql->query("DELETE FROM instance WHERE (module_id = ".$_module_id.")");
$mysql->query("DELETE FROM module WHERE (id = ".$_module_id.")");

$mysql->query("DROP TABLE static_html_settings, static_html_data");

echo($mysql->error());

?>