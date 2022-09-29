function solve(input) {
    let index = 0;
    let daysOfTournir = Number(input[index]);
    index++;

    let wincash = 20;
    let cashforDay = 0;
    let wincounter = 0;
    let losecounter = 0;
    let windays = 0;
    let losedays = 0;
    let totalMoneyForDay = 0;
    for (let i = 1; i <= daysOfTournir; i++) {
        let comand = input[index];
        index++;
        if (wincounter > losecounter) {
            cashforDay = cashforDay + (cashforDay * 0.10);
            windays++;
            wincounter = 0;
            losecounter = 0;
            totalMoneyForDay = cashforDay;
            cashforDay = 0;
        } else if (wincounter < losecounter) {
            wincounter=0;
            losecounter=0;
            totalMoneyForDay+=cashforDay;
            losedays++;
            cashforDay=0;
        }
        while (comand !== "Finish") {
            let sport = comand;
            let result = input[index];
            index++;
            switch (result) {
                case "win":
                    cashforDay += wincash;
                    wincounter++;
                    comand = input[index];
                    index++;
                    break;
                case "lose":
                    losecounter++;
                    comand = input[index];
                    index++;
                    break;


            }


        }
    }
    if (wincounter > losecounter) {
        cashforDay = cashforDay + (cashforDay * 0.10);
        totalMoneyForDay += cashforDay;
        windays++;

    }
    if (windays > losedays) {
        totalMoneyForDay = totalMoneyForDay + (totalMoneyForDay * 0.20);

        console.log(`You won the tournament! Total raised money: ${totalMoneyForDay.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyForDay.toFixed(2)}`)
    }
}

solve(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
