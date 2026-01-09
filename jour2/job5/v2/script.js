const footer = document.getElementById('footer');

window.addEventListener('scroll',function(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight-window.innerHeight;
    console.log(scrollTop);
    // console.log(docHeight);
    const scrollPercent = docHeight >0 ? scrollTop / docHeight :0;

    const red =Math.round(255*(1-scrollPercent));
    const green =Math.round(255*scrollPercent);

    footer.style.backgroundColor = `rgb(${red},${green},0)`;
});