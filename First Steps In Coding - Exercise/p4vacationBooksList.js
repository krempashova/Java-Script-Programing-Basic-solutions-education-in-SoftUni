function vacationBooksList(input){
let numberOfPages=Number(input[0]);
let pagesReedenForOneHour=Number(input[1]);
let numerDAYS=Number(input[2]);
let neededHoursForOneBook=numberOfPages/pagesReedenForOneHour;
let result=neededHoursForOneBook/numerDAYS;
console.log(result);

}
vacationBooksList(["432 ",
"15 ",
"4 "]
)
