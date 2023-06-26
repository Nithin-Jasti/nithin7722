document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Perform validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Send the form data to the server
    var formData = {
      username: username,
      email: email,
      password: password
    };
  
    // Here, you can make an AJAX request to the server to save the settings
    // For example, using the Fetch API or Axios
  
    // Example using Fetch API
    fetch('/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Error saving settings');
      }
      alert('Settings saved successfully');
    })
    .catch(function(error) {
      console.log(error);
      alert('saved successfully');
    });
  });
  