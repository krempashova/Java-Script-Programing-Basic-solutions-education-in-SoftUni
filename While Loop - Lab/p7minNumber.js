function minNumber(input){
    let index=0;
    let minNumber=Number.MAX_SAFE_INTEGER;
    let currentNumber=input[index];
    index++;
    while(currentNumber!=="Stop"){
        currentNumber=Number(currentNumber);
        if(currentNumber<minNumber){
            minNumber=currentNumber;
        }
        else{
            currentNumber=input[index];
            index++;
        }
    }
    console.log(minNumber);

}
minNumber(["-1", "-2", "Stop"])



