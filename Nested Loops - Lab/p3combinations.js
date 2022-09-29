function combinations(input) {
    let Num = Number(input[0]);
    let totalsum = 0;
    let counter = 0;
    for (let firstnum = 0; firstnum <= Num; firstnum++) {
        for (let secNum = 0; secNum <= Num; secNum++) {
            for (let lastNum = 0; lastNum <= Num; lastNum++) {
                totalsum = firstnum + secNum + lastNum;
                if (totalsum === Num) {
                    counter++;
                    
                }
            }

        }
    }
    console.log(counter);
}
combinations([5])