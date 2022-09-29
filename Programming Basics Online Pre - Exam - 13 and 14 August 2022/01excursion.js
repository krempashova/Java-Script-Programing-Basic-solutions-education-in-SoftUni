function excursion(input) {
    let numPeopleInGroup = Number(input[0]);
    let numOfNights = Number(input[1]);
    let numCardsOnePerson = Number(input[2]);
    let numMuseumTicketsOnePerson = Number(input[3]);
let MoneyForpersonNights=numOfNights*20;
let totalcards=numCardsOnePerson*1.60;
let totalmuseum=numMuseumTicketsOnePerson*6;
let totalforonePerson=MoneyForpersonNights+totalcards+totalmuseum;
let totalforallgroups=numPeopleInGroup*totalforonePerson;
totalforallgroups=totalforallgroups+(totalforallgroups*0.25);
console.log(totalforallgroups.toFixed(2));

}
excursion(["131",
"9",
"33",
"46"])

