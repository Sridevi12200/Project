
var slideIndex=1
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dots");

    if(n > slides.length){ slideIndex=1; }
    if(n < 1){ slideIndex=slides.length; }

    for(i=0;i < slides.length;i++){
        slides[i].style.display="none";
    }

    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display="block";
    dots[slideIndex -1].className +="active";

}

// dot
var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function currentSlides(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

function ShowSlides(){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    slideIndex++;
    var slides = document.getElementsByClassName("mySlides");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        showSlides(slideIndex);
        setTimeout(ShowSlides, 1000);
}
ShowSlides();


// animation
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



// button
function ChangeColor()
{
    const button = document.getElementById("myButton");
   
    setTimeout(() => {
      button.style.backgroundColor = "black";
    },1000 );
 
        button.style.backgroundColor = "goldenrod";
     
   
}

 const menu = document.querySelector('#mobile-menu');
 const menuLinks =document.querySelector('.nav-menu');

 menu.addEventListener('click',function(){
     menu.classList.toggle('is-active');
     menuLinks.classList.toggle('active');
 })





// left side img

var slideIndex=1
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");

    if(n > slides.length){ slideIndex=1; }
    if(n < 1){ slideIndex=slides.length; }

    for(i=0;i < slides.length;i++){
        slides[i].style.display="none";
    }

    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display="block";
    dots[slideIndex -1].className +="active";

}