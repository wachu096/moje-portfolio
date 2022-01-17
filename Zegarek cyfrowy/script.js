function wlaczZegar(){
    var czas = new Date();

    var godziny = czas.getHours();
    var minuty = czas.getMinutes();
    var sekundy = czas.getSeconds();
    
    if(godziny < 10){
        godziny =   "0" + godziny;
    }
    
    if(minuty < 10){
        minuty =   "0" + minuty;
    }
    
    if(sekundy < 10){
        sekundy =   "0" + sekundy;
    }
    
    var zegar = document.getElementById("zegar").innerHTML = godziny + ":" + minuty + ":" + sekundy;

    setTimeout(wlaczZegar, 1000);
}

wlaczZegar();

