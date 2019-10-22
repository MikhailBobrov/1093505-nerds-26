var link = document.querySelector(".map-button");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".popup-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log (login.value);
  console.log (email.value);
});




