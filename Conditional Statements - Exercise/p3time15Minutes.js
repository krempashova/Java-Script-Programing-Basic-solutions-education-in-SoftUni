function time15Minutes(input){
let hour=Number(input[0]);
let minutes=Number(input[1]);
let newminutes=minutes+15;
if(newminutes>59){
    hour+=1;
    newminutes=newminutes-60;
}

if(hour>23){
    hour=0;
   
}

if(newminutes<10){
    minutes=newminutes;
    console.log(`${hour}:0${minutes}`);
}
else
{
    console.log(`${hour}:${newminutes}`);
}

}

time15Minutes(["23", "44"])