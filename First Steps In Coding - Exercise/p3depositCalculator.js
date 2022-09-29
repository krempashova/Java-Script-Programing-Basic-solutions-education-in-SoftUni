function depositCalculator(input){
let depositSum=Number(input[0]);
let mountsCount=Number(input[1]);
let yearsprecentige=Number(input[2]);
let interestForYearInLeva=depositSum*(yearsprecentige/100);
//console.log(interestForYearInLeva)
let interestForOneMonth=interestForYearInLeva/12;
//console.log(interestForOneMonth)
let total=depositSum+(interestForOneMonth*mountsCount);
console.log(total);

      



}
depositCalculator(["2350",
"6 ",
"7 "]
)
