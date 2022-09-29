function moving(input) {
    let index = 0;
    let widthFreeSpace = Number(input[index]);
    index++;
    let lengthFreeSpace = Number(input[index]);
    index++;
    let highfreeSpace = Number(input[index]);
    index++;
    let totalFreeSpace = widthFreeSpace * lengthFreeSpace * highfreeSpace;
    let usedSpace = 0;
    let command = input[index];
    index++;
    while (command !== "Done") {
        command = Number(command);
        usedSpace += command;
        if (usedSpace >= totalFreeSpace) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${totalFreeSpace - usedSpace} Cubic meters left.`)
    }
    else {
        console.log(`No more free space! You need ${usedSpace - totalFreeSpace} Cubic meters more.`)
    }



}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

