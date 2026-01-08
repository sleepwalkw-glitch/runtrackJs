let bisextile = function(anneé){
    if((anneé%4) === 0 && anneé%100 !== 0 || anneé%400 ===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(bisextile("2025"));