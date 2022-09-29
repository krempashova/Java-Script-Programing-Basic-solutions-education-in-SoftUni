function computerFirm(input) {
    let index = 0;
    let numComputers = Number(input[index]);
    index++;
    let salesmade = 0;
    let totalsalesmade = 0;
    let totalraiting = 0;
    for (let i = 1; i <= numComputers; i++) {
        let currentNum=Number(input[index]);
        index++;
        let raiting = currentNum % 10;
        let possiblesales =Math.trunc( currentNum / 10);
        if (raiting === 2)
        {
            salesmade = 0;
            totalraiting += raiting;
        }
        else if (raiting === 3)
        {
            salesmade = possiblesales * 0.50;
            totalsalesmade += salesmade;
            totalraiting += raiting;
        }
        else if (raiting === 4)
        {
            salesmade = possiblesales * 0.70;
            totalsalesmade += salesmade;
            totalraiting += raiting;
        }
        else if (raiting === 5)
        {
            salesmade = possiblesales * 0.85;
            totalsalesmade += salesmade;
            totalraiting += raiting;
        }
        else if (raiting === 6)
        {
            salesmade = possiblesales;
            totalsalesmade += salesmade;
            totalraiting += raiting;
        }
                
}
let averageraiting = totalraiting /numComputers;
console.log(`${totalsalesmade.toFixed(2)}`);
console.log(`${averageraiting.toFixed(2)}`);
    }


computerFirm(["2",
"204",
"206"])



