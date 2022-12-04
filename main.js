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
let menuToggled = false;
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

// add functionality to link icons
document.getElementById("email-contact").addEventListener("click", () => {
	window.open("mailto:xyz@gmail.com")
})
document.getElementById("github-contact").addEventListener("click", () => {
	window.open("https://www.github.com")
})
document.getElementById("linkedin-contact").addEventListener("click", () => {
	window.open("https://www.linkedin.com/in/christine-macharia-54091058/")
})

//resizing functions
const placeIWorkedDiv = document.getElementById("places-i-worked");
const workDiv = document.getElementById("work");
const resizeTimelineWindow = () => {
	if (workDiv.offsetWidth < 768) {
		workDiv.style.height = `${placeIWorkedDiv.offsetHeight * 1.1}px`
	} else {
		workDiv.style.height = `${placeIWorkedDiv.offsetHeight * 1.2}px`
	}
}
setInterval(()=> resizeTimelineWindow(), 200)
// window.onresize = resizeTimelineWindow()