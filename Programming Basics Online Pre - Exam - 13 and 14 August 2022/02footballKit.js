function footballKit(input) {
    let pricetshirt = Number(input[0]);
    let bugdetForWinBall = Number(input[1]);
  let priceShorts=pricetshirt*0.75;
  let priceSocks=priceShorts*0.20;
  let buttons=(priceShorts+pricetshirt)*2;
  let totalForEqupment=pricetshirt+priceShorts+priceSocks+buttons;
  totalForEqupment=totalForEqupment-(totalForEqupment*0.15);
if(totalForEqupment>=bugdetForWinBall){
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${totalForEqupment.toFixed(2)} lv.`);}
    else{
        let diff=bugdetForWinBall-totalForEqupment;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);

    }

}
footballKit(["59.99",
"500"])


