// JavaScript code for the home page

// Add an event listener to the "Get Started" button
const getStartedButton = document.querySelector('.btn');
getStartedButton.addEventListener('click', handleGetStarted);

// Event handler for the "Get Started" button
function handleGetStarted(event) {
  event.preventDefault();
  // Redirect the user to the registration page
  window.location.href = 'registration.html';
}
