let minus = document.getElementById("MinusTime");
let plus = document.getElementById("PlusTime");
let T_minutes = document.getElementById("Minutes");
let T_seconds = document.getElementById("Seconds");
let start = document.getElementById("St-btn");
let stop = document.getElementById("Sp-btn");
let restart = document.getElementById("Re-btn");
let IsStart = false;
let StartMinutes = 36;


minus.addEventListener("click", async () => {
    minus_time(1);
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
     T_minutes.textContent = pad(t - 1);
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
  start.disabled = true;
  stop.disabled = false;
  restart.disabled = false;
}

function stop_time(){
  IsStart = false;
  start.disabled = false;
  stop.disabled = true;
}
function restart_time(){
  IsStart = false;
  T_minutes.textContent = StartMinures;
  T_seconds.textContent = pad(0);
  minus.style.display = "inline-block";
  plus.style.display = "inline-block";
  start.disabled = false;
  stop.disabled = true;
  restart.disabled = true;
  UpdateScene()
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
  if (minutes < 0.5*StartMinures){
    document.getElementById("Flower_2").style.display = "relative";
    document.getElementById("Flower_1").style.display = "none";
  }
    if (minutes == 0 && seconds == 0){
      document.getElementById("Flower_3").style.display = "inline-block";
      document.getElementById("Flower_2").style.display = "none";
      IsStart = false;
      stop.disabled = true;
    }
     MoveTime()
  }
}, 1000)

function UpdateScene() {
    document.getElementById("Flower_1").style.display = "inline-block";
      document.getElementById("Flower_3").style.display = "none";
  document.getElementById("Flower_2").style.display = "none";
}


let Cx = 90, Cy = -80;
function getCenter(){
  let main_circle = document.getElementById("circle");
  Cx =0.5* main_circle.offsetWidth ;
  Cy = 0.5* main_circle.offsetHeight;
}

function MoveTime(){
  var t_proc=100*(StartMinutes-T_minutes.textContent)/StartMinutes;
  let phi = Math.PI*(360*t_proc/100)/180; 
  document.getElementById("proc").style.left = Cx + radius()*Math.sin(phi) + 'px';
  document.getElementById("proc").style.top = Cy-radius()*Math.cos(phi)+'px';
}

function radius(){
  return 100;
}