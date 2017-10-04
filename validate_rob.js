// this is jquery our script tag is at the top

$(document).ready(()=>{
	// the submit handler is unique to forms!!!!!
	$(".sign-up-form").submit((event)=>{
		//broswer by default is going to submit this form but there's no where to submit at? and it will send it to the action attirubte
		// if there is no action, it will reload.
		// event.preventDefault will prevent against any object from doing what it normally does
		event.preventDefault(); /* if's single page, you must cut the data off  */
		console.log("user submitted the form");
		// the full name needs to be at least 2 character 
		var userName = $(".fullName").val();



		// target all the input fields
		$(".form-wrapper input").each(function(){
			var userInput = $(this).val();
			// get the class of the thing we are on ie. password, address, phone
			// and if it's empty, then go grab the thing with that class that matches it + "-error";
			var thisClass = $(this).attr("class");
			var errorClass = `.${thisClass}-error`;
			if(userInput == ""){
				//if we don't give .html an arg, it will get the args but if you give it someting, it will change the value;
				$(errorClass).html("Field must not be empty.")
				$(errorClass).show();
			}else{
				$(errorClass).html("")
				$(errorClass).hide();
			}
		});
		var password = $(".password").val();
		var password2 = $(".password2").val();
		if(password !== password2){
			$(".password-error").html("your password do not match.");
			$(".password-error").show();
		};

		var numberFound = false;
		for(let i = 0; i<password.length; i++){
			if(isNAN(Number(password[i]))){
				// /this is not a number
				// leave numberFound alone
			}else{
				// this is a number, we tried to conver it and it didnt' return true to isNAN
				// so t must be a number, flip the bool
				numberFound = true;
				break;
			}
		}
		if(!numberFound){
			$(".password-error").html("your password must contain at least an error.");
		}
		// if(userName.length < 2){
		// 	console.log("user didnt enter their real name unless it's T");
		// 	$(".full-name-error").show();
		// }else{
		// 	$(".full-name-error").hide();
		// }
		if(!$(".privacy").is(":checked")){
			alert("You must check the user agreement box!")
		}
	});
});