function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function uniqueRandomNumber(array,number){
    let check = false
    while(check=== false){
        
        if(!array.includes(number)){
            check = true
        }
      
    }
    return true;
}

function getUserNumbers(){
    let usersnumbers = [];

    while(usersnumbers.length<5){
        let number = parseInt(prompt('inserisci un numero'));

        if(!usersnumbers.includes(number)){
            usersnumbers.push(number)
        }
    }
    return usersnumbers;
}

let randomnumbers= [];


for(let i=0; i<5; i++){
let number =generateRandomNumber(1,50);

if(uniqueRandomNumber(randomnumbers,number)){
    randomnumbers.push(number);
}
}
console.log(randomnumbers);
document.getElementById('random-numbers').innerHTML = randomnumbers;

setTimeout(function(){
    document.getElementById('random-numbers').innerHTML = '';
    document.getElementById('message').innerHTML = 'inserire i numeri che ti ricordi';

}, 30000);


setTimeout(function(){
   let usersnumbers = getUserNumbers();
   let guessednumbers = [];
   let score = 0;
   console.log(usersnumbers);

   for(let i=0; i<randomnumbers.length; i++){
    if(randomnumbers.includes(usersnumbers[i])){
        guessednumbers.push (usersnumbers[i]);
        score++;
    }
   }
   document.getElementById('message').innerHTML = `hai indovinato ${score} numeri. i numeri corretti sono ${guessednumbers}`;

}, 31000);


