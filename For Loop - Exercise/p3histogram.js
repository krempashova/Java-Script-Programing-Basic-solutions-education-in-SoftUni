function histogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let numcounter = 0;
    for (let i =1; i <= n; i++) {
        let num = Number(input[i]);
        numcounter = n;
        if (num < 200) {
            p1++;
        }
        else if (num >= 200 && num <= 399) {
            p2++;
        }
        else if(num>=400 && num<=599){
            p3++;
        }
        else if(num>=600 && num <=799){
            p4++;
        }
        else if(num>=800){
            p5++;
        }
    }
 let procentigeP1=(p1/numcounter)*100;
 console.log(procentigeP1.toFixed(2)+"%");
 let procentigeP2=(p2/numcounter)*100;
 console.log(procentigeP2.toFixed(2)+"%");
 let procentigeP3=(p3/numcounter)*100;
 console.log(procentigeP3.toFixed(2)+"%");
 let procentigeP4=(p4/numcounter)*100;
 console.log(procentigeP4.toFixed(2)+"%");
 let procentigeP5=(p5/numcounter)*100;
 console.log(procentigeP5.toFixed(2)+"%");



}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])