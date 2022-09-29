function repainting(input){
let neededNylon=Number(input[0]);
let neddedpaintInLitters=Number(input[1]);
let neddedThinerInLitters=Number(input[2]);
let nedeedHours=Number(input[3]);
let priceForNylon=(neededNylon+2)*1.50;
let priceForPaint=((neddedpaintInLitters*0.10)+neddedpaintInLitters)*14.50;
let priceThinder=neddedThinerInLitters*5;
let extraBags=0.40;
let totalForRepaiting=priceForNylon+priceForPaint+priceThinder+extraBags;
let salaryForMatersForHour=totalForRepaiting*0.30;
let mastresTotalForAllDay=salaryForMatersForHour*nedeedHours;
let totalToPay=totalForRepaiting+mastresTotalForAllDay;
console.log(totalToPay);

}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)