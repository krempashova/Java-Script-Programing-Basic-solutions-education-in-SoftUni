function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let priceWashmashine = Number(input[1]);
    let priceOneToy = Number(input[2]);
    let totalSumLily = 0;
    let piggyBank = 0;
    let cashGift = 10;
    let toyscounter = 0;
    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 === 0) {
            piggyBank += cashGift;
            cashGift += 10;
            piggyBank--;

        }
        else {
            toyscounter++;
        }
    }
    totalSumLily = piggyBank + (priceOneToy * toyscounter);
    if (totalSumLily >= priceWashmashine) {
        let leftMoney = totalSumLily - priceWashmashine;
        console.log(`Yes! ${(leftMoney.toFixed(2))}`)
    }
    else {
        let inssuficientMoney = priceWashmashine - totalSumLily;
        console.log(`No! ${(inssuficientMoney.toFixed(2))}`)
    }

} cleverLily(["21",

"1570.98",

"3"]) 


