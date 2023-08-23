// calculate section heights and update <li> visibility on scroll
let specificLi = document.getElementById('specificLi');
let sections = document.querySelectorAll('.section');
let sectionHeights = [];
specificLi.style.display = "none";

sections.forEach(function(section){
    sectionHeights.push(section.offsetHeight);
});

window.addEventListener('scroll', function(){
    let currentPosition = window.scrollY;

    let startSectionIndex = 1;
    let endSectionIndex = sectionHeights.length - 2;

    let topPosition = sectionHeights.slice(0, startSectionIndex + 0).reduce((a, b) => a + b, 0);
    let bottomPosition = sectionHeights.slice(0, endSectionIndex + 3).reduce((a, b) => a + b, 0) - window.innerHeight;

    // update visibility of specific <li> tag based on scroll position
    if (currentPosition >= topPosition && currentPosition <= bottomPosition){
      specificLi.style.display = "block";
        specificLi.style.animation = "CTAmoveLeftToRight .1s linear forwards";
    } else {
        specificLi.style.animation = "CTAmoveRightToLeft .1s linear forwards";
    }
});
