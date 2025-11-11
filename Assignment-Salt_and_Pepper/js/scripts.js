let imageContainer = document.getElementById("cover_image");
let imageCollection = ["Images/Main_logo/Main_cover_img01.webp","Images/Main_logo/Main_cover_img02.webp","Images/Main_logo/Main_cover_img03.webp"];
let index=0;
setInterval(() => {
   
   index =(index + 1) % imageCollection.length;
   imageContainer.src = imageCollection[index];

}, 3000);