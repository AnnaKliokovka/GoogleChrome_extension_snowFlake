let minus = document.getElementById("MinusTime");
let plus = document.getElementById("PlusTime");
let T_minutes = document.getElementById("Minutes");
let T_seconds = document.getElementById("Seconds");
let start = document.getElementById("St-btn");
let stop = document.getElementById("Sp-btn");
let restart = document.getElementById("Re-btn");
let IsStart = false;
let StartMinutes = 30;

minus.addEventListener("click", async () => {
    minus_time(5);
});

plus.addEventListener("click", async () => {
    plus_time();
});

start.addEventListener("click", async()=>{
  start_time();
})
stop.addEventListener("click", async()=>{
  stop_time();
})
restart.addEventListener("click", async()=>{
  restart_time();
})

function minus_time(min_t){
  let t = T_minutes.textContent
  if (t>min_t)
     T_minutes.textContent = t - 1;
}

function plus_time(){
  let t = T_minutes.textContent
  if (t< 90)
    T_minutes.textContent = parseInt(t) + 1;
}

function start_time(){
  StartMinures = T_minutes.textContent;
  IsStart = true;
  minus.style.display = "none";
  plus.style.display = "none";
  start.style.display = "none";
  stop.style.display = "inline-block";
  restart.style.display = "inline-block"
}

function stop_time(){
  IsStart = false;
  start.style.display = "inline-block"
  stop.style.display = "none";
}
function restart_time(){
  IsStart = false;
  T_minutes.textContent = StartMinures;
  T_seconds.textContent = pad(0);
  minus.style.display = "inline-block";
  plus.style.display = "inline-block";
  start.style.display = "inline-block"
  stop.style.display = "none";
  restart.style.display = "none";
}

function minus_seconds(){
  let s = T_seconds.textContent;
  if (s == 00){
    T_seconds.textContent = 59;
    minus_time(0);
  }
  else{
    T_seconds.textContent = pad(s-1);
  }  
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

timer = setInterval(function(){
  if (IsStart){
  minus_seconds()
  seconds = T_seconds.textContent;
  minutes = T_minutes.textContent;
  }
}, 1000)