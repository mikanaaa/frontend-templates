let modal = document.querySelector(".modal-container");
function openModal() {
  modal.style.display = "block";
}
function closeModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
function closeModalButton(e) {
  modal.style.display = "none";
}
