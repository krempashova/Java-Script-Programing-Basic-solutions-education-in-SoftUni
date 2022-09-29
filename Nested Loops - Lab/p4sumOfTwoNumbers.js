function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0;
    for (let i = start; i <= end; i++) {
        for (let a = start; a <= end; a++) {
            let res = i + a;
            combinationCounter++
            if (res === magicNum) {
                console.log(`Combination N:${combinationCounter} (${i} + ${a} = ${magicNum})`);
                return;

            }
        }
    }

    console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);

}
sumOfTwoNumbers(["88", 
"888", 
"2000"])



