let images = ["image400x200","image400x2002","image400x2003","image400x2004"];
let slideshowImage = document.querySelector(".slideshow > img");
function updateImage(element){
  slideshowImage.src = "assets/" + images[element.dataset.number] + ".jpg";
}