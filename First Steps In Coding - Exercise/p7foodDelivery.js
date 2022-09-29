function foodDelivery(input){
let numChikenMenu=Number(input[0]);
let numFishMenu=Number(input[1]);
let numVeganMenu=Number(input[2]);
let totalForChiken=numChikenMenu*10.35;
let totalForFish=numFishMenu*12.40;
let totalForVegan=numVeganMenu*8.15;
let totalwioutdessert=totalForChiken+totalForFish+totalForVegan;
let pricedessert=0.20*totalwioutdessert;
let totalToPay=totalwioutdessert+pricedessert+2.50;
console.log(totalToPay)







}
foodDelivery(["9 ",
"2 ",
"6 "]
)