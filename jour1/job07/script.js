const feries = ['01-01', '06-04', '01-05', '08-05', '14-05' , '25-05', '14-07' , '15-08' , '01-11' , '25-12']

function concatenation(jour, mois) {
    let jourE = jour < 10 ? "0" + jour : "" + jour;
    let moisE = mois < 10 ? "0" + mois : "" + mois;
    let dateE = jourE + "-" + moisE;
  return dateE;
}

function jourTravaille(date){

    let jour = date.getDate();
    let mois = date.getMonth()+1;
    let dateF = concatenation(jour, mois);

    for(let ferie of feries ){
        if(dateF === ferie ){
            console.log("Le "+dateF + " est un jour férié.");
            return;}
    }

    if(date.getDay() === 0 || date.getDay() === 6){
        console.log("Non,le "+dateF+ " est un week-end.");
        return;
    }

    console.log("Oui,le "+dateF+"est un jour travaillé.");
    }
