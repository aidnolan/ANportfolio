(function(){
	widthView();
	wordReducer();
	var date = new Date();
	$("#copyYear").html(date.getFullYear());


	function wordReducer(){
		var textLength = $("textarea").val().length;
		$("#wordCounter").html(500 - textLength);
	} 

	function widthView(){
		var viewerWidth = $(window).width();
		if(viewerWidth < 768){
			$(".profiles span").css("display", "none");
			$(".navbar-nav a").css("width", "100%");
			$("#myForm").insertBefore($("#mySocial"));
			$("#mySocial").css("padding","20px 0 20px 50px");
			$("#coursebox h1, #coursesUndertaken").css("display", "none");
			$("#courseDrop").css("display", "block");
		}
		else {
			$(".profiles span").css("display", "inline");
			$(".navbar-nav a").css("width", "100px");
			$("#mySocial").insertBefore($("#myForm"));
			$("#coursebox h1, #coursesUndertaken").css("display", "block");
			$("#courseDrop").css("display", "none");
		}
	}
	$(window).resize(widthView);
		

	$(".carouselHeight img, .carousel-capt, ol.carousel-indicators").on("mouseenter", function(){
		// $(".carouselHeight img").css("filter","blur(2px)");
		$(".carousel-capt").css("display", "block");
	});
	$(".carouselHeight img").on("mouseleave", function(){
		// $(".carouselHeight img").css("filter","blur(0px)");
		$(".carousel-capt").css("display", "none");
	});
	$("#coursebox, #skillbox, .carousel-control").on("mouseenter", function(){
		// $(".carouselHeight img").css("filter","blur(2px)");
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