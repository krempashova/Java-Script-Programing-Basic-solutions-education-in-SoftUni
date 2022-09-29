function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numFisherMan = input[2];
    let priceBoat=0;
    switch (season) {
        case "Spring":
            priceBoat=3000;
            if(numFisherMan%2==0){
                priceBoat=priceBoat*0.95;
            }
            break;
        case "Summer":
            priceBoat=4200;
            if(numFisherMan%2==0){
                priceBoat=priceBoat*0.95;
            }
            break;
        case "Autumn":
            priceBoat=4200;
            break;
        case "Winter":
            priceBoat=2600;
            if(numFisherMan%2==0){
                priceBoat=priceBoat*0.95;
            }
            break;
    }
 if(numFisherMan<=6){
    priceBoat=priceBoat*0.9;
 }
 else if(numFisherMan<=11){
priceBoat=priceBoat*0.85;
 }
 else{
    priceBoat=priceBoat*0.75;
 }
 if(budget>=priceBoat){
    let leftmoney=budget-priceBoat;
    console.log(`Yes! You have ${leftmoney.toFixed(2)} leva left.`)
 }
 else{
    let inssuficient=priceBoat-budget;
    console.log(`Not enough money! You need ${inssuficient.toFixed(2)} leva.`)
 }
}
//fishingBoat(["3000", "Summer", "11"])
//fishingBoat(["3600","Autumn","6"])
fishingBoat(["2000","Winter","13"])
