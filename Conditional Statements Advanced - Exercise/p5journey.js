function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destnation;
    let pricevacantion=0;
   let typeOfvacantion;
    switch (season) {
        case "summer":
            if(budget<=100){
       destnation="Bulgaria";
       typeOfvacantion="Camp";
   pricevacantion=budget*0.30;
            }
            else if(budget<=1000){
                destnation="Balkans";
                typeOfvacantion="Camp"
                pricevacantion=budget*0.40;
            }
            else{
                destnation="Europe";
                typeOfvacantion="Hotel";
                pricevacantion=budget*0.90;
            }
            break;
        case "winter":
            if(budget<=100){
       destnation="Bulgaria";
       typeOfvacantion="Hotel";
       pricevacantion=budget*0.7;
            }
            else if(budget<=1000){
                destnation="Balkans";
                typeOfvacantion="Hotel";
                pricevacantion=budget*0.80;
            }
            else {
                destnation="Europe";
                typeOfvacantion="Hotel";
                pricevacantion=budget*0.90;
            }

            
            break;
    }
    console.log(`Somewhere in ${destnation}`);
    console.log(`${typeOfvacantion} - ${pricevacantion.toFixed(2)}`);
}
//journey(["50", "summer"])
//journey(["75", "winter"])
//journey(["312", "summer"])
//journey(["678.53", "winter"])
journey(["1500", "summer"])