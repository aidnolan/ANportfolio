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
		console.log(viewerWidth);
		if(viewerWidth < 768){
			$(".profiles span").css("display", "none");
			$(".navbar-nav a").css("width", "100%");
			$("#formbox .profiles").css("text-align","center");
			$("#myForm").insertBefore($("#mySocial"));
			$("#mySocial").css("padding","20px 0 20px 0");
			$("#introbox #introPic").css("width", "45%");
			$(".certificates").css("width", "250px");
		
		} else {
			$(".profiles span").css("display", "inline");
			$("#formbox .profiles").css("text-align","left");
			$(".navbar-nav a").css("width", "100px");
			$("#mySocial").insertBefore($("#myForm"));
			$("#introbox #introPic").css("width", "30%");
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