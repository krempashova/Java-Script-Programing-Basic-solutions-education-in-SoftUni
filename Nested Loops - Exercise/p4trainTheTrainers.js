function trainTheTrainers(input) {
    let index=0;
    let jurycounter=Number(input[index]);
    index++;
    let command=input[index];
    index++;
    let avderageGrade=0;
    let totalGrades=0;
    let presentationCounter=0;
    let allgrades=0;
    while(command!=="Finish"){
        let presentationName=command;
        presentationCounter++;
        for(let i=1;i<=jurycounter;i++){
            let grade=Number(input[index]);
            index++;
            totalGrades+=grade;
        }
        avderageGrade=totalGrades/jurycounter;
        console.log(`${presentationName} - ${avderageGrade.toFixed(2)}.`);
      allgrades+=totalGrades;
       totalGrades=0
        command=input[index];
        index++;
    }
    let totalaverageGrades=allgrades/(presentationCounter*jurycounter);
 console.log(`Student's final assessment is ${totalaverageGrades.toFixed(2)}.`)

}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


