function areaofFigures(input){
//square, rectangle, circle или triangle
let type=input[0];
let a=0;
let area=0;
if(type==="square")
{
     a=Number(input[1]);
     area=a*a;

}
else if(type==="rectangle")
{
    a=Number(input[1]);
    let b=Number(input[2]);
    area=a*b

}
else if(type==="circle")
{
    a=Number(input[1]);
    area=Math.PI*a*a;
}
else
{
    a=Number(input[1]);
    let h=Number(input[2]);
    area=a*h/2;
}
console.log(area.toFixed(3));
}
areaofFigures(["triangle", "4.5", "20"])