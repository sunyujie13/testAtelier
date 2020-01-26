// music
var bgmusic = document.getElementById('bgmusic');
bgmusic.addEventListener('canplay', function(){
	this.play();
}, false);
window.addEventListener('load', function(){
	window.addEventListener('touchstart', once, false);
}, false);
function once(){
	bgmusic.play();
	window.removeEventListener('touchstart', once, false);
}
// music


// date
//app var
var app = {};

(function($){
	"use strict";


/*************************
  Predefined Variables
*************************/

	var $window = $(window),
	$document = $(document);

	$( function() {
		$( "#datepickerDepart" ).datepicker();
		$( "#datepickerArrivee" ).datepicker();
	  } );

	  $( function() {
		$( "#speed" ).selectmenu();
	 
		$( "#files" ).selectmenu();
	 
		$( "#number" )
		  .selectmenu()
		  .selectmenu( "menuWidget" )
			.addClass( "overflow" );
	 
		$( "#salutation" ).selectmenu();
	  } );
	$document.ready(function () {
		// app.event();
	});
})(jQuery);
// date.








var app = {};

(function($){
	"use strict";

	var $window = $(window),
	$document = $(document);


	app.event = function () {
	}

	//Document ready functions
	$document.ready(function () {
		app.event();
	});
})(jQuery);