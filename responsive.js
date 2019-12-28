let headerMenu = document.querySelector("header ul");
let headerMenuShown = false;
function toggleMenu() {
  if (headerMenuShown) {
    headerMenu.style.display = "none";
  } else {
    headerMenu.style.display = "block";
  }
  headerMenuShown = !headerMenuShown;
}
