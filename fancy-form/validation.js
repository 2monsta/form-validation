$(document).ready(()=>{
	$(".sign-up-form").submit((event)=>{
		event.preventDefault();
		$("input").each(function(event){
			if($(this).val() == ""){
				$(this).addClass("fill-out");
			}
		});
		$("textarea").each(function(event){
			if($(this).val().length <5){
				console.log("you need more than 5 characters");
			}
		});
	});
});