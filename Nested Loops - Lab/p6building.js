function building(input) {
    let floors = Number(input[0]);
    let numRooms = Number(input[1]);
    for (let fl = floors; fl > 0; fl--) {
        let buff = "";
        for (let r = 0; r < numRooms; r++) {
            if (fl === floors) {


                buff += `L${fl}${r} `
            }
            else if(fl%2===0){
                buff += `O${fl}${r} `
            }
            else{
                buff+=`A${fl}${r} `
            }
        }
        console.log(buff);
    }

} building(["9", "5"])