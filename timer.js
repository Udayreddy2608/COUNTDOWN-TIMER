//const endDate="26 July 2024 0:00 AM"
endDate=prompt("ENTER THE COUNTDOWN DATE AND TIME ex:(26 July 2024 0:00 AM)")

let head=document.getElementById("top");

let  days=document.querySelector("#dayscount");

let hours=document.querySelector("#hourscount");

let minutes=document.querySelector("#minscount");

let seconds=document.querySelector("#secsleft");

head.innerText=(`Timer set for ${endDate}`);

const clock=()=>{
    const today=Date()
    const end= Date.parse(endDate);
    const now= Date.parse(today);
    console.log(end);
    console.log(now);
    let secsLeft=(end-now)/1000;
    let daysLeft=Math.floor(secsLeft/3600/24);
    let hoursLeft=Math.floor((secsLeft/3600)%24);
    let minsLeft=Math.floor((((secsLeft/3600)%24)%hoursLeft)*60);
    let secTimer=(secsLeft-((daysLeft*86400)+(hoursLeft*3600)+(minsLeft*60)));
    days.innerText=daysLeft;
    hours.innerText=(hoursLeft<10?"0"+hoursLeft:hoursLeft);
    minutes.innerText=(minsLeft<10?"0"+minsLeft:minsLeft)
    seconds.innerText=(secTimer<10?"0"+secTimer:secTimer);
    if (secTimer<10){
        seconds.style.color="red"
    }else{
        seconds.style.color="#219C90"
    }
    console.log(hoursLeft)
    console.log(secsLeft-((daysLeft*86400)+(hoursLeft*3600)+(minsLeft*60)))
}
setInterval(clock, 1000);
