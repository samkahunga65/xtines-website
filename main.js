document.getElementById("about-btn").addEventListener("click", e => {
    document.getElementById("landing").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("work-btn").addEventListener("click", e => {
    document.getElementById("work").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("interests-btn").addEventListener("click", e => {
    document.getElementById("interests").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("contacts-btn").addEventListener("click", e => {
    document.getElementById("contacts").scrollIntoView({
        behavior: "smooth"
    });
});
//setup carousel

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const slideWidth = slide.clientWidth;
const backCarouselButton = document.getElementById("car-back");
const forwardCarouselButton = document.getElementById("car-forward");

let carImageDisplayed = -1;

backCarouselButton.addEventListener("click", ()=>{
	carImageDisplayed -= 1
	if(carImageDisplayed <= -2 ) {
		slidesContainer.scrollLeft += (2 * slideWidth);
		carImageDisplayed = 1
	} else {
		slidesContainer.scrollLeft -= slideWidth;
	}
})
forwardCarouselButton.addEventListener("click", ()=>{
	carImageDisplayed += 1
	if(carImageDisplayed >= 2 ) {
		slidesContainer.scrollLeft -= (2 * slideWidth);
		carImageDisplayed = -1
	} else {
		slidesContainer.scrollLeft += slideWidth;
	}
})

//reveal and hide menu in mobile mode
const menuDiv = document.getElementById("other")
const menuButton = document.getElementById("hamburger")
let menuToggled = true;
menuButton.addEventListener("click", () => {
	if (!menuToggled) {
		menuDiv.style.top = "0px"
		menuDiv.style.display = "block"
		menuToggled = true
	}
})
const menuButtons = document.querySelectorAll("#other > button");

menuButtons.forEach(item => {
	item.addEventListener("click", () => {
		menuToggled = false
		menuDiv.style.top = "-264px"
	})
})