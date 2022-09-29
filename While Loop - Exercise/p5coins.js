function coins(input) {
    let change=Number(input[0]);
    let coincounter = 0;
    while (change > 0) {
        if (change >= 2) {
            change -= 2;
        }
        else if (change >= 1) {
            change -= 1;
        }
        else if (change >= 0.5) {
            change -= 0.5;
            
        }
        else if (change >= 0.2) {
            change -= 0.2;

        }
        else if (change >= 0.1) {
            change -= 0.1;
        }
        else if (change >= 0.05) {
            change -= 0.05;
        } else if (change >= 0.02) {
            change -= 0.02;
        }
        else {
            change -= 0.01;
        }
        change=(change.toFixed(2));
        change=Number(change);
        
        coincounter++;
    }
 console.log(coincounter);
}
coins(["2.73"])