function newHouse(input) {
    //Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    //цвете	Роза	Далия	Лале	Нарцис	Гладиола
    //Ценa	5	      3.80	2.80	 	3      2.50
    let typeofFlowers = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalForFlowers=0;
    switch (typeofFlowers) {
        case "Roses":
            totalForFlowers=numOfFlowers*5;
            if(numOfFlowers>80){
                totalForFlowers=totalForFlowers*0.9;
            }
            break;
        case "Dahlias":
            totalForFlowers=numOfFlowers*3.80;
            if(numOfFlowers>90){
                totalForFlowers=totalForFlowers*0.85;
            }
            break;
        case "Tulips":
            totalForFlowers=numOfFlowers*2.80;
            if(numOfFlowers>80){
                totalForFlowers=totalForFlowers*0.85;
            }
            break;
        case "Narcissus":
            totalForFlowers=numOfFlowers*3;
            if(numOfFlowers<120){
                totalForFlowers=totalForFlowers*1.15;
            }
            break;
        case "Gladiolus":
            totalForFlowers=numOfFlowers*2.50;
            if(numOfFlowers<80){
                totalForFlowers=totalForFlowers*1.20;
            }
            break;
    }
if(budget>=totalForFlowers){
    let moneyleft=budget-totalForFlowers;
    console.log(`Hey, you have a great garden with ${numOfFlowers} ${typeofFlowers} and ${moneyleft.toFixed(2)} leva left.`)
}
else{
    let inssuficient=totalForFlowers-budget;
    console.log(`Not enough money, you need ${inssuficient.toFixed(2)} leva more.`)
}

}
newHouse(["Narcissus",
"119",
"360"])



