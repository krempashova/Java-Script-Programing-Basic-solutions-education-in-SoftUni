function tennisRanklist(input){
let numTounirs=Number(input[0]);
let pointsStart=Number(input[1]);
let finalPoints=pointsStart;
let counterWon=0;
for(let i=2;i<input.length;i++){
    let raingeInTurnir=input[i];
    switch(raingeInTurnir){
        case "W":finalPoints+=2000;
        counterWon++;
            break;
        case"F":finalPoints+=1200;
        break;
        case"SF":finalPoints+=720;
         break;
    }
}
console.log(`Final points: ${finalPoints}`)
let averagePoints=(finalPoints-pointsStart)/numTounirs;
console.log(`Average points: ${Math.floor(averagePoints)}`);
let totalWonsTurnirs=counterWon/numTounirs;
let pricentigeWonsTurnirs=totalWonsTurnirs*100;
console.log(`${pricentigeWonsTurnirs.toFixed(2)}%`);
}
tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])