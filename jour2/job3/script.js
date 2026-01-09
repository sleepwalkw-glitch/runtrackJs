let button = document.getElementById("button");
// get the p element as counter
let counter = document.getElementById("compteur");

button.addEventListener("click",function() {
    // increment the counter by 1 and update the counter element with the new count value
    counter.textContent = Number(counter.textContent)+1;
});

/* let counter = 0;
button.addEventListener("click",function() {
    counter++;
    // update the counter element with the new count value      
    document.getElementById("compteur").textContent = counter;
});
*/
