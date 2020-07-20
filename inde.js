// defined vars to hold values
let puls = 0;
let seconds = 0;
let minutes = 0;

// Stopwatch function (logic to determine when to increment next value ,etc)
function stopWatch(){
    puls++;
    if(puls / 100 ===1){
       puls = 0;
       seconds++;
       
       if(seconds / 60 ===1){
       seconds = 0 ;
       minutes;
       }
    }
// display updated timeto user
document.getElementById("display").innerHTML = Minutes + ":" +seconds+ ":" +puls;
}

window.setInterval(stopWatch,1000);