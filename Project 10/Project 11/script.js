var overlay = document.querySelector('#overlay')
let timeline = gsap.timeline();
timeline.to('#overlay' , {
    duration: 1 , 
    width: 4000 ,
    height: 4000 , 
    ease: 'expo.inOUt' 

})

.to('#overlay h1 span' , {
    duration: 1.5 , 
    top: '0%' ,
    ease: 'expo.inOUt' 

})

.to('#overlay h1 span' , {
    duration: 1.5 , 
    delay: 1 , 
    top: '-100%' , 
    ease: 'expo.inOUt' 
})

.to('#overlay' , {
    duration: .5 , 
    opacity: 0 , 
    onComplete: function(){
        overlay.style.display = 'none';
    }
})

.from('#nav h4' , {
    opacity: 0 , 
    duration: 1 , 
    x: 40 , 
    ease: 'expo.inOut'
})

.from('#nav #icons i' , {
    stagger: .3 , 
    opacity: 0 , 
    duration: .8 , 
    x: 40 , 
    ease: 'expo.inOut'
})

.from('#mainDets .line' , {
    width: 0 , 
    duration: 1.5 , 
    ease: 'expo.inOut' , 
    delay: .5
})

.from('#mainDets .detsAnim' , {
    stagger: 0.2 ,
    opacity: 0 , 
    y: 10 ,
    delay: -1.6 ,   
    duration: 1.5 , 
    ease: 'expo.inOut'
})

.from('#scroller' , {
    scale: 1.1 , 
    opacity: 0 , 
    delay: -.5 ,  
    duration: 1.5 , 
    ease: 'expo.inOut'
})

.from('#right #links a' , {
    stagger: .2 , 
    opacity: 0 , 
    delay: .2 ,
    x: -40 ,   
    duration: .5 , 
    ease: 'expo.inOut'
})

gsap.from('#center img' , {
    opacity: 0 , 
    duration: 2 , 
    delay: 7.5 , 
    ease: 'expo.inOut'
})





