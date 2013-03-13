<?php

session_start();


// user is just trying to login
if( isset($_GET["logout"]) )
{
	unset($_SESSION["login"]);

	header("Location: ./");
}

// if user is not logged in
if( !isset($_SESSION["login"]) )
{

	if( isset($_POST["login"]["submit"]) )
	{
		// TODO: login process

		// overiding
		$_SESSION["login"] =
		[
			"name" => $_POST["login"]["name"],
			"authorized" => TRUE
		];

		// redirect to main page
		header("Location: ./");
	}
	else if( isset($_GET["login"]) )
	{
		include("client/login.php");
	}
	else
	{
		header("Location: ?login");
	}
}


// if user is still not logged in in the end of this script, he is not authorized to use this page
if( !isset($_SESSION["login"]["authorized"]) || $_SESSION["login"]["authorized"] != TRUE )
{
	die("Unauthorized access.");
}

?>