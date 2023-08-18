// arrow function to get random index in an array
let getRandomInArray = array => {
    for (let arrayLength = array.length - 1; arrayLength > 0; arrayLength--) {
        let randNum = Math.floor(Math.random() * (arrayLength + 1));    
        return array[randNum];
    }
}

let getText = async file => {
    let q = await fetch(file);
    let questions = await q.json();

    let question = getRandomInArray(questions); // random picked question    
    let indexQ = questions.indexOf(question); // index of the random picked question

    let answers = questions[indexQ].answers; // array of objects with answers for the random picked question
   
    console.log(answers.length);
    
    while (answers.length != 0) {
        let answer = getRandomInArray(answers); // random picked answer
        let indexA = answers.indexOf(answer); // index of the random picked answer
        console.log(`Answer: ${answer}`);
        console.log(`Index A: ${indexA}`);
        answers.splice(indexA, 1);
        
        
    }

    // console.log(`Question: ${question.question}`);
    // console.log(`Index Q: ${indexQ}`);
    
    


    let questionsList = document.getElementById("questionsList"); // populate the questions and answers

    // questions.forEach((entry) => {
    //     let question = entry.question;
    //     let indexNumQ = entry.index;
    //     let divTag = document.createElement("div");

    //     // shuffle the answers while preserving the original indexes
    //     let shuffledAnswers = question.answers.map((answer, index) => ({ answer, index }));
    //     shuffleArray(shuffledAnswers);

    //     divTag.innerHTML = `<strong>${question.question}</strong><div>${shuffledAnswers.map(entry => `
    //         <input type="radio" name="${indexNumQ}" id="${indexNumQ}_${entry.index}" onclick="getResult(${indexNumQ}, ${entry.index})">
    //         <label for="${indexNumQ}_${entry.index}">${entry.answer}</label>`).join("<br>")}</div>`;
        
    //     questionsList.appendChild(divTag);
    // });
}

getText("assets/js/qa.json"); // fetch the questions and answers

let getResult = (indexQ, indexA) => {
    console.log(`Question : ${indexQ}, Answer : ${indexA}`);
    
    let sanguine = 0;

    switch(indexA) {
        case 0:
            sanguine++;
            console.log("Sanguine");  
            console.log(`Total: ${sanguine}`);  
            break;
        case 1:
            console.log("Choleric");  
            break;
        case 2:
            console.log("Melancholic");  
            break;
        case 3:
            console.log("Phlegmatic");  
            break;
    }

};


