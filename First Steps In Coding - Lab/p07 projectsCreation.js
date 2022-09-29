function projectCreations(input)
{

let namearhitect=input[0];
let numberOfProject=Number(input[1]);
let neededHours=numberOfProject*3;
let result=`The architect ${namearhitect} will need ${neededHours} hours to complete ${numberOfProject} project/s.`;
console.log(result)

}

projectCreations(['George', '4'])
