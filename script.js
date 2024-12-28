// script.js
var slideIndex = 0;
        showSlides();
        function showSlides() {
            var slides = document.getElementsByClassName("slide");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
        }

        function changeSlide(n) {
            slideIndex += n;
            showSlides();
        }

        setInterval(showSlides, 5000);

// here we will take the thumbails and for each thumbnail we will add a EventListener and then we 
// will get the thumbnails href link of the image and then we will store that into img source of the lightbox and make it visibile over 
// screen

        document.querySelectorAll(".thumbnail").forEach( thumbnail => {
            thumbnail.addEventListener("click" , (event) => {
                event.preventDefault();
                let imgSRC = thumbnail.getAttribute('href');
                let lightboxIMG = document.getElementById("lightbox-img");
                lightboxIMG.src = imgSRC;
                document.getElementById("lightbox").style.display = "flex";
            });
        });

        document.getElementById("close").addEventListener("click",()=>{
            document.getElementById("lightbox").style.display = "none";
        });