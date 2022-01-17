$(document).ready(function(){
	var navPos = $("nav").offset().top;
    $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
        if(scrollTop > navPos){
        $("nav").addClass("responsive");
    } else {
        $("nav").removeClass("responsive");
    }
});
    
   
    
});
