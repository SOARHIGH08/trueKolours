const flashcards = document.querySelector(".flashcards");
const createBox = document.querySelector(".create-box");
const name = document.querySelector("#name");
const testimonial = document.querySelector("#testimonial");


let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


contentArray.forEach(divMaker);

function divMaker(text){
    let div = document.createElement("div");
    let h2_name = document.createElement("h2");
    let h2_testimonial = document.createElement("h2");

    div.className = 'flashcard';
   
    h2_name.setAttribute('style',"padding: 15px; margin-top:30px");
    h2_name.innerHTML = text.my_name;

    h2_testimonial.setAttribute("style", "border-top:1px solid black; text-align:center; display:none; color:black");
    h2_testimonial.innerHTML = text.my_testimonial;

    div.appendChild(h2_name);
    div.appendChild(h2_testimonial);

    div.addEventListener("click", function(){
        if(h2_testimonial.style.display == "none")
        h2_testimonial.style.display = "block";
        else h2_testimonial.style.display = "none";
        
    });

   flashcards.appendChild(div);
 
   
}
function addFlashcard(){
    var flashcard_info = {
        "my_name": name.value,
        "my_testimonial" : testimonial.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    name.value = '';
    testimonial.value = '';
}



function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}
function showCreateCardBox(){
    createBox.style.display = "block";
}
function hideCreateBox(){
    createBox.style.display ="none";
}

