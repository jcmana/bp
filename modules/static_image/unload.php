<?php

include("modules/static_image/module.php");

$mysql->query("SELECT id FROM module WHERE (code = '".$_module_code."')");

$_module_id = $mysql->fetch_array()["id"];

$mysql->query("DELETE FROM instance WHERE (module_id = ".$_module_id.")");
$mysql->query("DELETE FROM module WHERE (id = ".$_module_id.")");

$mysql->query("DROP TABLE static_image_instance, static_image_data");

echo($mysql->error());

?>