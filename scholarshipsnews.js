
const slider = document.querySelector(".scholarship-slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const cards = document.querySelectorAll(".scholarship-card");
const firstCard = cards[0];
const lastCard = cards[cards.length - 1];
slider.insertBefore(lastCard.cloneNode(true), slider.firstChild); 
slider.appendChild(firstCard.cloneNode(true)); 


let currentIndex = 1; 
const cardWidth = cards[0].offsetWidth + 20; 
slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;


function slidePrev() {
    if (currentIndex === 0) {
     
        slider.style.transition = "none";
        currentIndex = cards.length;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        setTimeout(slidePrev, 0); 
        return;
    }

    currentIndex--;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


function slideNext() {
    if (currentIndex === cards.length + 1) {
        slider.style.transition = "none";
        currentIndex = 1;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        setTimeout(slideNext, 0); 
        return;
    }

    currentIndex++;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prev.addEventListener("click", slidePrev);
next.addEventListener("click", slideNext);
