document.getElementById('games').addEventListener('click', function() {
    sessionStorage.setItem('key', 'All');
      window.location.href = '/Games'; // Redirect to the second page
  });