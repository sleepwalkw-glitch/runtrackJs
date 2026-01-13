document.getElementById("button").addEventListener("click",fetchData());

function fetchData(){

    //version 1 
    // in fetch(), by default the method is GET and in (url,potions),the url is mandatory, and the options is optional,and the URL can be replaced by a Request object like a file text.) 
fetch("expression.txt")
    .then(response => {
        if(!response.ok){
            throw new Error ("Error")
        }
        // console.log(response))
        // with .text() can show all the info in console
        // return respons.json(); json() can be repalced by .text() or blob() or formData() or arrayBuffer()
           return response.text();
    })
    //then(data => console.log(data)) is the promise that return response.text()
    .then(data =>{
        // console.log(data);
        // document.getElementById("message").innerText = data;
        showMessage(message=data);
    })
    .catch(error=>{
        console.error("error");
    });
}
    // console.warn("Fetching Expression.txt completed.");

function showMessage(message){
    document.getElementById("message").textContent = message;
}

//version 2

// async function fetchData() {
//     try{
//         let response = await fetch("expression.txt");
//         if(!response.ok){
//             throw new Error("Error");  
//         }
//         let data = await response.text();
//         showMessage(data=message);
      
//     }
//     catch(error){
//         console.error("error");
//     }
    
// }