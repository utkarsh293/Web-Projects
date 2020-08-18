var counterValue = 0
var counterValueDiv = document.querySelector('#countervalue')
var plusbtn = document.querySelector('#plus')
var minusbtn = document.querySelector('#minus')
plusbtn.addEventListener('click' , function(){
    counterValue++;
    counterValueDiv.textContent = counterValue

})

minusbtn.addEventListener('click' , function(){
    if(counterValue > 0){
        counterValue--;
    }
    counterValueDiv.textContent = counterValue

})