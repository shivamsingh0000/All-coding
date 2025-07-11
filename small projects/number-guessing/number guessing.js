const min = 1;
const max = 10;
const ans = Math.floor(Math.random()*(max - min + 1));


let attempts = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`guess a number between ${min} - ${max} `)
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("too low");
        }
        else if(guess > ans){
            window.alert("too high");
        }
        else{
            window.alert(`correct ans was ${ans}, it took you ${attempts} to guess`);
            running = false;
        }
    }
   
}
