//Adding sticky navigation
$(document).ready(function() {
	$(".js--about-section").waypoint(function(direction) {
		if(direction == "down") {
			$("nav").addClass("sticky-nav");
		} else {
			$("nav").removeClass("sticky-nav");
		}
	});
});