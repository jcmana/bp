<?php

$service_type = $r->service->attributes()["type"];

switch($service_type)
{
	case "display":
		include("modules/static_image/display.php");
		break;

	case "instantiate":
		$mysql->query("INSERT INTO static_image_data VALUES(null,\"\")");
		$mysql->query("SELECT id FROM static_image_data ORDER BY id DESC LIMIT 1");

		$data_id = $mysql->fetch_array()["id"];

		$mysql->query("INSERT INTO static_image_instance VALUES(null,".$data_id.")");
		$mysql->query("SELECT id FROM static_image_instance ORDER BY id DESC LIMIT 1");

		$m_instance_id = $mysql->fetch_array()["id"];

		$module_id = $r->service->attributes()["value"];
		$instance_name = $r->service->attributes()["name"];

		_instance_register($instance_name,$module_id,$m_instance_id);
		_instance_response($m_instance_id);

		break;
}


?>