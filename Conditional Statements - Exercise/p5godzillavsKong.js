function godzillavsKong(input){
let movieBudget=Number(input[0]);
let numpeople=Number(input[1]);
let priceclothesForONEPerson=Number(input[2]);
let decormovie=0.10*movieBudget;
let totalclothesmoney=numpeople*priceclothesForONEPerson;
let totalForALL=decormovie+totalclothesmoney;
if(numpeople>150){
let discount=totalclothesmoney*0.10;
totalclothesmoney=totalclothesmoney-discount;
 totalForALL=decormovie+totalclothesmoney;
}

if(totalForALL>movieBudget){
    let neededMoney=totalForALL-movieBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
}

else{
    let inssuficientMoney=movieBudget-totalForALL;
    console.log("Action!" );
    console.log(`Wingard starts filming with ${inssuficientMoney.toFixed(2)} leva left.`)
    
}



}
godzillavsKong
(["9587.88",
"222",
"55.68"])
