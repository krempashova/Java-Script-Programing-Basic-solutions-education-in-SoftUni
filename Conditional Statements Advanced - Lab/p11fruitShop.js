function fruitShop(input) {
    let fruit = input[0];
    let dayofWeek = input[1];
    let quantity = Number(input[2]);
    let totalpricefruit = 0;
    if (dayofWeek==="Monday" || dayofWeek==="Tuesday" || dayofWeek==="Wednesday" ||dayofWeek==="Thursday" || dayofWeek==="Friday") {
            if (fruit === "banana") {
                totalpricefruit = quantity * 2.50;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "apple") {
                totalpricefruit = quantity * 1.20;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "orange") {
                totalpricefruit = quantity * 0.85;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "grapefruit") {
                totalpricefruit = quantity * 1.45;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "kiwi") {
                totalpricefruit = quantity * 2.70;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "pineapple") {
                totalpricefruit = quantity * 5.50;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "grapes") {
                totalpricefruit = quantity * 3.85;
                console.log(totalpricefruit.toFixed(2));
            }
            else {
                console.log("error");
            }
        }
    
    else if(dayofWeek==="Saturday" || dayofWeek==="Sunday"){
            if (fruit === "banana") {
                totalpricefruit = quantity * 2.70;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "apple") {
                totalpricefruit = quantity * 1.25;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "orange") {
                totalpricefruit = quantity * 0.90;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "grapefruit") {
                totalpricefruit = quantity * 1.60;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "kiwi") {
                totalpricefruit = quantity * 3.00;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "pineapple") {
                totalpricefruit = quantity * 5.60;
                console.log(totalpricefruit.toFixed(2));
            }
            else if (fruit === "grapes") {
                totalpricefruit = quantity * 4.20;
                console.log(totalpricefruit.toFixed(2));
            }
            
        
    }
    else {
        console.log("error");
    }
    
}
fruitShop(["apple",
   "Workday",
    "2"])



