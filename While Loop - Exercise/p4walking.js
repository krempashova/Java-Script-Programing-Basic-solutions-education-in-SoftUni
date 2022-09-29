function walking(input) {
    index=0;
    let totalsteps=0;
        let command=input[index];
        index++;
        while(command!=="Going home"){
           command=Number(command);
           totalsteps+=command;
            if(totalsteps>10000){
                break;
            }
            command=input[index];
            index++;
        }
        if(command==="Going home"){
        let finishSteps=Number(input[index]);
        index++;
        totalsteps+=finishSteps;
        }
        if(totalsteps>=10000){
            let moresteps=totalsteps-10000;
            console.log("Goal reached! Good job!" );
            console.log(`${moresteps} steps over the goal!`);

        }
        else{
            let insufficientSteps=10000-totalsteps;
            console.log(`${insufficientSteps} more steps to reach goal.`);
        }

}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


