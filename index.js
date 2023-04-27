const hour_el = document.getElementById('hour');
const minute_el = document.getElementById('minute');
const second_el = document.getElementById('second');
const ampm_el = document.getElementById('ampm');


function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h=h-12;
        ampm="PM";
    }
        
    hour_el.innerText=h;
    if(h<10){
        hour_el.innerText="0"+h
        
    }
    minute_el.innerText=m;
    if(m<10){
        minute_el.innerText="0"+m
        
    }
    second_el.innerText=s;
    if(s<10){
        second_el.innerText="0"+s
        
    }
    ampm_el.innerText=ampm;

   setTimeout(() => {
     updateclock();
   }, 1000);
    

}
updateclock();
