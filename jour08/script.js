function Premier(n){
    if(n<2){
        return false;
        }
    else{
        for(let i=2; i< Math.sqrt(n); i++){
            if(n%i === 0){
                return false;
                }
            }
            return true;
        }
}

function sommeNombresPremiers(P1,P2){
    if(premier(P1) && premier(P2)){
        return P1+P2;
        }
    else{
        return false;}
}