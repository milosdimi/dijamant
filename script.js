document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Zeigt den Button, wenn gescrollt wird
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Beim Klicken nach oben scrollen
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const scrollHandler = () => {
    scrollElements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); // Falls Elemente schon sichtbar sind
});
// Cookie
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");

  // Überprüfen, ob der Benutzer bereits zugestimmt hat
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.classList.add("show");
  }

  // Beim Klicken "akzeptieren"
  acceptCookiesBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");
  });
});
