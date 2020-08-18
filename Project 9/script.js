

var tl = gsap.timeline();

tl.from('.parts' , {stagger: .1 , duration: 1.5  , ease: 'expo.Inout' , x: '30%' , opacity: 0})
.from('#svgs h3' , {delay: 4,  duration: 1.5 , scale: 1.2  , ease: 'expo.Inout' , y: '50%' , opacity: 0})
.to('#svgs' , {delay: 5 , duration: 1 , y: '-120%' , opacity: 0 , ease: 'expo.Inout'})
.to('.parts' , {stagger: .2 , delay: 7 , duration: 1.5 , y: '-100%' , opacity: 0 })
.to('overlay' , {stagger: .2 , delay: 7 , duration: 1.5 , y: '-100%' , opacity: 0 })

tl.from('#nav #left h4' , {
    duration: .8 ,
    opacity: 0 , 
    x: 30 , 
    ease: 'expo.Inout'    
})

.from('#nav #left a , #nav #right i' ,  {
    stagger: .2 , 
    duration: .5 ,
    delay: -0.6 , 
    opacity: 0 , 
    x: 30 , 
    ease: 'expo.Inout'    
})

.from('#scroll' , {
    duration: .5 ,
    opacity: 0 ,  
    bottom: '-.1%' , 
    ease: 'expo.Inout'    
})

.from('#text h1 , #text h4' ,{
    opacity: 0 , 
    stagger: .2 ,
    duration: 1 , 
    delay: -1 ,    
    y: '100%' , 
    ease: 'expo.inOut'
})

.from('#dets p' ,{
    y: '10%' ,
    duration: 1 , 
    delay: -.5 , 
    opacity: 0 ,  
    ease: 'expo.inOut'
})

.from('#rightlink a' ,{
    stagger: .2 ,
    duration: 1.5 ,
    x : '-10%' , 
    opacity: 0 , 
    delay:1 ,  
    ease: 'expo.inOut'
})

