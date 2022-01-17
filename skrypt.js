$(document).ready(function(){
// buttons in contact section
    for(i=0; i<$(".btn").length; i++){
       $(".btn").eq(i).click(function(){
        $(this).prev().slideToggle();
       if($(this).html() === "Schowaj"){
            $(this).html('Pokaż');
        } else {
            $(this).html('Schowaj');
        }
   }); 
    }
// bars - open and close nav after click       
    $(".icon").click(function(){
       if($("#nav-right").hasClass("responsive") === false){
           $("#nav-right").addClass("responsive");
       } else {
           $("#nav-right").removeClass("responsive");
       }
    });
// close button - &times;   
    $(".closeNav").click(function(){
        $("#nav-right").removeClass("responsive");
    });
    
// adding smooth scrolling to nav
    $("#nav-right").find("a").click(function(e){
  var target = $( $(this).attr('href') );
    if(target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 700);
    }
  });
// adding scrollspy to nav  
    var navHeight = $("nav").height();
    $(window).scroll(function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop = $(this).offset().top-navHeight;
      var elemBottom = elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id = $(this).attr('id');
        var navElem = $('#nav-right > a[href="#' + id+ '"]');
    navElem.addClass('clicked').siblings().removeClass( 'clicked' );
      }
    });
});

$(".divButton").click(function(){
    $("html, body").animate({scrollTop: '0'}, 500);   
});
    
    
});



/*
   $("#nav-right a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  }); 
*/