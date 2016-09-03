var link = document.querySelector(".feedback-form-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var login = popup.querySelector("[name-login]");
var back = document.querySelector("body");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("feedback-show");
	login.focus();
});
link.addEventListener("click", function (event) {
	event.preventDefault();
	back.classList.add("popup-back");
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("feedback-show");
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	back.classList.remove("popup-back");
});