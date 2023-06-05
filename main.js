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

let randomnumbers= [];
let usersnumbers= [];

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

}, 5000);




