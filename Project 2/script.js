var btn = document.querySelector('#btn');
var msg = document.querySelector('#msg');
var final = document.querySelector('#messagewell')
btn.addEventListener('click' , function(){
    var message = msg.value;
    final.textContent = message;
    msg.value = '' ;
})
