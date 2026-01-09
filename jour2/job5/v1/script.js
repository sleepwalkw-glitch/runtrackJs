let footer = document.getElementById('footer');

window.addEventListener('scroll',function(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight)* 100;
   
    const red =Math.round(255*(1-(scrollPercent/100)));
    const green =Math.round(255*(scrollPercent/100));

    footer.style.backgroundColor = `rgb(${red},${green},0)`;
    // footer.style.backgroundColor ="rgb(255,0,0)";

    footer.style.width = scrollPercent + '%';
    footer.style.height = scrollPercent + '%';
    
})