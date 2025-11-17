// Bouncing effect on hover
// let animation =document.getElementById("bounce");
let animation = document.querySelector('.bounce');
let pikachu =document.getElementById("pikachu");
let about_us =document.getElementById("about-us");

function onHover() {
 animation.classList.add('animate__bounce')
}
function onHoverleft() {
 animation.classList.remove('animate__bounce')
}
animation.addEventListener('mouseenter', onHover);
animation.addEventListener('mouseleave', onHoverleft);