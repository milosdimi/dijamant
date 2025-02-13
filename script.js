function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mzzdgdpg", {
    method: "POST",
    body: data, // Nutze die definierte "data"-Variable
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.error("Fehler beim Senden:", error);
    });
}

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

// modal
function jumpToSlide(carouselId, slideIndex) {
  var carousel = document.querySelector("#" + carouselId);
  if (!carousel) {
    console.error("Fehler: Carousel mit ID '" + carouselId + "' nicht gefunden.");
    return;
  }
  var bsCarousel = new bootstrap.Carousel(carousel);
  bsCarousel.to(slideIndex);
}


function changeImage(imageSrc) {
  const mainImage = document.getElementById("mainImage");
  mainImage.style.opacity = "0"; // Blendet Bild kurz aus für den Effekt
  setTimeout(() => {
    mainImage.src = imageSrc;
    mainImage.style.opacity = "1"; // Blendet Bild wieder ein
  }, 300);
}
