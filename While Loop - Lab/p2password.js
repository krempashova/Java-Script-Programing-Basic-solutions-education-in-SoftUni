function password(input){
    let index=0;
    let usserName=input[index];
    index++;
    let password=input[index];
    index++;
    let currentpass=input[index];
index++;
while(password!==currentpass){
    currentpass=input[index];
    index++;
}
console.log(`Welcome ${usserName}!`)


}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])