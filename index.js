const timedisplay=document.querySelector("#timedisplay");
const startbutton=document.querySelector("#startbutton");
const pausebutton=document.querySelector("#pausebutton");
const resetbutton=document.querySelector("#resetbutton");



let starttime=0;
let elaspedtime=0;
let currenttime=0;
let paused=true;
let intervalid;
let hrs=0;
let mins=0;
let secs=0;

startbutton.addEventListener("click",()=>{

    if (paused){
        paused=false;
        starttime=Date.now()-elaspedtime;
        intervalid=setInterval(updatetime,1000);

    }
});




pausebutton.addEventListener("click",()=>{

    if(!paused){
        paused=true;
        elaspedtime=Date.now()-starttime;
        clearInterval(intervalid);
    }
});



resetbutton.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalid);
    starttime=0;
     elaspedtime=0;
     currenttime=0;
     paused=true;
     intervalid;
     hrs=0;
     mins=0;
     secs=0;
     timedisplay.textContent="00:00:00";
    
});




function  updatetime(){

    elaspedtime=Date.now()-starttime;
    secs=Math.floor((elaspedtime/1000)%60);
    mins=Math.floor((elaspedtime/(1000*60))%60);
    hrs=Math.floor((elaspedtime/(1000*60*60))%60);
   
    secs=pad(secs);
mins=pad(mins);
hrs=pad(hrs);
 timedisplay.textContent=`${hrs}:${mins}:${secs}`;

function pad(unit){
return (("0")+unit).length>2? unit:"0"+unit;

}



}