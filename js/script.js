const paraTimer = document.querySelector(".para-display-timer");
const startBtn = document.querySelector(".start-timer");
const stopBtn = document.querySelector(".stop-timer");
const paraStart = document.querySelector(".start-text");
const headingText = document.querySelector(".heading-text");
const paraIntervallCounter = document.querySelector(".intervall-counter-number");

let play = true;
let workIntervall = true;
let intervallLength = 10;
let numberOfIntervalls = 0;

headingText.innerHTML = "Never give up. <span>Your</span> work is important."

let sessionsCompleted = 0;
let startOfTimer;
let seconds = 59;
let minutes = 24;

startBtn.addEventListener("click",function(e){
    if(play){
        updateCountdown();
        startOfTimer = setInterval(updateCountdown, intervallLength);
        paraStart.textContent = "pause";
        play = false;
    }else{
        paraStart.textContent = "start";
        clearInterval(startOfTimer);
        play = true;
    }
    
});

stopBtn.addEventListener("click",function(e){
    clearInterval(startOfTimer);
    minutes = 25;
    seconds = 0;
    updateCountdown();
    paraStart.textContent = "start";
});


function updateCountdown(){
    if(minutes == 0 && seconds < 0){
        clearInterval(startOfTimer);
        if(workIntervall){
            completedSession();
            workIntervall = false;
        }else{
            minutes = 25;
            seconds = 0;
            startOfTimer = setInterval(updateCountdown, intervallLength);
            updateCountdown();
            headingText.innerHTML = "Never give up. <span>Your</span> work is important."
            workIntervall = true;
        }
    }else{
        if(seconds < 0){
            minutes--;
            seconds = 59;
        }
        if(seconds > 9){
            paraTimer.textContent = minutes+":"+seconds
        }else{
            paraTimer.textContent = minutes+":"+"0"+seconds;
        }
        seconds--;
    }   
}

function completedSession(){
    headingText.innerHTML = "Wow you made it. Enjoy <span>Your</span> pause."
    seconds = 0;
    minutes = 5;
    updateCountdown();
    startOfTimer = setInterval(updateCountdown, intervallLength);
    numberOfIntervalls++;
    paraIntervallCounter.textContent = numberOfIntervalls;
}

// startOfTimer = setInterval(updateCountdown, 1000);