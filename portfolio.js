(function(){
	
	$(".carouselHeight img, .carousel-caption, ol.carousel-indicators").on("mouseenter", function(){
		// $(".carouselHeight img").css("filter","blur(2px)");
		$(".carousel-caption").css("display", "block");
	});
	$(".carouselHeight img").on("mouseleave", function(){
		// $(".carouselHeight img").css("filter","blur(0px)");
		$(".carousel-caption").css("display", "none");
	});
	$("#projectcover").on("click", function(){
		$("#projectcover").fadeOut("slow", function(){});
		$('.carousel').carousel(); 
	});

})();