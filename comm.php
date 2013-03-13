<?php

include("server/mysql.php");


// TODO: Request authentication and authorization.


// Types of requests that might come:
// - layout displaying, layout editing
// - modules config, modules content, modules instantiation
// - application configuration
// - ...

/*
$_POST["request"] = "<?xml version=\"1.0\"?>
<request>
	<data type=\"layout\" action=\"set\" value=\"\">
		<field id=\"1\" pos_x=\"100\" pos_y=\"100\" size_x=\"400\" size_y=\"90\"></field>
		<field id=\"2\" pos_x=\"500\" pos_y=\"200\" size_x=\"250\" size_y=\"150\"></field>
	</data>
</request>";
*/

// Parse request
if( !isset($_POST["request"]) )
	die("This file is for internal application service only.");

$request = new SimpleXMLElement($_POST["request"]);

$request_count = count($request->data);
$request_data = $request->data;

foreach($request_data as $r)
{
	$r_type = $r->attributes()["type"];
	$r_action = $r->attributes()["action"];
	$r_value = $r->attributes()["value"];

	$response = "";

	switch($r_type)
	{
		case "layout" :
			include("server/comm/layout.php");
			break;

		case "configuration" :
			include("server/comm/configuration.php");
			break;

		case "module" :
			include("server/comm/module.php");
			break;

		case "null" :
		default :
			// Null or unknown request
			break;
	}
}

?>