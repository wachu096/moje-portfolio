$(".nestedContent").css("display", "none");


$("#menuAllegroStyle li").mouseenter(function(){
    let currentHoveredElement = $(this).index();
    let nestedElementIndex = $(".nestedContent");

    $(nestedElementIndex[currentHoveredElement]).css("display", "block");
    $(this).addClass("active");
});

$("#menuAllegroStyle li").mouseleave(function(){
    $(".nestedContent").css("display", "none");
    $(this).removeClass("active");
});