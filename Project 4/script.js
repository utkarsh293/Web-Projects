var btn = document.querySelector('#btn')
var modal = document.querySelector('#modal')
var min =   document.querySelector('#min')
var modalbtn = document.querySelector('#modalbtn')

var prdn = document.querySelector('#prdn')
var prdc = document.querySelector('#prdc')
var prdi = document.querySelector('#prdi')
var cards = document.querySelector('#cards')



btn.addEventListener('click' , function(){
    modal.style.display = 'initial'
})

min.addEventListener('click' , function(){
    modal.style.display = 'none'
})

modalbtn.addEventListener('click' , function(){
    var pname = prdn.value; 
    var pcategory = prdc.value;
    var pimage = prdi.value;

    var template = ` <div class="card">
    <div class="image">
        <img src="${pimage}" alt="">
    </div>
    <h3>${pname}</h3>
    <h5>${pcategory}</h5>
    <button>Buy now</button>
</div>`;
    cards.innerHTML += template
    modal.style.display = 'none'
    prdn.value = '';
    prdc.value = '';
    prdi.value = '';

})

