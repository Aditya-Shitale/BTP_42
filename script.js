const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const s1=document.getElementById("s1")
const data=["Anomaly Detected","Fetching Data","Explaning AI","Added in Blockchain"]
let currentActive = 1;

let intId;


function nextStep(){
    currentActive++;
    if(currentActive<=circles.length)s1.innerHTML = data[currentActive-1];
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
}

function repeat(){
    if(currentActive<=4)intId=setInterval(nextStep,1500)
}



prev.addEventListener("click", () => {
    currentActive--;
  document.getElementById("s1").innerHTML = data[currentActive-1];
  if (currentActive < 1) {
    currentActive = 1;
}
update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = `${
        ((actives.length - 1) / (circles.length - 1)) * 100
    }%`;
    
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
repeat()