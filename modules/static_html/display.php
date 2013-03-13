<?php

$_module_instance_id = $r_value;

$mysql->query("	SELECT d.data
			FROM instance i, module m, static_html_instance s, static_html_data d
			WHERE (	(i.id = ".$_module_instance_id.") AND
					(s.id = i.settings_id) AND
					(d.id = s.data_id) )");

echo($mysql->error());

$data = $mysql->fetch_array()["data"];

header("Content-type: text/html");
echo($data);

?>