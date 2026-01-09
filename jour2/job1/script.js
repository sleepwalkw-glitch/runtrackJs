// Get the button element
let button = document.getElementById("button");

// let citationText = document.querySelector("article p").textContent;
// Get the citation text from the article
let article = document.getElementById("citation");

button.addEventListener("click", function(){
    // Call the citation function with the article's inner HTML
    citation(article.textContent);
});

// Function to display the citation
function citation(article) {
    console.log(article);
}

