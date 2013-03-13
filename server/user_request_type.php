<?php


// The type of user request is determined by GET variable

// User request types
$_URT_UNKNOWN = "_user_request_type=unknown";
$_URT_DISPLAY = "_user_request_type=display";
$_URT_EDIT = "_user_request_type=edit";
$_URT_CONFIG = "_user_request_type=config";

// User wanna display currently active web page

// TODO: If there is no active web page set, offer to create one


$user_request_type = $_URT_UNKNOWN;

if( isset($_GET) )
{
	if( count($_GET) == 0 )
	{
		$user_request_type = $_URT_DISPLAY;
	}
	else if( isset($_GET["edit"]) )
	{
		$user_request_type = $_URT_EDIT;
	}
	else if( isset($_GET["config"]) )
	{
		$user_request_type = $_URT_CONFIG;
	}
}
else
{
	$user_request_type = $_URT_DISPLAY;
}




// Now we gonna.. what?

?>