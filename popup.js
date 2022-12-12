let minus = document.getElementById("MinusTime");
let plus = document.getElementById("PlusTime");
let time = document.getElementById("Time");

minus.addEventListener("click", async () => {
    minus_time();
});

plus.addEventListener("click", async () => {
    plus_time();
});

function minus_time() {
    let t = time.textContent
    if (t > 10)
        time.textContent = t - 1;
}

function plus_time() {
    let t = time.textContent
    if (t < 90)
        time.textContent = parseInt(t) + 1;
}