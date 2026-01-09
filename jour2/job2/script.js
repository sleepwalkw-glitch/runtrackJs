let button = document.getElementById("button");
let article = null;

//add the new article to the body
button.addEventListener("click", showhide);
    
function showhide(){
    if(article === null){
    // Create a new article element
    article = document.createElement("article");
    article.textContent = " L'important n'est pas la chute, mais l'atterrissage."
    article.setAttribute("id", "Marticle");
    // Append the new article to the body
    document.body.appendChild(article);}
    else{
        // Remove the article from the body
        article.remove();
        article = null;
    }
};