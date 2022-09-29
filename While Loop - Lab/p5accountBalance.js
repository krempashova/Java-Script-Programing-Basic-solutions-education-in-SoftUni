function accountBalance(input){
let index=0;
let account=0;
let contribution=input[index];
index++;

while(contribution!=="NoMoreMoney"){
    contribution=Number(contribution);
    if(contribution<0){
        console.log(`Invalid operation!`);
        break;
    }

account+=contribution;
console.log(`Increase: ${contribution.toFixed(2)}`);

contribution=(input[index]);
index++;
}
console.log(`Total: ${account.toFixed(2)}`);




}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])