/**************************
	Casa do Cinema
	http://www.[insert_address].com.br
***************************/

$(function(){
	
	// Finds movieName SWF on page
	// TODO: change to jQuery
	var thisMovie = function thisMovie(movieName) {
	    if (navigator.appName.indexOf("Microsoft") != -1) {
	        return window[movieName];
	    }
	    else {
	        return document[movieName];
	    }
	}
	
	// Tells timeline.swf to stop scrolling
	var callExternalStop = function () {
	    thisMovie("timeline").stopTimeline();
	}
	
	// Tells timeline.swf to start scrolling
	var callExternalPlay = function () {
	    thisMovie("timeline").playTimeline();
	}
	
	// Calls callExternalStop when removing mouse from flash div#timeline_contaliner container
	$("#timeline_container").mouseout(function(){
		callExternalStop();
	});
	
	// Calls callExternalPlay when hovering mouse on flash div#timeline_contaliner container
	$("#timeline_container").mouseover(function(){
		callExternalPlay();
	});
	
	$("a.tooltip").mouseover(function(){
		$(this).addClass("over");
	});
	$("a.tooltip").mouseout(function(){
		$(this).removeClass("over");
	});
});