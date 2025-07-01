
document.addEventListener("DOMContentLoaded", () => {
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.classList.remove("hidden");
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.add("hidden");
});
});

document.addEventListener("DOMContentLoaded", function () {
const stars = document.querySelectorAll(".star-rating .star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
    stars.forEach(s => s.classList.remove("active"));

    for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
    }
      });
    });
  });
