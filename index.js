// Code your solutions in this file

const donors=["Guadalupe", "Ollie", "Aki"];
let thankYouMessages=[];
function writeCards(donors){
    for (let i = 0; i < donors.length; i++) {
    thankYouMessages.push(`Thank you, ${donors[i]}, for the wonderful surprise gift!`) 
    }
    return thankYouMessages;
}
function countDown (){
    for (let number=10; number>-1; number-=1)
    {console.log(number);}
}