// Select the button element and paragraph element in the HTML
const button = document.querySelector('button');
const p = document.querySelector('p');

// Define the URL of the API we will use
const API = 'http://api.quotable.io/random';

// Add an event listener to the button that triggers a function when clicked
button.addEventListener('click', () => {
  // Make a fetch request to the API, which returns a Promise
  fetch(API)
    // Convert the response to JSON format
    .then((res) => res.json())
    // Use the data from the response to update the text of the paragraph element
    .then((data) => {
      p.innerText = data.content;
    })
    // Catch any errors that occur during the fetch request
    .catch(() => alert('Error fetching quote!'));
});
