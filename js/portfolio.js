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

	$("#expandProfile").on("click", ()=>{
		if($(".hiddenProfile").css("display") == "none"){
			
			$(".hiddenProfile").css("display","inline-block");
			$("#expandCollapse").text("less");
		}
		else{
			$(".hiddenProfile").css("display","none");
			$("#expandCollapse").text("more");
		}
		console.log("Huh");
		
	})

	// Instructions to browser re: size reduction in classes/IDs specified
	function widthView(){
		var viewerWidth = $(window).width();
		if(viewerWidth < 768){
			$(".profiles span").css("display", "none");
			$("#formbox .profiles").css("textAlign","center");
			$(".navbar-nav a").css("width", "100%");
			$("#myForm").insertBefore($("#mySocial"));
			$("#mySocial").css("padding","20px 0 20px 0");
			$("#coursesUndertaken").css("font-size", "16px");
			$("#courseDrop").css("display", "none");
			$("#coursebox").css("padding", "10px 20px");
			$(".carousel-capt").attr("id", "smallCapt");
			$("#introbox #introPic").css("width", "45%");
			$("#titlebox").css("background-attachment", "local");
			$("#projectbox").css("background-attachment", "local");
			$(".certificates").css("width", "250px");

		} else {
			$(".profiles span").css("display", "inline");
			$("#formbox .profiles").css("textAlign","left");
			$(".navbar-nav a").css("width", "100px");
			$("#mySocial").insertBefore($("#myForm"));
			$("#coursesUndertaken").css("font-size", "25px");
			$("#courseDrop").css("display", "none");
			$("#coursebox").css("padding", "30px 150px");
			$("#introbox #introPic").css("width", "30%");
			$("#titlebox").css("background-attachment", "fixed");
			$("#projectbox").css("background-attachment", "fixed");
			$(".certificates").css("width", "350px");
		}
	}
	$(window).resize(widthView);

	$('.nav a').on('click', function(){
		$('.navbar-toggle').click();
	});

	$("textarea").on("keyup", function(){
		wordReducer();
	});

})();