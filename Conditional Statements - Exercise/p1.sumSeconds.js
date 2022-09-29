function sumSeconds(input){
let secondFirst=Number(input[0]);
let secondSecond=Number(input[1]);
let secondThird=Number(input[2]);
let totalSeconds=secondFirst+secondSecond+secondThird;
//console.log(totalSeconds);
let totalminutes=Math.floor(totalSeconds/60);
//console.log(totalminutes);
let seconds=totalSeconds%60;
//console.log(seconds);
if(seconds<10)
{
    console.log(`${totalminutes}:0${seconds}`);
}
else
{
    console.log(`${totalminutes}:${seconds}`);
}



}
sumSeconds(["14", "12", "10"])