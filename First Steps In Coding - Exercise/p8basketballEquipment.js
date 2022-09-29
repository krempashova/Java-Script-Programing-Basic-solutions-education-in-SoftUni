function basketballEquipment(input){
let yearTax=Number(input[0]);
let sneakers=yearTax-(yearTax*0.40);
let teamClothes=sneakers-(sneakers*0.20);
let ball=teamClothes/4;
let accsesoares=ball/5;
let totaToPay=yearTax+sneakers+teamClothes+ball+accsesoares;
console.log(totaToPay);

}
basketballEquipment(
    ["550 "]
    )