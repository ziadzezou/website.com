const bar = document.querySelector(".bars");
const mobMenu = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scroll-to-top");
  const scrollyVal = scrollY;
  const color = document.querySelector("nav ul li a");
  if (scrollyVal >= 203.1999969482422) {
    scroll.style.scale = "1";
    themeSwitch.style.right = "80px";
  } else {
    scroll.style.scale = "0";
    themeSwitch.style.right = "30px";
  }
  const nav = document.querySelector("nav");

  scrollyVal >= 203.1999969482422
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});
const links = document.querySelectorAll(".mobile-menu ul li a");

bar.addEventListener("click", () => {
  mobMenu.classList.toggle("show");
  bar.classList.toggle("show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    mobMenu.classList.remove("show");
    bar.classList.remove("show");
  });
});

const counters = document.querySelectorAll(".statistic-count");
const duration = 3000; // Total duration for the counting animation in milliseconds (3 seconds)

const startCounting = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const countInterval = target / (duration / 10); // Adjust the increment speed based on the total duration

    let count = 0;

    const updateCount = () => {
      count += countInterval;

      if (count < target) {
        counter.innerText = Math.ceil(count); // Increment the counter
        setTimeout(updateCount, 10); // Update every 10ms for smooth animation
      } else {
        counter.innerText = target; // Ensure it ends at the exact target value
      }
    };

    updateCount();
  });
};

// Intersection Observer to detect when the section is in view
const observerOptions = {
  threshold: 0.5, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounting(); // Start counting when the section is in view
      observer.unobserve(entry.target); // Stop observing after counting starts
    }
  });
}, observerOptions);

// Start observing the statistics section
const statsSection = document.querySelector(".statistics-section");
observer.observe(statsSection);

// Intersection Observer options
const observerConfig = {
  threshold: 0.2, // Trigger when 20% of the element is visible
};

// Function to observe elements and add 'in-view' class when they come into view
const animateOnScroll = new IntersectionObserver(
  (elements, observerInstance) => {
    elements.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("in-view"); // Add in-view class to trigger animation
        observerInstance.unobserve(element.target); // Stop observing once the animation starts
      }
    });
  },
  observerConfig
);

// Select all elements with the 'hidden' class
const scrollElements = document.querySelectorAll(".hidden");

// Observe each element to trigger the animation when it comes into view
scrollElements.forEach((scrollElement) => {
  animateOnScroll.observe(scrollElement);
});

let email = document.querySelector('.subscription-form input[type="email"] ');
let sub = document.querySelector(".subscription-form ");
var intro = document.querySelector(".intro-container .message");
sub.onsubmit = set;
function set() {
  localStorage.setItem("emailVal", email.value);
  localStorage.getItem("emailVal");
  email.value = "";
  intro.textContent = "now you are subscribed";
  intro.style.color = "green";
}

const themeSwitch = document.querySelector(" .themeswitch");
let darkmode = localStorage.getItem("dark_mode");

const enable = () => {
  document.body.classList.add("dark_mode");
  localStorage.setItem("dark_mode", "active");
};

const disable = () => {
  document.body.classList.remove("dark_mode");
  localStorage.setItem("dark_mode", null);
};

if (darkmode === "active") enable();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("dark_mode");
  darkmode !== "active" ? enable() : disable();
});

localStorage.removeItem("user");

window.addEventListener("load", function (e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: "smooth",
        });
      }, 100);
    }
  }
});

/**
 * Navmenu Scrollspy
 */
let navmenulinks = document.querySelectorAll("nav a");

function navmenuScrollspy() {
  navmenulinks.forEach((navmenulink) => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".navmenu a.active")
        .forEach((link) => link.classList.remove("active"));
      navmenulink.classList.add("active");
    } else {
      navmenulink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);

document
  .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  .forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
      faqItem.parentNode.classList.toggle("faq-active");
    });
  });
