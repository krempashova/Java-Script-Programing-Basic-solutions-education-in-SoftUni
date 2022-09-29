function maxNumber(input) {
    let index = 0;
    let currentNumber = input[index];
    index++;
    let maxNumber =Number.MIN_SAFE_INTEGER;
    while (currentNumber !== "Stop") {
        currentNumber = Number(currentNumber);
        if (currentNumber > maxNumber){
            maxNumber = currentNumber;
            currentNumber=input[index];
            index++;
        }
        else{
            currentNumber=input[index];
            index++;
        }
    }
    console.log(maxNumber);

}
maxNumber(["-1", "-2", "Stop"])