// Ribbon & Hamburger Menu
const navRibbon = document.querySelector(".navribbon");
const hamburgerMenu = document.querySelector(".navribbon__hamburger");

// Menu links
const aboutButton = document.querySelector(".aboutbutton");
const workButton = document.querySelector(".workbutton");
const homeButton = document.querySelector(".homebutton");

// Individual screens
const homeScreen = document.querySelector(".home");
const workScreen = document.querySelector(".work");
const aboutScreen = document.querySelector(".about");

// Array of screens & menu buttons for looping
const allScreens = [homeScreen, workScreen, aboutScreen];
const allButtons = [homeButton, workButton, aboutButton];

// Delayed fade in for home screen
const firstLoad = document.querySelectorAll(".home__first");
const secondLoad = document.querySelectorAll(".home__second");

// Hides screens and underlines home menu entry
workScreen.style.display = "none";
aboutScreen.style.display = "none";
homeButton.style.borderBottom = "2px solid white";

// Slight delay so navribbon slides in after home screen
setTimeout(
    navRibbon.classList.toggle("revealed"), 5000
);

// Hamburger menu button event listener
hamburgerMenu.addEventListener("click", toggleNavRibbon);

// Menu link event listeners
aboutButton.addEventListener("click", function(){
    showSection(aboutScreen, aboutButton);
});

workButton.addEventListener("click", function(){
    showSection(workScreen, workButton);
})

homeButton.addEventListener("click", function(){
    showSection(homeScreen, homeButton);
})

// Function to show section on button click
function showSection(screen, button){
    if (screen.style.display === "none"){
        for(let i of allScreens){
            if (i!==screen){
                i.style.display="none";
            }
        }
        for(let i of allButtons){
            if (i!==button){
                i.style.borderBottom = "none";
            }
        }
        button.style.borderBottom = "2px solid white";
        screen.style.display = "flex";        
    }    
    toggleNavRibbon();
}

// Function to toggle the nav ribbon
function toggleNavRibbon(){
    navRibbon.classList.toggle("opened");
    hamburgerMenu.classList.toggle("close");
}