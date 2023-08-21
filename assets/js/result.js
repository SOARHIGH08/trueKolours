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

let ysDetails = document.getElementById("ysDetails");
let ys = [
    "sociable",
    "charismatic",
    "outgoing",
    "confident",
    "warm-hearted",
    "pleasant",
    "lively",
    "optimistic",
    " fun lover",
    "spontaneous",
    "a preventer of dull moments",
    "quick apologizer",
    "an easy friend maker"
];
let ysContent = ys.join("<br><br>");
ysDetails.innerHTML = ysContent;

let ywDetails = document.getElementById("ywDetails");
let yw = [
    "impulsive",
    "chronically late",
    "shamleess",
    "forgetful",
    "a compulsive talker",
    "too loud",
    "sometimes too happy",
    "distractible",
    "not interested in following through with tasks that are boring",
    "self-absorbed",
    "an exaggerator",
    "someone who appears",
    "unauthentic"
];
let ywContent = yw.join("<br><br>");
ywDetails.innerHTML = ywContent;

let csDetails = document.getElementById("csDetails");
let cs = [
    "ambitious",
    "passionate",
    "leader-like",
    "focused",
    "efficient",
    "practical",
    "good at planning",
    "good at problem solving",
    "confident",
    "motivating",
    "a delegator",
    "usually right",
    "great in an emergency"
];
let csContent = cs.join("<br><br>");
csDetails.innerHTML = csContent;

let cwDetails = document.getElementById("cwDetails");
let cw = [
    "agressive",
    "domineering",
    "infexible",
    "impatient",
    "rude and tactless",
    "argumentative",
    "unable to relax",
    "uncomfortable around emotion",
    "low on empathy",
    "discouraged by failures",
    "too busy for people",
    "intolerant",
    "a leader who demands",
    "loyalty"
];
let cwContent = cw.join("<br><br>");
cwDetails.innerHTML = cwContent;

let msDetails = document.getElementById("msDetails");
let ms = [
    "thoughtful",
    "considerate",
    "cautious",
    "organized",
    "an excessive planner",
    "schedule oriented",
    "detailed",
    "highly creative in poetry, art and invention",
    "independent",
    "good at preventing problems"
];
let msContent = ms.join("<br><br>");
msDetails.innerHTML = msContent;

let mwDetails = document.getElementById("mwDetails");
let mw = [
    "obsessive",
    "too cautious",
    "prone to depression",
    "prone to moodiness",
    "perfectionistic",
    "pessimistic",
    "difficult to please",
    "deeply affected by tragedy",
    "a person with tunnel vision",
    "sometimes a procrastinator",
    "discontent with themselves and others",
    "prone to play the martyr"
];
let mwContent = mw.join("<br><br>");
mwDetails.innerHTML = mwContent;

let psDetails = document.getElementById("psDetails");
let ps = [
    "relaxed",
    "quiet and calm",
    "content with themselves",
    "kind",
    "consistent",
    "a steady and faithful friend",
    "accepting",
    "afectionate",
    "diplomatic",
    "peacemaking",
    "rational",
    "curious",
    "observant",
    "an easy friend maker"
];
let psContent = ps.join("<br><br>");
psDetails.innerHTML = psContent;

let pwDetails = document.getElementById("pwDetails");
let pw = [
    "sometimes shy",
    "fearful of change",
    "prone to laziness",
    "stubborn",
    "passive-agressive",
    "indecisive",
    "permissive",
    "not goal oriented",
    "unenthusiastic",
    "too compromising",
    "undisciplined",
    "sarcastic",
    "discouraging",
    "non-participative"
];
let pwContent = pw.join("<br><br>");
pwDetails.innerHTML = pwContent;





