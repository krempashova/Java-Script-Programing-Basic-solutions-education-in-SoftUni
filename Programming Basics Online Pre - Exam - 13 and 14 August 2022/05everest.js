function everest(input) {
    let index = 0;
    let startingkm = 5364;
    let days = 1;
    let command = input[index];
    index++;
    
    let kmtofinish=3484;
    if(command==="Yes"){
        days++;
    }
    while (command !=='END') {
        let typeOfMoviing = command;
        
        let passedkm=Number(input[index]);
        index++;
        kmtofinish-=passedkm;
        if(kmtofinish<=0){
            break;
        }
     
        
        if(days>5){
            kmtofinish+=passedkm;
            break;
        }
        
        
        command=input[index];
        index++;
        if(typeOfMoviing==="Yes"){
            days++;
        }

    }
if(kmtofinish<=0){
    console.log(`Goal reached for ${days} days!`);
}
else{
   let totalpassedkm=8848-kmtofinish;
    console.log("Failed!");
    console.log(`${totalpassedkm}`);
}
}
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])












