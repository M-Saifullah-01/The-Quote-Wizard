// Select the button element and paragraph element in the HTML
const button = document.querySelector('button');
const p = document.querySelector('p');

// Define the URL of the API we will use
const API = 'http://api.quotable.io/random';

// Define a function that fetches a random quote and updates the paragraph element
const getQuote = () => {
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
};

// Add an event listener to the button that triggers the getQuote function when clicked
button.addEventListener('click', getQuote);

// Add an event listener to the window object that triggers the getQuote function when the page loads
window.addEventListener('load', getQuote);
