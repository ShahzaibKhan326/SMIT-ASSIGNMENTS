//animate the image with bouncing effect
let items = document.querySelectorAll('#pikachu, #about-us');

items.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.classList.add('animate__bounce');
    });

    item.addEventListener('mouseleave', function () {
        this.classList.remove('animate__bounce');
    });
});
//show and hide long Tab

let targetDiv = document.querySelector('.long-image');
function showLongTab()
{
if(targetDiv.style.display==="flex")
{
    targetDiv.style.display="none"
}
else 
{
  targetDiv.style.display="flex";
}
}
