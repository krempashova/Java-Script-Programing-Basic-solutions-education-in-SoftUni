function vacation(input) {
    let index = 0;
    let neededMoneyForExcursion = Number(input[index]);
    index++;
    let JessysOwnMoney = Number(input[index]);
    index++;
    let spendcounter = 0;
    let daysConter = 0;
    while (JessysOwnMoney < neededMoneyForExcursion) {
        let command = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        daysConter++;
        if (command === "spend") {
            spendcounter++;
            JessysOwnMoney -= money;
        }

        else {
            JessysOwnMoney += money;
            spendcounter=0;
        }
        if (spendcounter === 5) {
            break;
        }
        if (JessysOwnMoney < 0) {
            JessysOwnMoney = 0;
        }


    }

    if (JessysOwnMoney >= neededMoneyForExcursion) {
        console.log(`You saved the money for ${daysConter} days.`);
    }
    else if (spendcounter===5) {
        console.log("You can't save the money.");
        console.log(daysConter);
    }
}


    vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "save",
    "10",])
    
    