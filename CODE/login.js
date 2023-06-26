document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  

    document.getElementById('login-form').reset();
  
    
    window.location.href = 'profile.html';
  });
  