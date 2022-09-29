function examPreparation(input) {
    let index = 0;
    let totalGrades = 0;
    let numBadGrades = 0;
    let counterGrades = 0;
    let googGradescounter = 0;
    let nameOfTask;
    let numOfNegativeGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++
    while (command !== "Enough") {
        nameOfTask = command;
        let grade = Number(input[index]);
        index++;
        totalGrades += grade;
        if (grade <= 4) {
            numBadGrades++;
            if (numBadGrades >= numOfNegativeGrades) {
                break;
            }
        }
        else {
            googGradescounter++;
        }
        counterGrades++;
        command = input[index];
        index++;
    }
    if (command === "Enough") {
        let averageCsore = totalGrades / counterGrades;
        console.log(`Average score: ${averageCsore.toFixed(2)}`);
        console.log(`Number of problems: ${counterGrades}`);
        console.log(`Last problem: ${nameOfTask}`);
    }
    else if (numBadGrades >= numOfNegativeGrades) {
        console.log(`You need a break, ${numBadGrades} poor grades.`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

