$(document).ready(function(){
	$("#myModal").css({"display": "none"});
	$(".modal-content").click(function(){
		$("#myModal").css({"display": "block"});
		var modal = document.getElementById("img01");
		modal.src = this.src;
	});
	
	$("span").click(function(){
		$("#myModal").css({"display": "none"});
	});
});