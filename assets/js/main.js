// accordion
let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    let header = item.querySelector('.accordion-header');
    let icon = item.querySelector('.accordion-icon');
    let content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        let isOpen = item.classList.contains('open');

        accordionItems.forEach(item => {
            item.classList.remove('open');
            item.querySelector('.accordion-icon').classList.remove('rotate'); // Remove 'rotate' from all items
        });

        if (!isOpen) {
            item.classList.add('open');
            icon.classList.add('rotate');
        }
    });
});



// Get the specific <li> tag in the navbar
var specificLi = document.getElementById('specificLi');

// Calculate the heights of the sections
var sections = document.querySelectorAll('.section');
var sectionHeights = [];

sections.forEach(function(section){
    sectionHeights.push(section.offsetHeight);
});

// Update the visibility of the specific <li> tag based on scroll position
window.addEventListener('scroll', function(){
    var currentPosition = window.pageYOffset;

    // Calculate the range of sections where the <li> tag should be visible
    var startSectionIndex = 1; // Second section
    var endSectionIndex = sectionHeights.length - 2; // Second to last section

    // Calculate the top and bottom positions for the visibility range
    var topPosition = sectionHeights.slice(0, startSectionIndex + 0).reduce((a, b) => a + b, 0);
    var bottomPosition = sectionHeights.slice(0, endSectionIndex + 3).reduce((a, b) => a + b, 0) - window.innerHeight;

    // Update the visibility of the specific <li> tag
    if (currentPosition >= topPosition && currentPosition <= bottomPosition){
        specificLi.classList.add('active');
    } else{
        specificLi.classList.remove('active');
    }
});



// change color of navbar
let prevScrollPos = window.pageYOffset;
let navLinks = document.getElementsByClassName("navLinks");
let currentColorIndex = 0;
let colorClasses = ["white", "black"];    

window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos){
        navbar.classList.remove("navbar-hidden");
    } else{
        navbar.classList.add("navbar-hidden");
    }

    prevScrollPos = currentScrollPos;

    let scrollMultiple = Math.floor(currentScrollPos / window.innerHeight);
    let newColorIndex = scrollMultiple % colorClasses.length;

    if (newColorIndex !== currentColorIndex){
        navbar.classList.remove(colorClasses[currentColorIndex]);
        navbar.classList.add(colorClasses[newColorIndex]);
        
        let navLinks = navbar.getElementsByClassName("navLinks");
        
        for (let i = 0; i < navLinks.length; i++){
        navLinks[i].classList.remove(colorClasses[currentColorIndex]);
        navLinks[i].classList.add(colorClasses[newColorIndex]);
        } 

        currentColorIndex = newColorIndex;
    }
};



//scroll to section
document.addEventListener("DOMContentLoaded", function(){
// Add smooth scrolling to internal links
var scrollLinks = document.querySelectorAll(".scroll-to-section");
for (var i = 0; i < scrollLinks.length; i++){
    scrollLinks[i].addEventListener("click", smoothScroll);
}

function smoothScroll(event){
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
    behavior: "smooth"
    });
}
});


// // pop up registration
let showFormBtns = document.querySelectorAll('.showFormBtn');
let myForm = document.getElementById('myForm');
let cancelFormBtn = document.getElementById('cancelFormBtn');
let confirmationPopup = document.getElementById('confirmationPopup');
let closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
let sectionsToHide = document.querySelectorAll('section:not(.hero-section)');
let footerToHide = document.querySelector('footer');

showFormBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Hide all sections except the first section (hero-section)
        sectionsToHide.forEach(section => {
            section.style.display = 'none';
        });

        // Hide the footer
        footerToHide.style.display = 'none';

        // Add a delay of 500 milliseconds before showing the form section
        setTimeout(function() {

            
            myForm.style.display = 'block';
        }, 700);
    });
});

cancelFormBtn.addEventListener('click', function() {
    myForm.style.display = 'none';

    // Show all sections except the first section (hero-section)
    sectionsToHide.forEach(section => {
        section.style.display = 'block';
    });

    // Show the footer
    footerToHide.style.display = 'block';
});

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    myForm.style.display = 'none';
    confirmationPopup.style.display = 'block';
});

closeConfirmationBtn.addEventListener('click', function() {
    confirmationPopup.style.display = 'none';
    location.reload();
});
