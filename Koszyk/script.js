//Aby działały funkcje drag and drop należy pobrać plugin Jquery - jquery.ndd.js i dodać go w html w tagu script
$(document).ready(function(){
    
    $("#contentImages li").hover(function(){

        $(".videoKursy", this).fadeIn();

    },function(){

        $(".videoKursy", this).fadeOut();

    }).dragstart(function(event){
        event.dataTransfer.setData("text", $(this).attr("id"));
        $("#infoPrzeniesienie").fadeIn();

    }).dragend(function(event){

        $("#infoPrzeniesienie").fadeOut();
    });

    var koszykKolorDefault = $("#koszyk").css("background-color");

    $("#koszyk").dragover(function(event){

        event.preventDefault();
        $(this).css("background-color", "teal");

    }).dragleave(function(event){
        $(this).css("background-color", koszykKolorDefault);

    }).drop(function(event){

        $(this).css("background-color", koszykKolorDefault);
        event.preventDefault();
        var idKurs = event.dataTransfer.getData("text");

        var nazwa = $("#"+idKurs+" .nazwa").text();
        var cena = $("#"+idKurs+" .cena").text();

        var li = "<li class='produkt_w_koszyku'><b>"+nazwa+" </b><span class='cena_w_koszyku'>"+cena+" zł</span></li>";

        $("#dodajDoKoszyka").append(li);

        var suma = 0;
        $("#dodajDoKoszyka .cena_w_koszyku").each(function(){
            suma += parseFloat($(this).text());
        });
        
        $("#cenaRazem b").text(suma.toFixed(2));

    });



});
