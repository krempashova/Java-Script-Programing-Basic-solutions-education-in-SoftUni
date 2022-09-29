function numberPyramid(input) {
    let n = Number(input[0]);
    let currentN = 1;
    let isBigger = false;
    let printCurrentLine = '';
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (currentN > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentN + " ";

            currentN++;

        }
        console.log(`${printCurrentLine}`);
        printCurrentLine="";
        if (isBigger) {
            break;
        }

    }
}



numberPyramid(["7"])