var bottom = document.querySelector('#bottom');
var hit = document.querySelector('#hit')
var score = document.querySelector('#score')
var time = document.querySelector('#time')
var hitValue
var scoreValue = 0;
var timerValue = 60;
function bubbleCreator(){
    for(var i = 0; i<95; i++){
        var randomNumber = Math.floor(Math.random() * 10)
        bottom.innerHTML += `<div class = 'bubble'>${randomNumber}</div>`
    }
}

bubbleCreator();

bottom.addEventListener('click' , function(details){
    var numberValue = Number(details.target.innerText);
    if (numberValue === hitValue){
        increaseScore();
        bottom.innerHTML = ''
        bubbleCreator();
        getHitValue();
    }
})

function getHitValue(){
    hitValue = Math.floor(Math.random() *10);
    hit.innerText = hitValue;
}

function increaseScore(){
    scoreValue += 10;
    score.innerText = scoreValue;
}

setInterval(function(){
    if (timerValue > 0){
        timerValue = timerValue - 1;
        time.innerText = timerValue;
    }
} , 1000)

getHitValue();
