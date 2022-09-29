function courierExpress(input) {
    let packageInKg = Number(input[0]);
    let typeOfShipment = input[1];
    let distanceInKm = Number(input[2]);
    let priceForspeeding = 0;
    switch (typeOfShipment) {
        case "standard":
            if (packageInKg < 1) {
                priceForspeeding = distanceInKm * 0.03;

            }
            else if (packageInKg < 10) {
                priceForspeeding = distanceInKm * 0.05;


            }
            else if (packageInKg < 40) {
                priceForspeeding = distanceInKm * 0.10;
            }
            else if (packageInKg < 90) {
                priceForspeeding = distanceInKm * 0.15;
            }
            else if (packageInKg < 150) {
                priceForspeeding = distanceInKm * 0.20;
            }
            break;
        case "express":
            if (packageInKg < 1) {
                priceForspeeding = distanceInKm * 0.03;
                let totalraise = 0.80 * 0.03;
                let raiseInKg = totalraise * packageInKg;
                let totalRaiseForDistance = distanceInKm * raiseInKg;
                priceForspeeding += totalRaiseForDistance;

            }
            else if (packageInKg < 10) {
                priceForspeeding = distanceInKm * 0.05;
                totalraise=0.40*0.05;
                raiseInKg=totalraise*packageInKg;
                totalRaiseForDistance=distanceInKm*raiseInKg;
                priceForspeeding+=totalRaiseForDistance;
            }
            else if (packageInKg < 40) {
                priceForspeeding = distanceInKm * 0.10;
                totalraise=0.05*0.10;
                raiseInKg=totalraise*packageInKg;
                totalRaiseForDistance=distanceInKm*raiseInKg;
                priceForspeeding+=totalRaiseForDistance;

            }
            else if (packageInKg < 90) {
                priceForspeeding = distanceInKm * 0.15;
                totalraise=0.02*0.15;
                raiseInKg=totalraise*packageInKg;
                totalRaiseForDistance=distanceInKm*raiseInKg;
                priceForspeeding+=totalRaiseForDistance;

            }
            else if (packageInKg < 150) {
                priceForspeeding = distanceInKm * 0.20;
                totalraise=0.01*0.20;
                raiseInKg=totalraise*packageInKg;
                totalRaiseForDistance=distanceInKm*raiseInKg;
                priceForspeeding+=totalRaiseForDistance;

            }
            break;
    }


    console.log(`The delivery of your shipment with weight of ${packageInKg.toFixed(3)} kg. would cost ${priceForspeeding.toFixed(2)} lv.`);
}
courierExpress
(["87",
"express",
"130"])



