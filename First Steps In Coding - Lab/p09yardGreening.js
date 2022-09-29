function yardGreenings(input){
let greenspaceInKm=Number(input[0])
let totalPriceForGreening=greenspaceInKm*7.61
let discount=totalPriceForGreening*0.18
let totalAfterDiscount=totalPriceForGreening-discount
let result=`The final price is: ${totalAfterDiscount} lv.`
let resultdiscount=`The discount is: ${discount} lv.`
console.log(result)
console.log(resultdiscount)

}
yardGreenings(['550'])