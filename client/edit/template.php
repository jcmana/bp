<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">

<title>BP in Backbone.js</title>

<!-- Libraries -->
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="/lib/underscore.js"></script>
<script src="/lib/backbone.js"></script>
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

<!-- Aditional scripts -->
<script src="./client/edit/scripts/events.js"></script>
<script src="./client/edit/scripts/utils.js"></script>

<!-- Backbone.js application structure -->
<script src="./client/edit/scripts/model/field.js"></script>
<script src="./client/edit/scripts/model/module.js"></script>

<script src="./client/edit/scripts/collection/layout.js"></script>
<script src="./client/edit/scripts/collection/gallery.js"></script>

<script src="./client/edit/scripts/view/module.js"></script>
<script src="./client/edit/scripts/view/gallery.js"></script>
<script src="./client/edit/scripts/view/field.js"></script>
<script src="./client/edit/scripts/view/layout.js"></script>

<script src="./client/edit/scripts/app.js"></script>

<!--Styles-->
<link rel="stylesheet" type="text/css" href="client/edit/style.css">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css">

</head>
<body>


<div id="sidebar">
	<div id="menu">
		<a id="layout-save" href="">SAVE</a>
		<a id="layout-cancel" href="./">CANCEL</a>
	</div>

	<div id="gallery">
	</div>
</div>


<div id="canvas"></div>

</body>
</html>