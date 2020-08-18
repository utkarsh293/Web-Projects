var dayDiv = document.querySelector('#day');
var hoursDiv = document.querySelector('#hours');
var minutesDiv = document.querySelector('#minutes');
var secondsDiv = document.querySelector('#seconds');

function runner(){
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    hoursDiv.textContent = currentHours;
    minutesDiv.textContent = currentMinutes;
    secondsDiv.textContent = currentSeconds;
    setDay(currentDate.getDay());

}

setInterval(function(){
    runner();


} , 1000)

function setDay(day){
    switch (day){
        case 0:
            daySetter('SUN');
            break;
        
        case 1:
            daySetter('MON');
            break;
        
        case 2:
            daySetter('TUE');
            break;
        
        case 3:
            daySetter('WED');
            break;
        
        case 4:
            daySetter('THURS');
            break;
        
        case 5:
            daySetter('FRI');
            break;
        
        case 6:
            daySetter('SAT');
            break;                        
    }
}

function daySetter(day){
    dayDiv.textContent = day;
}