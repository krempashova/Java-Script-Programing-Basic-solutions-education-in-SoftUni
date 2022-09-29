function cinemaTickets(input) {
    let index = 0;
    let comand = input[index];
    index++;
    let studendticketCounter = 0;
    let standardTicketCounter = 0;
    let kidTicketCounter = 0;
    while (comand !== "Finish") {
        let nameOfmovie = comand;
        let freeSraces = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let takenTicket = 0;
        while (ticketType !== "End") {
            takenTicket++;
            switch (ticketType) {
                case "standard":
                    standardTicketCounter++;
                    break;
                case "student":
                    studendticketCounter++;
                    break;
                case "kid":
                    kidTicketCounter++;
                    break;
            }

            if (takenTicket === freeSraces) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        let procentigeforMovie = takenTicket / freeSraces * 100;
        console.log(`${nameOfmovie} - ${procentigeforMovie.toFixed(2)}% full.`)
        comand = input[index];
        index++;

    }
    let totalTickets = studendticketCounter + standardTicketCounter + kidTicketCounter;
    console.log(`Total tickets: ${totalTickets}`);
    let precentigestudentTikets = studendticketCounter / totalTickets * 100;
    let precentigestandardTickets = standardTicketCounter / totalTickets * 100;
    let precentigekidsTickets = kidTicketCounter / totalTickets * 100;
    console.log(`${precentigestudentTikets.toFixed(2)}% student tickets.`);
    console.log(`${precentigestandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${precentigekidsTickets.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
