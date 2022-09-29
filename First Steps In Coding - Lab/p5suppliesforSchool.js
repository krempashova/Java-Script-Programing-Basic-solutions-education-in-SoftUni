function suppliesforSchool(input){
let numPens=Number(input[0]);
let numMarkers=Number(input[1]);
let litterCleaner=Number(input[2]);
let discountInPrecentige=Number(input[3]);
let priceForPens=numPens*5.80;
let priceForMarkers=numMarkers*7.20;
let priceForLitterCleaneer=litterCleaner*1.20;
let discount=discountInPrecentige/100;
let totalBeforeDiscount=priceForPens+priceForMarkers+priceForLitterCleaneer;
let totalToPay=totalBeforeDiscount-(totalBeforeDiscount*discount);
console.log(totalToPay)
}
suppliesforSchool(["2 ",
"3 ",
"4 ",
"25 "]
)