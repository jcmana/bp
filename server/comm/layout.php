<?php

// Database connection
$mysql = new mysql("localhost","bp_app","aurora");
$mysql->select_db("bp-app");

switch($r_action)
{
	// Application is retrieving saved layout informations
	case "get" :

		$layout_id = $r_value;

		$mysql->query("SELECT * FROM layout_field");

		$layout_xml_export = "<?xml version=\"1.0\"?><response><data>";

		while( $field = $mysql->fetch_array() )
		{
			$layout_xml_export .= "<field id=\"".$field["id"]."\" pos_x=\"".$field["pos_x"]."\" pos_y=\"".$field["pos_y"]."\" size_x=\"".$field["size_x"]."\" size_y=\"".$field["size_y"]."\" instance_id=\"".$field["instance_id"]."\" layout_data=\"".$field["layout_data"]."\" />";
		}

		$layout_xml_export .= "</data></response>";

		header("Content-type: text/xml");
		echo($layout_xml_export);

		break;

	// Editing or creating new layout
	case "set" :

		// Drop previous layout data
		$mysql->query("DELETE FROM layout_field");

		$layout_id = $r_value;

		$layout_field_data = $r->field;

		$response = "";

		foreach($layout_field_data as $field)
		{
// 			echo("Field : ".$field->attributes()["id"]);

			$mysql->query("	INSERT INTO layout_field
						VALUES(".	$field->attributes()["id"].",".
								$field->attributes()["pos_x"].",".
								$field->attributes()["pos_y"].",".
								$field->attributes()["size_x"].",".
								$field->attributes()["size_y"].",0,\"\")");

			echo($mysql->error());
		}

		header("Content-type: text/xml");
		echo("<?xml version=\"1.0\"?><response><data><update succesful=\"1\"></update></data></response>");

		break;
}

?>