/**
 * @description give direction to homepage
 * @returns redirect to home page
 */

function scrollerBehaviour() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
}
scrollerBehaviour();

/**
 * @description This is my slider
 * @returns image hide and show
 * @private function
 * @function showSlides()
 */
function slider() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
  }
}

slider();

/**
 * @description This is my Form
 * @return Input data
 */

function submitForm() {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const DataSaved = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${
      message || "No message provided"
    }`;
    const alertMessage = `Form Submitted!\nThank You Join Us`;

    console.log(DataSaved);
    alert(alertMessage);

    this.reset();
  });
}

submitForm();

/**
 * @description Team members slider
 */

function teamSlide() {
  const slider = document.querySelector(".members");
  const slides = document.querySelectorAll(".member");
  const totalSlides = slides.length; // 7
  let currentIndex = 0;

  for (let i = 0; i < 3; i++) {
    const clone = slides[i].cloneNode(true);
    slider.appendChild(clone);
  }

  function updateSlider() {
    const offset = currentIndex * (100 / 3);
    slider.style.transform = `translateX(-${offset}%)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex > totalSlides - 3) {
      currentIndex = 0; 
      slider.style.transition = 'none'; 
      
      updateSlider();

      slider.offsetHeight;
      slider.style.transition = 'transform 0.3s ease-in-out';
    }
    updateSlider();
  } 
  setInterval(nextSlide, 3000);
}
teamSlide();
