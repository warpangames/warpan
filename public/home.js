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
   
//commited
//////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  function updatePath() {

    const elements = document.querySelectorAll('.pathc');

// Loop through the elements and update their content
  
    if (window.innerWidth < 1120) {
        // Modify the path when the window width is less than 1120 pixels
        const newDValue = "M0 66.1719L236 0V237C236 239.761 233.761 242 231 242H4.99999C2.23857 242 0 239.761 0 237V66.1719Z";
        elements.forEach((element, index) => {
          element.setAttribute("d", newDValue);
          });
    } 
    
    else {
        // Restore the original path when the window width is 1120 pixels or greater
        const originalDValue = "M0 70.5L301 0.5V251.5C301 254.261 298.761 256.5 296 256.5H4.99999C2.23857 256.5 0 254.261 0 251.5V70.5Z";
        elements.forEach((element, index) => {
          element.setAttribute("d", originalDValue);
          });    }
  }
  
  // Initial call to set the path based on the window width
  updatePath();
  
  // Listen for window resize events and update the path accordingly
  window.addEventListener("resize", updatePath);
  
  });


////////////////////////////////////////////////////////////////////////////
//bubbles ka transition


const scrollTriggeredDiv = document.querySelector('.design1');
let initialScrollPosition = null;
function handleScroll() {
  const rect = scrollTriggeredDiv.getBoundingClientRect();
  const scrollPosition = window.scrollY;


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (initialScrollPosition === null) {
      initialScrollPosition = scrollPosition;
    }
    const relativeScroll = initialScrollPosition -scrollPosition;

    const movement = relativeScroll * -0.1; // Adjust the factor to control the movement speed

    scrollTriggeredDiv.style.transform = `translateX(${movement}px)`;
    scrollTriggeredDiv.style.opacity = 1;
  } else {
    //scrollTriggeredDiv.style.transform = 'translateX(90px)';
    scrollTriggeredDiv.style.opacity = 0;
  }
}



const scrollTriggeredDiv1 = document.querySelector('.design2');
let initialScrollPosition1 = null;

function handleScroll1() {
  const rect = scrollTriggeredDiv1.getBoundingClientRect();
  const scrollPosition = window.scrollY;


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (initialScrollPosition1 === null) {
      initialScrollPosition1 = scrollPosition;
    }
    const relativeScroll = initialScrollPosition -scrollPosition;

    const movement = relativeScroll * 0.05; // Adjust the factor to control the movement speed

    scrollTriggeredDiv1.style.transform = `translateX(${movement}px)`;
    scrollTriggeredDiv1.style.opacity = 1;
  } else {
    scrollTriggeredDiv1.style.transform = 'translateX(300px)';
    scrollTriggeredDiv1.style.opacity = 0;
  }
}

window.addEventListener('scroll', handleScroll,handleScroll1);

window.addEventListener('scroll',handleScroll1);





const scrollTriggeredDiv3 = document.querySelector('.design3');
let initialScrollPosition3 = null;

function handleScroll3() {
  const rect = scrollTriggeredDiv3.getBoundingClientRect();
  const scrollPosition = window.scrollY;


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (initialScrollPosition3 === null) {
      initialScrollPosition3 = scrollPosition;
    }
    const relativeScroll = initialScrollPosition - scrollPosition;

    const movement = relativeScroll * -0.1; // Adjust the factor to control the movement speed

    scrollTriggeredDiv3.style.transform = `translateX(${movement}px)`;
    scrollTriggeredDiv3.style.opacity = 1;
  } else {
    scrollTriggeredDiv3.style.transform = 'translateX(0)';
    scrollTriggeredDiv3.style.opacity = 0;
  }
}


window.addEventListener('scroll',handleScroll3);





const scrollTriggeredDiv4 = document.querySelector('.design4');
let initialScrollPosition4 = null;

function handleScroll4() {
  const rect = scrollTriggeredDiv3.getBoundingClientRect();
  const scrollPosition = window.scrollY;


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (initialScrollPosition4 === null) {
      initialScrollPosition4 = scrollPosition;
    }
    const relativeScroll = initialScrollPosition - scrollPosition;

    const movement = relativeScroll * 0.05; // Adjust the factor to control the movement speed

    scrollTriggeredDiv4.style.transform = `translateX(${movement}px)`;
    scrollTriggeredDiv4.style.opacity = 1;
  } else {
    scrollTriggeredDiv4.style.transform = 'translateX(0)';
    scrollTriggeredDiv4.style.opacity = 0;
  }
}


window.addEventListener('scroll',handleScroll4);






const scrollTriggeredDiv5 = document.querySelector('.angled-rect-1');
let initialScrollPosition5 = null;

function handleScroll5() {
  const rect = scrollTriggeredDiv5.getBoundingClientRect();
  const scrollPosition = window.scrollY;


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (initialScrollPosition5 === null) {
      initialScrollPosition5 = scrollPosition;
    }
    const relativeScroll = initialScrollPosition - scrollPosition;

    const movement = relativeScroll * -0.51; // Adjust the factor to control the movement speed

    scrollTriggeredDiv5.style.transform = `translateX(${movement}px)`;
    scrollTriggeredDiv5.style.opacity = 1;
  } else {
    scrollTriggeredDiv5.style.innerWidth = '0';

    scrollTriggeredDiv5.style.transform = 'translateX(0)';
    scrollTriggeredDiv5.style.opacity = 0;
  }
}


window.addEventListener('scroll',handleScroll5);



////////////////////////////////////////////////////////////////////////////////////////////////////
//objects nikal ke aare h side s

/*const scrollTriggeredDiv = document.querySelector('.esign1');

function handleScroll() {
  const rect = scrollTriggeredDiv.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    // The div is partially or fully visible in the viewport
    scrollTriggeredDiv.style.transform = 'translateX(0)';
    scrollTriggeredDiv.style.opacity = 1;
  } else {
    // The div is not in the viewport
    scrollTriggeredDiv.style.transform = 'translateX(-100px)';
    scrollTriggeredDiv.style.opacity = 0;
  }
}

window.addEventListener('scroll', handleScroll);
*/



