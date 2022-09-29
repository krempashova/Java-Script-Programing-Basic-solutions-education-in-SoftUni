function onTimefortheExam(input) {
    let timeOfExamStartHour = Number(input[0]);//9
    let timeOfExamStartMinutes = Number(input[1]);//30
    let hourOfstudentarrival = Number(input[2]);//9
    let minutesOfStudentArrival = Number(input[3]);//50
    let hourExamStarInMinutes = (timeOfExamStartHour * 60) + timeOfExamStartMinutes;//570
    let hourOfStudentArrivalInMinutes = (hourOfstudentarrival * 60) + minutesOfStudentArrival;//590
    let difference = hourExamStarInMinutes - hourOfStudentArrivalInMinutes;
    let hour = difference / 60;
    let leftminutes = difference % 60;
    if (difference >= 0 && difference <= 30) {
        console.log('On time');
        if (difference >= 1) {
            console.log(`${difference} minutes before the start`)
        }
    }
    else if (difference > 30) {
        if (difference <= 59) {
            console.log("Early");
            console.log(`${difference} minutes before the start`);
        }
        else {
            console.log("Early");
            console.log(`${hour}:0${leftminutes} hours before the start`);
        }
    }
    else if (difference < 0) {
        difference = Math.abs(difference);
        if (difference <= 59) {
            console.log("Late");
            console.log(`${difference} minutes after the start`);
        } else {
            hour = Math.floor(hour);
            leftminutes = Math.abs(leftminutes);
            console.log("Late");
            console.log(`${hour}:${leftminutes} hours after the start`);
        }
    }
}
onTimefortheExam(["11", "30", "8", "12"])
