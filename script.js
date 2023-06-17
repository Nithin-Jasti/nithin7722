document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // Perform input validation
    if (password !== confirmPassword) {
      alert('Password and Confirm Password must match');
      return;
    }

  
    // Perform registration logic
})