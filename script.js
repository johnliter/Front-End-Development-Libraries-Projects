
// Get the mode-toggle button and body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Add click event listener to the mode-toggle button
modeToggle.addEventListener('click', toggleMode);

// Function to toggle between dark and light mode
function toggleMode() {
  body.classList.toggle('light-mode'); // Toggle the presence of 'light-mode' class on the body element
}

// Get all like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Loop through each like button and add click event listener
likeButtons.forEach(button => {
  button.addEventListener('click', handleLike);
});

// Like button click event handler
function handleLike(event) {
  const button = event.target;
  const countSpan = button.nextElementSibling;
  let count = parseInt(countSpan.textContent);

  count += 1;
  countSpan.textContent = count;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.'); // Display an alert if any field is empty
      return;
    }
  
    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
    // Display success message
    alert('Thank you for your message!'); // You can customize this message or replace it with your own action
  }
  
  // Attach form submission event listener
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);