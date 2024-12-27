// let images = document.querySelectorAll(".images");
// console.log(images);

// document.addEventListener("DOMContentLoaded",initailizeSlider);
// slideindex = 0;
// intervalID = null;

// let initailizeSlider = () => {
//     images[slideindex].classList.add("displayslide");
//     intervalID = setInterval(nextslide,5000);
// }

// let showslide = (index) => {

//     if(index >= images.length){
//         slideindex = 0;
//     }
//     else if(index < 0){
//         slideindex = images.length-1;
//     }
//     else {
//         slideindex = index; 
//     }

//     images.forEach(image =>{
//         image.classList.add("displayslide");
//     });
//     images[slideindex].classList.remove("displayslide");

// }
// let nextslide = () => {
//     slideindex++;
//     showslide(slideindex);
//     }

// let prevslide = () => {
//     slideindex--;
//     showslide(slideindex);

// }


// let images = document.querySelectorAll(".images");
// console.log(images);

// let slideindex = 0; 
// let intervalID = null; 


// document.addEventListener("DOMContentLoaded", initializeSlider);

// let initializeSlider = () => {
//     images[slideindex].classList.add("displayslide"); 
//     intervalID = setInterval(nextSlide, 5000); 
// }

// let showSlide = (index) => {

//     if (index >= images.length) {
//         slideindex = 0;
//     } else if (index < 0) {
//         slideindex = images.length - 1; 
//     } else {
//         slideindex = index; 
//     }


//     images.forEach(image => {
//         image.classList.remove("displayslide");
//     });


//     images[slideindex].classList.add("displayslide");
// }

// let nextSlide = () => {
//     showSlide(slideindex + 1); 
// }

// let prevSlide = () => {
//     showSlide(slideindex - 1); 
// }


// script.js
let intervalID = null;
let slideIndex = 0; // Start at the first slide
const slides = document.getElementsByClassName("slide");
showSlides(slideIndex); // Call the function to show slides

function showSlides(index) {
    
    // Loop through all slides and hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Wrap around the slide index
    if (index >= slides.length) {
        slideIndex = 0; // Reset to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    } else {
        slideIndex = index; // Set the current slide index
    }

    slides[slideIndex].style.display = "block"; // Show the current slide
}

// Automatically move to the next slide every 5 seconds
intervalID = setInterval(nextSlide, 5000); 

let nextSlide = () => {
    showSlides(slideIndex + 1); // Move to the next slide
}

let prevSlide = () => {
    showSlides(slideIndex - 1); // Move to the previous slide
}
