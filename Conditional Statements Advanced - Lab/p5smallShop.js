function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sumproduct = 0;
    if (city === "Sofia") {
        if (product === "coffee") {
            sumproduct = quantity * 0.50;

        }

        else if (product === "water") {
            sumproduct = quantity * 0.80;

        }

        else if (product === "beer") {
            sumproduct = quantity * 1.20;
        }

        else if (product === "sweets") {

            sumproduct = quantity * 1.45;
        }

        else if (product === "peanuts") {

            sumproduct = quantity * 1.60;
        }
        console.log(sumproduct);

    }


    else if (city === "Plovdiv") {


        if (product === "coffee") {
            sumproduct = quantity * 0.40;
        }

        else if (product === "water") {
            sumproduct = quantity * 0.70;
        }

        else if (product === "beer") {

            sumproduct = quantity * 1.15;
        }

        else if (product === "sweets") {
            sumproduct = quantity * 1.30;
        }

        else if (product === "peanuts") {

            sumproduct = quantity * 1.50;
        }
        console.log(sumproduct);
    }


        //coffee	water	beer	sweets	peanuts
    else if(city==="Varna"){


if(product==="coffee") {
    sumproduct = quantity * 0.45; }

    else if(product==="water"){
        sumproduct = quantity * 0.70;}

    else if(product==="beer"){

     sumproduct = quantity * 1.10;}

    else if(product==="sweets"){

    sumproduct = quantity * 1.35;}


    else if(product==="peanuts"){

     sumproduct = quantity * 1.55; }
     console.log(sumproduct);
}
}

    //coffee	water	beer	sweets	peanuts




smallShop(["sweets",
"Sofia",
"2.23"])



