function oscars(input) {
    let actorName = input[0];
    let academypoints = Number(input[1]);
    let judgeCounter = Number(input[2]);
    let totalPoints = academypoints;
    for (let i = 3; i < input.length; i+= 2) {
        let judgeName = input[i];
        let pointsGiven = Number(input[i + 1]);
        totalPoints += judgeName.length * pointsGiven / 2;
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
            return;
        }
    }
    let neededPoints = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)



}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])