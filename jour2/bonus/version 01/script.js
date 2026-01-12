let cube = document.getElementById("cube");

let moveX =0;
let moveY =0;
let moveUnit = 10;

function functionUp(){
    moveY -= moveUnit;
    cube.style.top = moveY + "px";
}
function functionDown(){
    moveY += moveUnit;
    cube.style.top = moveY + "px";
}   
function functionLeft(){
    moveX -= moveUnit;
    cube.style.left = moveX + "px";
}
function functionRight(){
    moveX += moveUnit;
    cube.style.left = moveX + "px";
}   
