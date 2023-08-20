let rPercent = document.getElementById("rPercent");
let bPercent = document.getElementById("bPercent");
let gPercent = document.getElementById("gPercent");
let yPercent = document.getElementById("yPercent");

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");

let percent = document.querySelector(".percent");

let totalQuestions = parseInt(localStorage.getItem("totalQuestions"));

// Retrieve the user object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"));

// Now you can access properties of the storedUser object
let totalSanguine = storedUser.totalSanguine;
let totalCholeric = storedUser.totalCholeric;
let totalMelancholic = storedUser.totalMelancholic;
let totalPhlegmatic = storedUser.totalPhlegmatic;

rPercent.innerHTML = `Choleric<br>${((totalCholeric / totalQuestions)*100).toFixed(2)}%`;
bPercent.innerHTML = `Phlegmatic<br>${((totalPhlegmatic / totalQuestions)*100).toFixed(2)}%`;
gPercent.innerHTML = `Melancholic<br>${((totalMelancholic / totalQuestions)*100).toFixed(2)}%`;
yPercent.innerHTML = `Saguine<br>${((totalSanguine / totalQuestions)*100).toFixed(2)}%`;

let resultContainer = document.getElementById("resultContainer");
let percentWidth = (percent.offsetWidth * 2);

let containerWidth = resultContainer.offsetWidth - percentWidth;

let highNum = Math.max(totalSanguine, totalCholeric, totalMelancholic, totalPhlegmatic)
let rPercentWidth = (totalCholeric / highNum) * containerWidth;
let bPercentWidth = (totalPhlegmatic / highNum) * containerWidth;
let gPercentWidth = (totalMelancholic / highNum) * containerWidth;
let yPercentWidth = (totalSanguine / highNum) * containerWidth;

let rTotalWidth = percentWidth + rPercentWidth;
red.style.width = `${rTotalWidth}px`;

let bTotalWidth = percentWidth + bPercentWidth;
blue.style.width = `${bTotalWidth}px`;

let gTotalWidth = percentWidth + gPercentWidth;
green.style.width = `${gTotalWidth}px`;

let yTotalWidth = percentWidth + yPercentWidth;
yellow.style.width = `${yTotalWidth}px`;

window.addEventListener("resize", function() {;
    containerWidth = resultContainer.offsetWidth - percentWidth;

    yPercentWidth = (totalSanguine / highNum) * containerWidth;
    rPercentWidth = (totalCholeric / highNum) * containerWidth;
    gPercentWidth = (totalMelancholic / highNum) * containerWidth;
    bPercentWidth = (totalPhlegmatic / highNum) * containerWidth;

    rTotalWidth = percentWidth + rPercentWidth;
    red.style.width = `${rTotalWidth}px`;

    bTotalWidth = percentWidth + bPercentWidth;
    blue.style.width = `${bTotalWidth}px`;

    gTotalWidth = percentWidth + gPercentWidth;
    green.style.width = `${gTotalWidth}px`;

    yTotalWidth = percentWidth + yPercentWidth;
    yellow.style.width = `${yTotalWidth}px`;
    
});