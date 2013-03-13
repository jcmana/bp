<?php

// Module informations
include("modules/static_image/module.php");

// Database structure

// Table: static_image_instance : Store data required for each instance of module.
$mysql->query("CREATE TABLE static_image_instance (
				id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
				data_id INTEGER NOT NULL)");

// Table: static_image_data: Store data of each instance of module.
$mysql->query("CREATE TABLE static_image_data (
				id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
				url VARCHAR(255))");

// TODO: This data insert is supposed to be server sided, not module sided. Move it.
// Initial data(registration of module)
$mysql->query("INSERT INTO module VALUES(
				'0',
				'".$_module_code."',
				'".$_module_name."',
				'".$_module_desc."',
				'static_image_data')");


echo($mysql->error());