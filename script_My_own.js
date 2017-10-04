$(document).ready(()=>{
	$(".form-wrapper").css({
		"background-color": "#F8F8F8"
	});
	// $(".sign-up-form").addClass("text-center");
	$(".sign-up-form").wrap("<div class='container col-md-12'></div>");
	$(".header").css({
		"background-color":"#2A88AD",
		"color":"#FFF",
		"border": "1px solid white",
		"border-top-left-radius": "10px",
		"border-top-right-radius": "10px"
	})
	// $(".privacy").wrap("<div></div>");
	$("input").addClass("col-md-12 col-xs-12");
	$(".error").hide();
	$("span").css({
		"border":"1px solid black",
		"width":"40px",
		"border-radius": "50%",
		"background-color": "#2A88AD",
		"color": "#FFF",
		"float":"left",
		"font-size": "25px"
	})
	
})