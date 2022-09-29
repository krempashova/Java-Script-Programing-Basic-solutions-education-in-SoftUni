function toyShop(input){
let priceExcursion=Number(input[0]);
let numPuzzel=Number(input[1]);
let numDools=Number(input[2]);
let numBears=Number(input[3]);
let numMinions=Number(input[4]);
let numTracks=Number(input[5]);
let countToys=numPuzzel+numDools+numBears+numMinions+numTracks;
let totalpriceAllToys=(numPuzzel*2.60)+(numDools*3)+(numBears*4.10)+(numMinions*8.20)+(numTracks*2)
if(countToys>=50){
    discount=0.25*totalpriceAllToys;
    totalpriceAllToys=totalpriceAllToys-discount;
}
let rentshop=totalpriceAllToys*0.10;
let totalMoney=totalpriceAllToys-rentshop;
if(totalMoney>=priceExcursion){
    let moremoney=totalMoney-priceExcursion;
    console.log(`Yes! ${moremoney.toFixed(2)} lv left.`)
}
else{
    let issuficientMoney=priceExcursion-totalMoney;
    console.log(`Not enough money! ${issuficientMoney.toFixed(2)} lv needed.`)
}
}

toyShop
(["320",
"8",
"2",
"5",
"5",
"1"])
