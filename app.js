// var app = {};

(function($){
	"use strict";
	var $window = $(window),
	$document = $(document);
	$( function() {
		$( "#datepickerDepart" ).datepicker();
		$( "#datepickerArrivee" ).datepicker();
		$( "#datepickerSoin" ).datepicker();
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

	// munu-image//
	$(function () {
		$("#carte-Brasserie").click(function () {
			$("#image-menu-two,#image-menu-three").hide();
			$("#image-menu-one").toggle(1000);
			$("#image-menu-one").animate({
			margin:"3% 15% 0% 15%",
			})
	  });
	});
	$(function () {
		$("#carte-degustation").click(function () {
			$("#image-menu-one,#image-menu-three").hide();
			$("#image-menu-two").toggle(1000);
			$("#image-menu-two").animate({
			margin:"3% 15% 0% 15%",
			})
	  });
	});
	$(function () {
		$("#carte-Restaurant").click(function () {
			$("#image-menu-one,#image-menu-two").hide();
			$("#image-menu-three").toggle(1000);
			$("#image-menu-three").animate({
			margin:"3% 15% 0% 15%",
			})
	  });
	});
	$(function () {
		$('#datetimepicker1').datetimepicker();
	});
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
})(jQuery);
