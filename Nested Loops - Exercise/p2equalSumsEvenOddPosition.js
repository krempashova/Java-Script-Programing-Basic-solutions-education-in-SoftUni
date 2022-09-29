function equalSumsEvenOddPosition(input) {
    let numstart = Number(input[0]);
    let numend = Number(input[1]);
    let res="";
    for (let currentNum = numstart; currentNum <= numend; currentNum++) {
        let currentNumAsStr = currentNum.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let index = 0; index < currentNumAsStr.length; index++) {
            let CurrentDigit = Number(currentNumAsStr[index]);
            let position = index + 1;

            if (position % 2 == 0) {
                evenSum += CurrentDigit;

            }
            else {
                oddSum += CurrentDigit;
            }
        }

    
    if (evenSum === oddSum) {
        res+= `${currentNumAsStr} `
       
    }
    
}
console.log(res);
}
equalSumsEvenOddPosition(["123456",
"124000"])

