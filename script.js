const button = document.querySelector("button");
const p = document.querySelector("p");
const API = "http://api.quotable.io/random";

button.addEventListener("click", () => {
    //Fetching
fetch(API).then(res => res.json()).then(data => {
    // Update paragraph text 
p.innerText = data.content;
}).catch(() => alert("Error fetching quote!"))
});        