function lunchBreak(input){
 let nameOfMovie=input[0];
 let epizodDurationMinutes=Number(input[1]);
let breakDuration=Number(input[2]);
let LunchTime=breakDuration/8
let timeDoNothing=breakDuration/4;
let timeForWatchMovie=breakDuration-(LunchTime+timeDoNothing);
if(timeForWatchMovie>=epizodDurationMinutes){
    let timeLeft=timeForWatchMovie-epizodDurationMinutes;
console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(timeLeft)} minutes free time.`)
}
else{
    let inssuficualTime=epizodDurationMinutes-timeForWatchMovie;
    console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(inssuficualTime)} more minutes.`)
}
}
lunchBreak(["Teen Wolf",
"48",
"60"])

