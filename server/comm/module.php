<?php

// API for modules
include("server/api/modules.php");

// Database connection
$mysql = new mysql("localhost","bp_module","aurora");
$mysql->select_db("bp-modules");

switch($r_action)
{
	case "set":

		switch($r_value)
		{
			case "instance":

				$m_instance_id = 0;

				// Get module name/folder
				$mysql->query("SELECT m.code FROM instance i, module m WHERE ( (i.id =".$r_value.") AND (m.id = i.module_id) )");
				$module_code = $mysql->fetch_array()["code"];

				$module_service = "modules/".$module_code."/service.php";

				break;

		}

		break;

	case "get":

		switch($r_value)
		{
			case "gallery":
				$response = "<?xml version=\"1.0\"?><response><data>";

				$mysql->query("SELECT * FROM module");
				while($m = $mysql->fetch_array())
				{
					$response .= "<module id=\"".$m["id"]."\" code=\"".$m["code"]."\" name=\"".$m["name"]."\" desc=\"".$m["desc"]."\"></module>";
				}
				$response .= "</data></response>";

				header("Content-type: text/xml");
				echo($response);

				break;
		}

		break;

	case "service":
		// Get module id
		if( $r->service->attributes()["type"] == "instantiate" )
		{
			$module_id = $r->service->attributes()["value"];
		}
		else
		{
			$mysql->query("SELECT `module_id` FROM `instance` WHERE ( id=".$r_value." )");
			$module_id = $mysql->fetch_array()["module_id"];
		}

		$mysql->query("SELECT `code` FROM `module` WHERE ( id=".$module_id." )");
		$module_code = $mysql->fetch_array()["code"];

		$module_service_path = "modules/".$module_code."/service.php";

		include($module_service_path);

		break;
}

$mysql->destroy();


?>