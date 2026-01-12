let cube = document.getElementById("cube");

let moveX = 0;
let moveY = 0;
let moveUnit = 10;

window.addEventListener("keydown", function(event){
    switch(event.key){
        case "ArrowUp": 
            // moveY -= moveUnit;
            moveY = moveY-moveUnit;
            // moveY = moveY-moveUnit < 0 ? 0 : moveY;
            break;  
        case "ArrowDown":
            // moveY += moveUnit;
            moveY = moveY + moveUnit;
            break;
        case "ArrowLeft":
            // moveX -= moveUnit; 
            moveX = moveX - moveUnit;   
            break;
        case "ArrowRight":
            // moveX += moveUnit;
            moveX = moveX + moveUnit;    
            break;
    }   
    cube.style.top = moveY + "px";
    cube.style.left = moveX + "px";

});
