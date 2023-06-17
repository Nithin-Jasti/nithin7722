document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form inputs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform login logic
    // You can make an AJAX request to the backend API endpoint here
    // using libraries like Axios or fetch
  
    // Reset the form
    document.getElementById('login-form').reset();
  
    // Show success message or redirect to dashboard
    window.location.href = 'userProfile.html';
  });
  