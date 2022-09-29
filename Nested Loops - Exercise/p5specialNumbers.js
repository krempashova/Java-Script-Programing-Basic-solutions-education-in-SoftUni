function specialNumbers(input) {
    let num = Number(input[0]);
    let specialNumbers = "";
    for (let i = 1111; i < 10000; i++) {
        let isSpecial = true;
        for (let j = 0; j < 4; j++) {
            if (num % Number(i.toString()[j]) !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            specialNumbers += `${i} `;
        }
    }
    console.log(specialNumbers);
}specialNumbers(["3"])