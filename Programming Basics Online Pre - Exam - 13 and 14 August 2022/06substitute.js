function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let numOfGnahge = 0;

    for (let x = k; x <= 8; x++) {
        for (let y = 9; y >= l; y--) {
            for (let z = m; z <= 8; z++) {
                for (let j = 9; j >= n; j--)
                    if (x % 2 === 0 && y % 2 !== 0 && z % 2 === 0 && j % 2 !== 0) {
                        numOfGnahge++;
                        if (numOfGnahge > 6) {
                            break;
                        }
                        if (`${x}${y}` === `${z}${j}`) {

                            numOfGnahge--;
                            console.log("Cannot change the same player.");
                        }
                        else {
                            console.log(`${x}${y} - ${z}${j}`);


                        }

                    }

            }
        }
    }
}
substitute(["6",
    "7",
    "5",
    "6"])
