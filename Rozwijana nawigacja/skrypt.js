$(document).ready(function(){
	$(".btnOpen").click(function(){
        $(".sidenav").css("width", "250px");
    });
   
    $(".closebtn").click(function(){
        $(".sidenav").css("width", "0"); 
    });
});
