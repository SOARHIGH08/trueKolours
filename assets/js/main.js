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

// calculate section heights and update <li> visibility on scroll
var specificLi = document.getElementById('specificLi');
var sections = document.querySelectorAll('.section');
var sectionHeights = [];

sections.forEach(function(section){
    sectionHeights.push(section.offsetHeight);
});

window.addEventListener('scroll', function(){
    var currentPosition = window.pageYOffset;

    var startSectionIndex = 1;
    var endSectionIndex = sectionHeights.length - 2;

    var topPosition = sectionHeights.slice(0, startSectionIndex + 0).reduce((a, b) => a + b, 0);
    var bottomPosition = sectionHeights.slice(0, endSectionIndex + 3).reduce((a, b) => a + b, 0) - window.innerHeight;

    // Update visibility of specific <li> tag based on scroll position
    if (currentPosition >= topPosition && currentPosition <= bottomPosition){
        specificLi.classList.add('active');
        specificLi.classList.remove('inactive');
    } else{
        specificLi.classList.remove('active');
        specificLi.classList.add('inactive');
    }
});

// // sidebar menu
let burger = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");
let menuOpen = true;

let closeSidebar = () => {
  sidebar.classList.add('inactive');
  sidebar.classList.remove('active');
  menuOpen = true;
}

openSidebar = () => {
  sidebar.classList.add('active');
  sidebar.classList.remove('inactive');
  menuOpen = false;
}

burger.addEventListener("click", () => {
  if (menuOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

// close sidebar when clicking anywhere on the window
window.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
    closeSidebar();
  }
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
