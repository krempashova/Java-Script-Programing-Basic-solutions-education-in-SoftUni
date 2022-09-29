function solve(input) {
    let index = 0;
    let daysOfTounaments = Number(input[index]);
    index++;
    let wincash = 20;
    let windays = 0;
    let losedays = 0;
    let totalMoney = 0;
    for (let i = 1; i <= daysOfTounaments; i++) {
        let command = input[index];
        index++;
        let moneyForDay = 0;
        let winCounter = 0;
        let loseCounter = 0;

        while (command !== "Finish") {
            let sport = command;
            let result = input[index];
            index++;
            switch (result) {
                case "win":
                    winCounter++;
                    moneyForDay += wincash;
                    break;
                case "lose":
                    loseCounter++;
                    break;
            }
            command = input[index];
            index++;

        }
        if (winCounter > loseCounter) {
            windays++;
            moneyForDay = moneyForDay + (moneyForDay * 0.10);
        }
        else {
            losedays++;
        }
        totalMoney += moneyForDay;
    }
    if (windays > losedays) {
        totalMoney = totalMoney + (totalMoney * 0.20);
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }


}
solve(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])

