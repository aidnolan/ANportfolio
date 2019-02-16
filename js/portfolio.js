(function(){
	widthView();
	wordReducer();
	var date = new Date();
	$("#copyYear").html(date.getFullYear());

	// Word count tracker for message box
	function wordReducer(){
		var textLength = $("textarea").val().length;
		$("#wordCounter").html(500 - textLength);
	} 

	// Instructions to browser re: size reduction in classes/IDs specified
	function widthView(){
		var viewerWidth = $(window).width();
		if(viewerWidth < 768){
			$(".profiles span").css("display", "none");
			$("#formbox .profiles").css("textAlign","center");
			$(".navbar-nav a").css("width", "100%");
			$("#myForm").insertBefore($("#mySocial"));
			$("#mySocial").css("padding","20px 0 20px 0");
			$("#coursebox h1, #coursesUndertaken").css("display", "none");
			$("#courseDrop").css("display", "block");
			$("#coursebox").css("padding", "10px 20px");
			$(".carousel-capt").attr("id", "smallCapt");

		} else {
			$(".profiles span").css("display", "inline");
			$("#formbox .profiles").css("textAlign","left");
			$(".navbar-nav a").css("width", "100px");
			$("#mySocial").insertBefore($("#myForm"));
			$("#coursebox h1, #coursesUndertaken").css("display", "block");
			$("#courseDrop").css("display", "none");
			$("#coursebox").css("padding", "30px 150px");
		}
	}
	$(window).resize(widthView);
		
	// Functionality for Projects carousel and caption box re: visibility
	$(".carouselHeight img, .carousel-capt, ol.carousel-indicators").on("mouseenter", function(){
		$(".carousel-capt").css("display", "block");
	});
	
	$(".carouselHeight img").on("mouseleave", function(){
		$(".carousel-capt").css("display", "none");
	});

	$("#coursebox, #skillbox, .carousel-control").on("mouseenter", function(){
		$(".carousel-capt").css("display", "none");
	});

	$("#coverClickArea").on("click", function(){
		$("#projectcover").fadeOut("slow", function(){});
		$('.carousel').carousel(); 
	});

	$("textarea").on("keyup", function(){
		wordReducer();
	});

})();