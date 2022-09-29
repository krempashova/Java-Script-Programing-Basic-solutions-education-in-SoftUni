function hotelRoom(input) {

    let month = input[0];
    let numNights = Number(input[1]);
    let pricestudio = 0;
    let priceapartment = 0;
    if (month === "May" || month === "October") {
        pricestudio = 50;
        priceapartment = 65;
        if (numNights >7 && numNights<14) {
            pricestudio = pricestudio - (pricestudio * 0.05);
            priceapartment = 65;
        }
        else if (numNights > 14) {
            pricestudio = pricestudio - (pricestudio * 0.30);
            priceapartment = priceapartment - (priceapartment * 0.10);
        }
    }
    else if (month === "June" || month === "September") {
        pricestudio = 75.20;
        priceapartment = 68.70;
        if (numNights > 14) {
            pricestudio = pricestudio - (pricestudio * 0.20);
            priceapartment = priceapartment - (priceapartment * 0.10);
        }
    }
    else if (month === "July" || month === "August") {
        pricestudio = 76;
        priceapartment = 77;
        if (numNights > 14) {
            pricestudio = 76;
            priceapartment = priceapartment - (priceapartment * 0.10);
        }
    }
let totaltoPaystudio=numNights*pricestudio;
let totaltoPayApartment=numNights*priceapartment;
    console.log(`Apartment: ${totaltoPayApartment.toFixed(2)} lv.`);
console.log(`Studio: ${totaltoPaystudio.toFixed(2)} lv.`);
}
//hotelRoom(["May","15"])
hotelRoom(["August",
"6"])


