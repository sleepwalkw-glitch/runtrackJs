//add event listener to the button 
document.getElementById("filterBtn").addEventListener("click",ShowFilteredItems);

function ShowFilteredItems(){
    // get the values from the input fields which are used as filters keys in the json objects
    let idValue = document.getElementById("id").value;
    let nameValue = document.getElementById("name").value;
    let typeValue = document.getElementById("type").value;
    // fetch the json file
    fetch('pokemon.json')
    .then(Response)
} 
