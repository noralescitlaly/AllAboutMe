var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1,0);
showSlides(1,1);

// Next/previous controls
function plusSlides(n, no) {
  // console.log(n);
  // console.log(no);
  showSlides(slideIndex[no] += n, no);
}

// // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  // console.log(x);
  // var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // console.log(x[slideIndex[no]-1]);
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}
