let totalSlideNumbers = $(".slideNumber").length; //Całkowita ilość slajdów
let numberIndex = $(".slideNumber"); //Chwycenie wszystkich el. o klasie slideNumber
let numberOfDots = 0; //Kropki nawigacji
let slideIndex = 1; //Indeks slajdu

//dodanie do div o klasie slideNumber numeru slajdu i numeru całkowitej ilości slajdów
for(let i=0; i<totalSlideNumbers; i++){
    $(numberIndex[i]).append(i+1 +" / "+totalSlideNumbers);  
}
//dodanie kropek nawigacyjnych pod zdjęciem, ich liczba == liczbie slajdów
while(numberOfDots < totalSlideNumbers){
    $(".dotsDiv").append('<span class="dot"></span>');
    numberOfDots++;  
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

$(".prev").click(function(){
    plusSlides(-1);
});

$(".next").click(function(){
    plusSlides(1);
});


$(".dot").click(function(){
    var indexOfDot = $(".dot").index(this); //Pobranie indexu nawigacji kropkowej (od 0)
    showSlides(slideIndex = indexOfDot+1);  //Indeks slajdu == indeksowi kropki na którą klikneliśmy, dodajemy 1 bo indeks kroki liczymy od 0, a slajdu od 1
});

function showSlides(n){
    let slides = $(".mySlides"); //Chwycenie wszystkich el. o klasie mySlides
    let dots = $(".dot"); //Chwycenie wszystkich el. o klasie dot

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++){
        $(slides[i]).css("display", "none").animate({opacity: "0"}, 75);
    }

    for (let i = 0; i < dots.length; i++) {
        $(dots[i]).removeClass("active"); //Usunięcie klasy active
      }

    $(slides[slideIndex-1]).css("display", "block").animate({opacity: "1"}, 75);
    $(dots[slideIndex-1]).addClass("active"); //dodanie klasy active

}

showSlides(slideIndex);

/*
setInterval(function() { 
        $('#slideshow > mySlides:first')
        .fadeOut("slow").css("display", "none")
        .next()
        .fadeIn("slow").css("display", "block")
        .end()
        .appendTo('#slideshow');
      }, 3000);
*/



/*
let slideIndex = 1;
showSlides(slideIndex);

let totalSlideNumbers = $(".slideNumber").length;


function plusSlides(n){
    showSlides(slideIndex += n);
}

$(".prev").click(function(){
    plusSlides(-1);
});

$(".next").click(function(){
    plusSlides(1);
});

function showSlides(n){
    let i;
    let slides = $(".mySlides");
    let dots = $(".dot");
    let slideNumber = $(".slideNumber").index();

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    slideNumber += n;
    $(".slideNumber p").replaceWith("<span>"+slideNumber+"</span>");

}
*/