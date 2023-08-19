// calculate section heights and update <li> visibility on scroll
let specificLi = document.getElementById('specificLi');
let sections = document.querySelectorAll('.section');
let sectionHeights = [];
specificLi.style.display = "none";

sections.forEach(function(section){
    sectionHeights.push(section.offsetHeight);
});

window.addEventListener('scroll', function(){
    let currentPosition = window.pageYOffset;

    let startSectionIndex = 1;
    let endSectionIndex = sectionHeights.length - 2;

    let topPosition = sectionHeights.slice(0, startSectionIndex + 0).reduce((a, b) => a + b, 0);
    let bottomPosition = sectionHeights.slice(0, endSectionIndex + 3).reduce((a, b) => a + b, 0) - window.innerHeight;

    // update visibility of specific <li> tag based on scroll position
    if (currentPosition >= topPosition && currentPosition <= bottomPosition){
        specificLi.classList.add('active');
        specificLi.classList.remove('inactive');
        specificLi.style.display = "block";
    } else{
        specificLi.classList.remove('active');
        specificLi.classList.add('inactive');
    }
});

// // sidebar menu
let burger = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");
let menuOpen = true;



burger.innerHTML = '<iconify-icon icon="solar:hamburger-menu-broken"></iconify-icon>';
// burger.innerHTML = '<iconify-icon icon="fxemoji:hamburger"></iconify-icon>';

let closeSidebar = () => {
  sidebar.classList.add('inactive');
  sidebar.classList.remove('active');
  menuOpen = true;
  burger.innerHTML = '<iconify-icon icon="solar:hamburger-menu-broken"></iconify-icon>';
}

openSidebar = () => {
  sidebar.classList.add('active');
  sidebar.classList.remove('inactive');
  menuOpen = false;
  burger.innerHTML = '<iconify-icon icon="ph:x-bold"></iconify-icon>';
}

burger.addEventListener("click", () => {
  if (menuOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
});