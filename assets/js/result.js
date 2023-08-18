let saguine = document.getElementById("saguine");
let choleric = document.getElementById("choleric");
let melancholic = document.getElementById("melancholic");
let phlegmatic = document.getElementById("phlegmatic");

let totaQuestions = 27;

// Retrieve the user object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"));

// Now you can access properties of the storedUser object
totalSanguine = storedUser.totalSanguine;
totalCholeric = storedUser.totalCholeric;
totalMelancholic = storedUser.totalMelancholic;
totalPhlegmatic = storedUser.totalPhlegmatic;

saguine.innerHTML = `Saguine ${((totalSanguine / totaQuestions)*100).toFixed(2)}%`;
choleric.innerHTML = `Choleric ${((totalCholeric / totaQuestions)*100).toFixed(2)}%`;
melancholic.innerHTML = `Melancholic ${((totalMelancholic / totaQuestions)*100).toFixed(2)}%`;
phlegmatic.innerHTML = `Phlegmatic ${((totalPhlegmatic / totaQuestions)*100).toFixed(2)}%`;