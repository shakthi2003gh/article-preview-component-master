const button = document.querySelector(".profile__share");

button.addEventListener("click", (e) => {
  const profileCard = e.target.closest(".card__profile");
  profileCard.classList.toggle("share--button-pressed");
});
