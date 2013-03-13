var _popup_window_nohide = false;


function popup_window_show(size,position,content)
{
	if( size == "" || size == null )
	{
		size.width = "40%";
		size.height = "40%";
	}

	if( position == "" || position == null )
	{
		position.top = null;
		position.left = null;
	}

	$("body").append("<div id=\"_popup_window_overlay\"><div id=\"_popup_window_content\"></div></div>");
	$("#_popup_window_overlay").css({
		backgroundColor:"black",
		opacity:"0.4",
		position:"absolute",
		width:"100%",
		height:"100%",
		top:"0px",
		left:"0px",
		zIndex:"550"
	});
	$("#_popup_window_content").css({
		backgroundColor:"white",
		opacity:"1.0",
		border:"1px solid black",
		position:"absolute",
		top:position.top,
		left:position.left,
		width:size.width,
		height:size.height,
		zIndex:"551"
	});
	$("#_popup_window_content").html(content);
	$("#_popup_window_overlay").click(popup_window_hide);
	$("#_popup_window_content").click(function(){ _popup_window_nohide = true; });
}

function popup_window_hide()
{
	if( _popup_window_nohide )
	{
		_popup_window_nohide = false;
		return;
	}

	$("#_popup_window_content").remove();
	$("#_popup_window_overlay").remove();
}