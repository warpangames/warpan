let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

setInterval(function(){
  plusSlides(1);
},4000);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
AOS.init({
  duration:1500,
});
document.getElementById('mylink1').addEventListener('click', function() {
  sessionStorage.setItem('key', 'windows');
    window.location.href = '/Games'; // Redirect to the second page
});
document.getElementById('mylink2').addEventListener('click', function() {
  sessionStorage.setItem('key', 'android');
    window.location.href = '/Games'; // Redirect to the second page
});
    document.getElementById('mylink3').addEventListener('click', function() {
      sessionStorage.setItem('key', 'IOS');
        window.location.href = '/Games'; // Redirect to the second page
    });

    //game load problem solution this select the category in games automattically
     document.getElementById('games').addEventListener('click', function() {
       sessionStorage.setItem('key', 'All');
         window.location.href = '/Games'; // Redirect to the second page
     });


    
    $(document).ready(function() {
      // Get the current route from your application (e.g., "/page1", "/page2", etc.)
      var currentRoute = "/"; // Replace this with your actual current route logic
  
      // Find the corresponding <a> element in the navigation bar and add the "active" class to it
      $('nav ul li a').each(function() {
        var targetRoute = $(this).attr('href');
        if (currentRoute === targetRoute) {
          $(this).addClass('activeli');
          console.log("class active added")
        }
      });
      
    });
   



