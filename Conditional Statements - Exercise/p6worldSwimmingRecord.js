function worldSwimmingRecord(input){
let worldRecordInSecond=Number(input[0]);
let routeInMeters=Number(input[1]);
let timeInSecondsswimmingOneMeter=Number(input[2]);
let timeInsecondsToSwimRoute=routeInMeters*timeInSecondsswimmingOneMeter;
let timeOfDislay=Math.floor(routeInMeters/15);
let dislay=timeOfDislay*12.5;
let totaltimeInseconds=timeInsecondsToSwimRoute+dislay;
if(totaltimeInseconds<worldRecordInSecond){
console.log(`Yes, he succeeded! The new world record is ${totaltimeInseconds.toFixed(2)} seconds.`);
}
else{
    let inssuficientseconds=totaltimeInseconds-worldRecordInSecond;
    console.log(`No, he failed! He was ${inssuficientseconds.toFixed(2)} seconds slower.`)
}   
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

