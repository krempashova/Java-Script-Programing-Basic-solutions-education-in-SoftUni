function petShop(input){
let numberCatFood=Number(input[1])
let numberDogFood=Number(input[0])
let catFoodPrice=numberCatFood*4
let dogFoodprice=numberDogFood*2.5

let totalPriceFood=catFoodPrice+dogFoodprice
console.log(totalPriceFood)

}
petShop(['5' ,'4'])