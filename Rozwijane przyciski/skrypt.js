//----------JQuery----------//
$(document).ready(function(){
	 for(i=0; i<$(".accordion").length; i++){
    $(".accordion").eq(i).click(function(){
      $(this).toggleClass("active");
      if($(this).next().css("display")==="none"){
        $(this).next().slideDown();
      } else {
        $(this).next().slideUp();
      }
    });
  }
	
});


/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
*/






