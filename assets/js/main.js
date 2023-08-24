
let icon = document.getElementById("icon");
let ul = document.getElementById("ul");

let menuOpen = false;

let updateVisibility = () => {    
  if (!menuOpen) {
 
    icon.innerHTML = '<iconify-icon icon="solar:hamburger-menu-broken"></iconify-icon>';
    menuOpen = true;
    ul.style.animation = "hideNav 1s ease forwards";
    

  } else {

    icon.innerHTML = ' <iconify-icon icon="heroicons:x-mark-20-solid"></iconify-icon>';
    menuOpen = false;
    ul.style.animation = "showNav 1s ease forwards";
 
  }
}

icon.addEventListener("click", updateVisibility);

updateVisibility();


// accordion functionality
let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    let header = item.querySelector('.accordion-header');
    let icon = item.querySelector('.accordion-icon');
    // let content = item.querySelector('.accordion-content');

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

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "b") {
      // Change this URL to the desired destination
      window.location.href = "admin.html";
    }
  });
