<?php

$_module_instance_id = $r_value;

$mysql->query("	SELECT d.url
			FROM instance i, module m, static_image_instance s, static_image_data d
			WHERE (	(i.id = ".$_module_instance_id.") AND
					(s.id = i.settings_id) AND
					(d.id = s.data_id) )");

echo($mysql->error());

$data = $mysql->fetch_array()["url"];

echo("<img src=\"".$data."\" width=\"100%\">");


?>