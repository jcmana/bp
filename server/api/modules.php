<?php

function _instance_register($name,$module_id,$m_instance_id)
{
	$_db_mysql = new mysql("localhost","bp_module","aurora");
	$_db_mysql->select_db("modules");

	$_db_mysql->query("INSERT INTO `instance` VALUES(null,\"".$name."\",".$module_id.",".$m_instance_id.")");
}

function _instance_response($instance_id)
{
	header("Content-type: text/xml");
	echo("<?xml version=\"1.0\"?><response><data type=\"module\" action=\"instantiate\" value=\"".$instance_id."\"</data></response>");
}

?>