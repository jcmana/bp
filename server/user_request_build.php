<?php

// We are gonna build client-side application here by previously saved page editing


// Reset our application variable
$app_code = "";


switch( $user_request_type )
{

	// displaying active layout
	case $_URT_DISPLAY :
		include("client/display/template.php");
		break;

	// editing active layout
	case $_URT_EDIT :
		include("client/edit/template.php");
		break;

	// application a module configuration
	case $_URT_CONFIG :

		break;

	// displaying active layout
	default :

		break;
}


?>