<?php

include("./module.php");

$mysql->query("CREATE TABLE static_html_instance (
				id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
				data_id INTEGER NOT NULL)");

$mysql->query("CREATE TABLE static_html_data (
				id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
				data TEXT)");

$mysql->query("INSERT INTO module VALUES(
				'0',
				'".$_module_code."',
				'".$_module_name."',
				'".$_module_desc."',
				'static_html_data')");


echo($mysql->error());

?>