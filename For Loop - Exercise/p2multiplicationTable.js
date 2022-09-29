function multiplicationTable(input){
    let multiplier=Number(input[0]);
    for(let i=1;i<=10;i++){
        let result=i*multiplier;
  console.log(`${i} * ${multiplier} = ${result}`);
    }


} 
multiplicationTable(["5"])