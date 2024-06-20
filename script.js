
document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Function to animate sections using GSAP
  function animateSections() {
    // Home Section animation
    gsap.from(".home .code", {
      scrollTrigger: {
        trigger: ".home",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "bounce",
    });

    // About Section animation
    gsap.from(".about .code", {
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 0,
      x: -50,
    });

    // Projects Section animation
    gsap.from(".projects .code", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 0,
      y: -50,
    });

    // Skills Section animation
    gsap.from(".skills .code", {
      scrollTrigger: {
        trigger: ".skills",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 0,
      x: -50,
    });

    // Contact Section animation
    gsap.from(".contact .code", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      opacity: 0,
      y: -50,
    });

    // 3D Cube Animation
    gsap.from(".cube", {
      scrollTrigger: {
        trigger: ".home",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      opacity: 0,
      rotateY: -360,
      ease: "power2.out",
    });
  }

  // Initialize animations on page load
  animateSections();

  // Smooth scroll and refresh animations on navigation link click
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Refresh ScrollTrigger after smooth scroll animation completes
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000); // Adjust timeout if necessary
    });
  });

  // Refresh animations on window resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  // Interactive 3D Cube: Rotate based on mouse movement
  const cube = document.querySelector(".cube");

  cube.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 10;
    const y = (window.innerHeight / 2 - e.clientY) / 10;
    cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  // Reset cube rotation on mouse leave
  cube.addEventListener("mouseleave", () => {
    cube.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});



/*Typing js*/

document.addEventListener("DOMContentLoaded", () => {
  // Typing animation function
  function typeText(element, text, delay, isLast = false) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else if (!isLast) {
        element.classList.remove("typing");
      }
    }
    type();
  }

  // Typing text animations
  const mainTitle = document.getElementById("main-title");
  const welcomeMessage = document.getElementById("welcome-message");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  typeText(mainTitle, "Md. Delowar Hossen", 100);
  setTimeout(() => typeText(welcomeMessage, "Welcome to My Portfolio", 100), 2000);
  setTimeout(() => typeText(line1, "~ npm start", 100), 4000);
  setTimeout(() => typeText(line2, "Starting portfolio...", 100), 6000);
  setTimeout(() => typeText(line3, "Listening on port 3000...", 100, true), 8000); // Last element
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
