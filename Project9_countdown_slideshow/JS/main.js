let slideIndex = 1; //created variable slide index
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n)); //next / previous button either increasing or decreasing
}

//Thumbail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    //slides length is how many images you have (only have 3)
    // Chcecking to see if n is greater than 3, it restarts
    slideIndex = 1;
  }
  if (n < 1) {
    // if n < 1 show image 3 , if ur on image 1 then click previous itll go back to img 3
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    //making slides disappear instead of overriding on top of eachother
    slides[i].style.display = "none"; // would make them disappear and not override
  }
  for (i = 0; i < dots.length; i++) {
    //removing the active class from dots
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; //Making the image display
  dots[slideIndex - 1].className += " active"; // making the dots active based on whatever image u are on
}
