function handle_resize() {
	// TODO resize the canvas elements to make the GL look good.


}

function scroll_position(element) {
	var elm_top = $(element).offset().top;

	// Prevent the header from obscuring the content.
	return elm_top - $('#header').height();
}

function initWebGL($canvas) {
	var canvas = $($canvas)[0]; // Always remove the jQuery context
	// Taken from
	// https://developer.mozilla.org/en-US/docs/Web/WebGL/Getting_started_with_WebGL#Creating_a_WebGL.C2.A0context
	try {
		// Try to grab the standard context. If it fails, fallback to experimental.
		return canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	} catch(e) {}
	// Fall through on error.
	return false;
}

function fallbackRender($canvas) {
	$canvas = $($canvas);
	$canvas.addClass('no-webgl');
	$("#no-webgl").css('display', 'block');
}

function create_renderer_original($canvas) {
	var context = initWebGL($canvas);
	if(!context) {
		return fallbackRender(context);
	}
	// TODO render the stuff.



}





gl_executors = {
	'original-moving': create_renderer_original
}


$(window).ready(function() {
	handle_resize();
	$(window).on('resize', handle_resize);
	$("canvas").each(function(idx, elm) {
		fallbackRender(elm);
	});



});
