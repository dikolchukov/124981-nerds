var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".close-btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
