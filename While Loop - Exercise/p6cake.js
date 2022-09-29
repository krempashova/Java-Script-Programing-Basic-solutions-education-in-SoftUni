function cake(input) {
    let index = 0;
    let highCake = Number(input[index]);
    index++;
    let widthCake = Number(input[index]);
    index++;
    let NumPieces = highCake * widthCake;
    let leftPieses = NumPieces;
    let command = input[index];
    index++
    while (command !== "STOP") {
        command = Number(command);
        leftPieses -= command;
        if (leftPieses <= 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "STOP") {
        console.log(`${leftPieses} pieces are left.`);
    }
    else {
        console.log(`No more cake left! You need ${Math.abs(leftPieses)} pieces more.`)
    }

}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
