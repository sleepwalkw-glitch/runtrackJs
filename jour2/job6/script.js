let keys = [];
const konamicode =[
    'ArrowUp','ArrowUp',
    'ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight',
    'ArrowLeft','ArrowRight',
    'b','a'];

let textStyle = document.getElementsByName("tips-text");
let statusBox = document.getElementById("typing-status");

document.addEventListener("keydown",function(event){
    keys.push(event.key);
    console.log(keys);
    console.log(keys.length);

    // change style by creating a paragraphe in body with a dynamic counter and by changing the style of text
    //dynamic typing pattern remainder messages
    textStyle[2].classList.add('tt-style');
    setTimeout(() => {
        textStyle[2].classList.remove('tt-style');
    }, 300);

    //div for showing the times of typing
    let counter = keys.length;
    statusBox.textContent = `You typed now ${counter} times`;
  
    
    if (keys.length > konamicode.length){
    //remove the first item, when the length exceeds konamicode length
        keys.shift();
        console.log(keys.shift())
    }


    if(keys.toString() === konamicode.toString()){
        alert("Konami Code Activated!");
        keys = []; //reset the keys array
        activeKonami();
}

    // if(keys.length === konamicode.length && keys.every((value,index) => value === konamicode[index])){
    //     alert("Konami Code Activated!");
    //     keys = [];
    //     activeKonami();
    // }
});

function activeKonami(){
   
    let konamiMessage = document.getElementById("konami-ms");
    konamiMessage.innerHTML = `<h1>Konami Code Activated!</h1>`;
    // there are two ways to add css style : 1. add css style directly 2. add css class defined in css file

    document.body.classList.add("konami");
    // remove the class after 3 seconds
        setTimeout(()=>{
        document.body.classList.remove("konami");
         konamiMessage.innerHTML ="";
    },3000);     
   
}





