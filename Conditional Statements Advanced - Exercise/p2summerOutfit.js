function summerOutfit(input){
let degress=Number(input[0]);
let typeOfDay=input[1];
let outfit;
let shoes;
if(degress>=10 && degress<=18){
    if(typeOfDay==="Morning"){
        outfit="Sweatshirt";
        shoes="Sneakers";
    }
    else if(typeOfDay==="Afternoon" || typeOfDay==="Evening"){
        outfit="Shirt";
        shoes="Moccasins";
    }
}
else if(degress>18 && degress<=24){
    if(typeOfDay==="Morning" || typeOfDay==="Evening"){
        outfit="Shirt";
        shoes="Moccasins";
    }
    else if(typeOfDay==="Afternoon"){
        outfit="T-Shirt";
        shoes="Sandals";
    }
    
}
else if(degress>=24){
    if(typeOfDay==="Morning"){
        outfit="T-Shirt";
        shoes="Sandals";
    }
    else if(typeOfDay==="Afternoon"){
        outfit="Swim Suit";
        shoes="Barefoot";
    }
    else if(typeOfDay==="Evening"){
        outfit="Shirt";
        shoes="Moccasins";
    }
}
console.log(`It's ${degress} degrees, get your ${outfit} and ${shoes}.`)

}
summerOutfit(["28",
"Evening"])

