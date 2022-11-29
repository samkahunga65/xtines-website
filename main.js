new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    autoplay: 2700
}).mount()

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