function trekkingMania(input) {
    let numGroups = Number(input[0]);
    let peopleConter = 0;
    let mussalaGroup = 0;
    let monblanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    for (let i = 1; i <= numGroups; i++) {
        let numPeopleInGroup = Number(input[i])
        peopleConter += numPeopleInGroup;
        if (numPeopleInGroup <= 5) {
            mussalaGroup += numPeopleInGroup;


        }
        else if (numPeopleInGroup <= 12) {
            monblanGroup += numPeopleInGroup;

        }
        else if (numPeopleInGroup <= 25) {
            kilimandjaroGroup += numPeopleInGroup;

        } else if (numPeopleInGroup <= 40) {
            k2Group += numPeopleInGroup;

        } else if (numPeopleInGroup >= 41) {
            everestGroup += numPeopleInGroup;

        }
    }
    let procentigeMussala = mussalaGroup / peopleConter * 100;
    let procentigeMonblan = monblanGroup / peopleConter * 100;
    let procentigeKilimandjaro = kilimandjaroGroup / peopleConter * 100;
    let procentigeK2 = k2Group / peopleConter * 100;
    let pricentigeEverest = everestGroup / peopleConter * 100;
    console.log(`${procentigeMussala.toFixed(2)}%`);
    console.log(`${procentigeMonblan.toFixed(2)}%`);
    console.log(`${procentigeKilimandjaro.toFixed(2)}%`);
    console.log(`${procentigeK2.toFixed(2)}%`);
    console.log(`${pricentigeEverest.toFixed(2)}%`);
}


trekkingMania(["5", "25", "41", "31", "250", "6"])
