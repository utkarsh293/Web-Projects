var login = document.querySelector('#login')
var reg = document.querySelector('#reg')

login.addEventListener('click' , function(){
    login.style.transform = 'translateX(-100%)'
    reg.style.transform =  'translateX(-100%)'
})

reg.addEventListener('click' , function(){
    reg.style.transform = 'translateX(0%)'
    login.style.transform =  'translateX(0%)'
})