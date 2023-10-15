// document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch filtered data from the backend using AJAX
    function fetchData(filter) {
      allbuttons = document.querySelectorAll('.button');
      allbuttons.forEach((button) => {
        button.style.backgroundColor = 'black';
        button.style.color = '#ccc';
      });
      slectedButton = document.getElementById(filter);
      slectedButton.style.backgroundColor = '#ccc';
      slectedButton.style.color = 'black';

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            const dataContainer = document.getElementById("game123");
            dataContainer.innerHTML = xhr.responseText;
          } else {
            console.error("Error fetching data. Status:", xhr.status);
          }
        }
      };
      // Replace 'http://localhost:3000' with your backend server URL
      xhr.open('GET', `/Games/filter?catagory=${filter}`, true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Process the response data
        } else {
            console.error('Request failed with status: ' + xhr.status);
            console.error(xhr.responseText);
        }
    };
    
    xhr.onerror = function () {
        console.error('Request failed. Check network and server settings.');
    };
      xhr.send();
    }

    // Add click event listener to all filter buttons
    const filterButtons = document.querySelectorAll('.button');
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.dataset.filter;
        console.log("Button clicked with filter value:", filterValue);
        fetchData(filterValue);
      });
    });
  // });
  document.addEventListener('DOMContentLoaded', function() {
    const keyValue = sessionStorage.getItem('key');
    fetchData(keyValue);
    console.log(keyValue); // This should print "IOS" if the data was set correctly
});

$(document).ready(function() {
  // Get the current route from your application (e.g., "/page1", "/page2", etc.)
  var currentRoute = "/Games"; // Replace this with your actual current route logic

  // Find the corresponding <a> element in the navigation bar and add the "active" class to it
  $('nav ul li a').each(function() {
    var targetRoute = $(this).attr('href');
    if (currentRoute === targetRoute) {
      $(this).addClass('activeli');
      console.log("class active added")
    }
  });
  
});


  AOS.init({
    duration:1500
  });
