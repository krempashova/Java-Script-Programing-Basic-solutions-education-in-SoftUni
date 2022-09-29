function shopping(input){
let budgetPetyr=Number(input[0]);
let numVideoCARD=Number(input[1]);
let numProcessors=Number(input[2]);
let numRam=Number(input[3]);
let priceVideoCard=numVideoCARD*250;
let priceProcessor=numProcessors*(priceVideoCard*0.35);
let prriceRam=numRam*(priceVideoCard*0.10);
let totalToPay=priceVideoCard+priceProcessor+prriceRam;
if(numVideoCARD>numProcessors){
    totalToPay=totalToPay-(totalToPay*0.15);
    
}
if(budgetPetyr>=totalToPay){
console.log(`You have ${(budgetPetyr-totalToPay).toFixed(2)} leva left!`)
}
else{
    console.log(`Not enough money! You need ${(totalToPay-budgetPetyr).toFixed(2)} leva more!`)
}


}
shopping(["920.45",
"3",
"1",
"1"])

