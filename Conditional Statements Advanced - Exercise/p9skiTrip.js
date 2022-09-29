function skiTrip(input) {
    let days = Number(input[0])
    let typeRoom = input[1];
    let raiting = input[2];
    let night = days - 1;
    let priceForAllVacantion=0;
    switch (typeRoom) {
        case "room for one person":
            priceForAllVacantion=night*18;
            break;
        case "apartment":
            priceForAllVacantion=night*25;
            if(night<10){
                priceForAllVacantion=priceForAllVacantion*0.7;
            }
            else if(night<=15){
                priceForAllVacantion=priceForAllVacantion*0.65;
            }
            else{
                priceForAllVacantion=priceForAllVacantion*0.5;
            }
            break;
        case "president apartment":
            priceForAllVacantion=night*35;
            if(night<10){
                priceForAllVacantion=priceForAllVacantion*0.90;
            }else if(night<=15){
                priceForAllVacantion=priceForAllVacantion*0.85;
            }else{
                priceForAllVacantion=priceForAllVacantion*0.80;
            }
            break;
    }
    if(raiting==="positive"){
        priceForAllVacantion=priceForAllVacantion*0.25+priceForAllVacantion;
    }else{

        priceForAllVacantion=priceForAllVacantion*0.9;
    }
    console.log(priceForAllVacantion.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])


