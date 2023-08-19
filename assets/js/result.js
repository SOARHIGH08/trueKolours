// import {totalQ} from "./test.js";

let saguine = document.getElementById("saguine");
let choleric = document.getElementById("choleric");
let melancholic = document.getElementById("melancholic");
let phlegmatic = document.getElementById("phlegmatic");

// console.log(totalQ);
// let totaQuestions = totalQ;
let totalQuestions = parseInt(localStorage.getItem("totalQuestions"));

// Retrieve the user object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"));

// Now you can access properties of the storedUser object
let totalSanguine = storedUser.totalSanguine;
let totalCholeric = storedUser.totalCholeric;
let totalMelancholic = storedUser.totalMelancholic;
let totalPhlegmatic = storedUser.totalPhlegmatic;

saguine.innerHTML = `Saguine ${((totalSanguine / totalQuestions)*100).toFixed(2)}%`;
choleric.innerHTML = `Choleric ${((totalCholeric / totalQuestions)*100).toFixed(2)}%`;
melancholic.innerHTML = `Melancholic ${((totalMelancholic / totalQuestions)*100).toFixed(2)}%`;
phlegmatic.innerHTML = `Phlegmatic ${((totalPhlegmatic / totalQuestions)*100).toFixed(2)}%`;