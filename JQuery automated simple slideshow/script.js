$(document).ready(function(){
    
    //$("#container_slide > div:gt(0)").css("width", "0");
    $("#container_slide > div:gt(0)").css("display", "none");

    setInterval(function() { 
        $('#container_slide > div:first')
        .fadeOut("slow").css("display", "none")
        .next()
        .fadeIn("slow").css("display", "block")
        .end()
        .appendTo('#container_slide');
      }, 3000);

});


/*
setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
*/