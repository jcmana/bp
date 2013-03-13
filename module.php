<?php

// Temporary script for loading/unloading/configuring MODULES
// TODO: Remove.

include("server/mysql.php");

$mysql = new mysql("localhost","bp_module","aurora");
$mysql->select_db("bp-modules");

if( isset($_GET["list"]) )
{
	$mysql->query("SELECT `code`,`name`,`desc` FROM `module`");

	while( $m = $mysql->fetch_array() )
	{
		echo("name: ".$m["name"]."<br>code: ".$m["code"]."<br>description: ".$m["desc"]."<br><br>");
	}

	echo($mysql->error());
}
else
if( isset($_GET["load"]) )
{
	include("modules/".$_GET["load"]."/load.php");
}
else
if( isset($_GET["unload"]) )
{
	include("modules/".$_GET["unload"]."/unload.php");
}
else
{
	echo("usage:<br>module.php?[load|unload]=[\"module_folder\"]");
}

$mysql->destroy();

?>