function fishTank(input){
let l=Number(input[0]);
let w=Number(input[1]);
let h=Number(input[2]);
let precentigeUsedSpace=Number(input[3]);
let vollumetank=l*w*h;
let vollumetankInLitters=vollumetank/1000;
let precentige=vollumetankInLitters*(precentigeUsedSpace/100);
let nedeedwater=vollumetankInLitters-precentige;
console.log(nedeedwater)

}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "])
