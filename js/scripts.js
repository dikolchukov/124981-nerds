var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".close-btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  popup.classList.add("animation-popup");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("animation-popup");
});
