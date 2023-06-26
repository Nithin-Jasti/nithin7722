// Get references to the DOM elements
const bioElement = document.querySelector('.bio');

const postContentElements = document.querySelectorAll('.post-content');

// Update user information dynamically
bioElement.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
locationElement.textContent = 'Location: New York, USA';

// Add event listeners or additional functionality as needed
postContentElements.forEach((postContentElement) => {
  postContentElement.addEventListener('click', () => {
    // Perform an action when a post is clicked
    console.log('Post clicked:', postContentElement.textContent);
  });
});
