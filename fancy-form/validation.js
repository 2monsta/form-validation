$(document).ready(()=>{

	$("#sign-up-form").submit((event)=>{
		event.preventDefault();
		var inputValue = $("input").val();
		console.log(inputValue);
	});
});