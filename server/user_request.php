<?php

// Now we are getting somewhere.
// User has sent us some request and we should send him back some answer.


// User must be always logged in(or trying demo?)
// include("user_login.php");

// First, we need to find out what user want
include("user_request_type.php");

// Now, how do we gonna answer to this request?
include("user_request_build.php");

// Tie the client-side application together and send it back
// include("user_request_answer.php");



// Huuuray! We are done here.


?>