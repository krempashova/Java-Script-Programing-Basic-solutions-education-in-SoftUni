
function solve(input) {
    let index = 0;
    let studentName = input[index];
    index++;
    let classCounter = 1;
    let totalGrade = 0;
    let badcounter = 0;
    while (classCounter <= 12) {
        let currentNum = Number(input[index]);
        index++;
        if (currentNum >= 4) {
            totalGrade += currentNum;
            classCounter++;
            continue;
        }
        if (currentNum < 4) {
            badcounter++;
        }
        if (badcounter > 1) {
            break;
        }

    }
    if(badcounter>1){
        console.log(`${studentName} has been excluded at ${classCounter} grade`);
    }
    else{
        let averageGrade=totalGrade/12;
console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }


}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

