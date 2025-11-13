let imageContainer = document.getElementById("cover_image");
let imageCollection = ["Images/Main_logo/Main_cover_img01.webp","Images/Main_logo/Main_cover_img02.webp","Images/Main_logo/Main_cover_img03.webp"];
let index=0;
setInterval(() => {
   
   index =(index + 1) % imageCollection.length;
   imageContainer.src = imageCollection[index];

}, 3000);

//--------
   let contactDetail = document.getElementById("content-detail");
   let contentList = document.getElementById("list-content");
   let list_plusSign = document.getElementById("list_plus_icon");
   let list_minusSign = document.getElementById("list_minus_icon");
   let link_plusSign = document.getElementById("link_plus_icon");
   let link_minusSign = document.getElementById("link_minus_icon");

function showContacDetail ()
{
   contactDetail.style.display="block";
   list_plusSign.style.display="none";
   list_minusSign.style.display="block"

}
function hideContactDetail()
{
   contactDetail.style.display="none";
   list_plusSign.style.display="block";
   list_minusSign.style.display="none"
}

function showContentlinks()
{
   contentList.style.display="block";
   link_plusSign.style.display="none";
   link_minusSign.style.display="block";

}
function hideContentlinks()
{
   contentList.style.display="none";
   link_plusSign.style.display="block";
   link_minusSign.style.display="none";
}