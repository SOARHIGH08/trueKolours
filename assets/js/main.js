// accordion functionality
let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    let header = item.querySelector('.accordion-header');
    let icon = item.querySelector('.accordion-icon');
    let content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        let isOpen = item.classList.contains('open');

        // close all open accordion items and reset icons
        accordionItems.forEach(item => {
            item.classList.remove('open');
            item.querySelector('.accordion-icon').classList.remove('rotate');
        });

        // toggle the clicked item's state
        if (!isOpen) {
            item.classList.add('open');
            icon.classList.add('rotate');
        }
    });
});


// // Change color of navbar on scroll
// let prevScrollPos = window.pageYOffset;
// let navLinks = document.getElementsByClassName("navLinks");
// let currentColorIndex = 0;
// let colorClasses = ["white", "black"];    

// window.onscroll = function(){
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos){
//         navbar.classList.remove("navbar-hidden");
//     } else{
//         navbar.classList.add("navbar-hidden");
//     }

//     prevScrollPos = currentScrollPos;

//     let scrollMultiple = Math.floor(currentScrollPos / window.innerHeight);
//     let newColorIndex = scrollMultiple % colorClasses.length;

//     // Update navbar and navLinks colors
//     if (newColorIndex !== currentColorIndex){
//         navbar.classList.remove(colorClasses[currentColorIndex]);
//         navbar.classList.add(colorClasses[newColorIndex]);
        
//         for (let i = 0; i < navLinks.length; i++){
//             navLinks[i].classList.remove(colorClasses[currentColorIndex]);
//             navLinks[i].classList.add(colorClasses[newColorIndex]);
//         } 

//         currentColorIndex = newColorIndex;
//     }
// };

// Scroll to section on link click
document.addEventListener("DOMContentLoaded", function(){
    let scrollLinks = document.querySelectorAll(".scroll-to-section");
    for (let i = 0; i < scrollLinks.length; i++){
        scrollLinks[i].addEventListener("click", smoothScroll);
    }

    function smoothScroll(event){
        event.preventDefault();
        let targetId = this.getAttribute("href");
        let targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }
});

// Pop up registration form
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

        // Show the form section after a delay
        setTimeout(function() {
            myForm.style.display = 'block';
        }, 700);
    });
});

cancelFormBtn.addEventListener('click', function() {
    // Hide the form and show other sections
    myForm.style.display = 'none';
    sectionsToHide.forEach(section => {
        section.style.display = 'block';
    });
    footerToHide.style.display = 'block';
});

myForm.addEventListener('submit', function(event) {
    // Prevent form submission and show confirmation popup
    event.preventDefault();
    myForm.style.display = 'none';
    confirmationPopup.style.display = 'block';
});

closeConfirmationBtn.addEventListener('click', function() {
    // Close the confirmation popup and reload the page
    confirmationPopup.style.display = 'none';
    location.reload();
});
