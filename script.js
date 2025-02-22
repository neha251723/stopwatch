let [secs, mins, hours]= [0, 0, 0];
let disp= document.getElementById("display");
let timr= null;

function watch(){
    secs++;
    if(secs == 60){
        secs= 0;
        mins++;
        if(mins == 60){
            mins= 0; 
            hours++;
        }
    }
    let h= hours < 10 ? "0" + hours : hours;
    let m= mins < 10 ? "0" + mins : mins; 
    let s= secs < 10 ? "0" + secs : secs; 

    disp.innerHTML= h + ":" + m + ":" + s;

}

function strt(){
    if(timr != null){
        clearInterval(timr);
    }
    timr= setInterval(watch, 1000);
    
}

function stop(){
    clearInterval(timr);
}

function reset(){
    clearInterval(timr);
    [secs, mins, hours]= [0, 0, 0];
    disp.innerHTML= "00:00:00";
}