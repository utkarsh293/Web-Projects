var nav = document.querySelector('#nav')


window.addEventListener('scroll' , function(){
    if(this.window.scrollY > 100){
        nav.style.height = '80px' ; 
    }

    else{
        nav.style.height = '100px'
    }
    if(this.window.scrollY > 530){
        nav.style.backgroundColor = '#fff'
    }
    else{
        nav.style.backgroundColor = 'rgb(214, 84, 36)';
    }
})