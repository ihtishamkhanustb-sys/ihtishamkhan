// Navigation Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// Navigation Menu Toggle End

// About Section
// Animate progress bars when section is in view
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");
  const aboutSection = document.querySelector(".about");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((progress) => {
            const width = progress.getAttribute("data-width");
            progress.style.width = width;
          });

          // Stop observing after animation
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
});
// Smooth Scrolling for Navigation Links Start
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
// Smooth Scrolling for Navigation Links End

// Services pages
// Add intersection observer for animation
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial state for animation
  serviceCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    card.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(card);
  });
});

// Portfolio Filtering Start
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
// Portfolio Filtering End

// Testimonials Slider Start
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(n) {
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (n + testimonials.length) % testimonials.length;

  testimonials[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Initialize slider
showSlide(currentSlide);

// Add click events to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Auto slide every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
// Testimonials Slider End

// Form Validation Start
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    // Reset error states
    [name, email, subject, message].forEach((field) => {
      field.style.borderColor = "#e5e7eb";
    });

    // Validate name
    if (!name.value.trim()) {
      name.style.borderColor = "red";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.style.borderColor = "red";
      isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
      subject.style.borderColor = "red";
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      message.style.borderColor = "red";
      isValid = false;
    }

    if (isValid) {
      // Here you would typically send the form data to a server
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    }
  });
}
// Form Validation End

// Scroll Animation Start
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".service-card, .portfolio-item, .skill"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize elements for animation
document
  .querySelectorAll(".service-card, .portfolio-item")
  .forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(50px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

document.querySelectorAll(".progress").forEach((progress) => {
  const width = progress.style.width;
  progress.style.width = "0";
  progress.dataset.width = width;

  setTimeout(() => {
    progress.style.width = width;
  }, 500);
});

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);
// Initial check on page load
window.addEventListener("load", animateOnScroll);
// Scroll Animation End

// Portfolio data array - easily manageable and expandable
const portfolioData = [
  {
    id: 1,
    title: "E-commerce SEO Overhaul",
    category: "technical",
    image: "https://placehold.co/600x400/4f46e5/ffffff?text=E-commerce+SEO",
    description:
      "Comprehensive technical SEO overhaul for an online retailer resulting in significant traffic and conversion growth.",
    stats: {
      traffic: "157%",
      conversions: "203%",
    },
    link: "#",
  },
  {
    id: 2,
    title: "Content Strategy Implementation",
    category: "content",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Content+Strategy",
    description:
      "Developed and executed content strategy that dramatically increased organic traffic in just 8 months.",
    stats: {
      traffic: "225%",
      timeframe: "8 months",
    },
    link: "#",
  },
  {
    id: 3,
    title: "Local SEO for Service Business",
    category: "local",
    image: "https://placehold.co/600x400/f43f5e/ffffff?text=Local+SEO",
    description:
      "Local SEO campaign that positioned a service business at the top of search results for key phrases.",
    stats: {
      rankings: "15+",
      position: "#1",
    },
    link: "#",
  },
  {
    id: 4,
    title: "Website Migration SEO",
    category: "technical",
    image: "https://placehold.co/600x400/818cf8/ffffff?text=Website+Migration",
    description:
      "Managed a complex platform migration with no loss in organic traffic or search rankings.",
    stats: {
      traffic: "0%",
      rankings: "0%",
    },
    link: "#",
  },
  {
    id: 5,
    title: "International SEO Expansion",
    category: "technical",
    image: "https://placehold.co/600x400/4f46e5/ffffff?text=International+SEO",
    description:
      "Scaled an e-commerce site to 5 new international markets with localized SEO strategies.",
    stats: {
      markets: "5",
      growth: "300%",
    },
    link: "#",
  },
  {
    id: 6,
    title: "Blog Content Strategy",
    category: "content",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Blog+Strategy",
    description:
      "Created and implemented a blog content strategy that increased organic traffic by 180%.",
    stats: {
      traffic: "180%",
      articles: "50+",
    },
    link: "#",
  },
  {
    id: 7,
    title: "The Psychology Hub",
    category: "content",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Psychology+Hub",
    description:
      "Content optimization and SEO strategy for psychology and mental health educational platform.",
    stats: {
      traffic: "165%",
      keywords: "120+",
    },
    link: "psychology-hub.html",
  },
  {
    id: 8,
    title: "Atlanta Decking",
    category: "local",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Atlanta+Decking",
    description:
      "Local SEO optimization for decking and outdoor construction services in Atlanta region.",
    stats: {
      rankings: "12+",
      position: "#1",
    },
    link: "atlanta-decking.html",
  },
  {
    id: 9,
    title: "Instascents",
    category: "technical",
    image: "https://placehold.co/600x400/ec4899/ffffff?text=Instascents",
    description:
      "E-commerce site technical SEO and performance optimization for fragrance products.",
    stats: {
      traffic: "142%",
      conversions: "178%",
    },
    link: "instascents.html",
  },
  {
    id: 10,
    title: "Peak Refreshments",
    category: "content",
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Peak+Refreshments",
    description:
      "Content strategy and on-page optimization for beverage and refreshment products.",
    stats: {
      traffic: "195%",
      engagement: "156%",
    },
    link: "peak-refreshments.html",
  },
  {
    id: 11,
    title: "Sparx Med",
    category: "technical",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Sparx+Med",
    description:
      "Medical and healthcare website technical SEO with structured data implementation.",
    stats: {
      traffic: "128%",
      indexing: "100%",
    },
    link: "sparx-med.html",
  },
  {
    id: 12,
    title: "Dancing Dragons",
    category: "content",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Dancing+Dragons",
    description:
      "Content and keyword optimization for entertainment and cultural services.",
    stats: {
      traffic: "189%",
      keywords: "95+",
    },
    link: "dancing-dragons.html",
  },
  {
    id: 13,
    title: "ThrivePop",
    category: "content",
    image: "https://placehold.co/600x400/84cc16/ffffff?text=ThrivePop",
    description:
      "SEO content strategy and blog optimization for growth and productivity platform.",
    stats: {
      traffic: "212%",
      articles: "85+",
    },
    link: "thrivepop.html",
  },
  {
    id: 14,
    title: "Smith Green Law",
    category: "local",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Smith+Green+Law",
    description:
      "Local SEO for legal services with Google Business Profile optimization and local citations.",
    stats: {
      rankings: "18+",
      citations: "50+",
    },
    link: "smith-green-law.html",
  },
  {
    id: 15,
    title: "The Quran Path",
    category: "content",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Quran+Path",
    description:
      "Educational content optimization and SEO strategy for Islamic learning platform.",
    stats: {
      traffic: "173%",
      pages: "200+",
    },
    link: "quran-path.html",
  },
  {
    id: 16,
    title: "24 Hour Flood Pros",
    category: "local",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=24hr+Flood+Pros",
    description:
      "Emergency services local SEO optimization for immediate service visibility and lead generation.",
    stats: {
      calls: "89+",
      leads: "156%",
    },
    link: "flood-pros.html",
  },
];

// Function to render portfolio items
function renderPortfolioItems(filter = "all") {
  const portfolioGrid = document.getElementById("portfolio-grid");
  portfolioGrid.innerHTML = "";

  const filteredData =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  filteredData.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";
    portfolioItem.setAttribute("data-category", item.category);

    // Create stats HTML based on available stats
    let statsHTML = "";
    for (const [key, value] of Object.entries(item.stats)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      statsHTML += `
                        <div class="stat">
                            <span class="stat-value">${value}</span>
                            <span class="stat-label">${label}</span>
                        </div>
                    `;
    }

    portfolioItem.innerHTML = `
                    <div class="portfolio-image">
                        <img src="${item.image}" alt="${item.title}" />
                        <div class="portfolio-overlay">
                            <span class="portfolio-category">${item.category}</span>
                        </div>
                    </div>
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="portfolio-stats">
                            ${statsHTML}
                        </div>
                        <a href="${item.link}" class="portfolio-link">Visit Website</a>
                    </div>
                `;

    portfolioGrid.appendChild(portfolioItem);
  });
}

// Initialize portfolio
document.addEventListener("DOMContentLoaded", function () {
  renderPortfolioItems();

  // Add filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter portfolio
      const filter = this.getAttribute("data-filter");
      renderPortfolioItems(filter);
    });
  });

  // Add animation on scroll
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial state for animation
  portfolioItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(50px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    item.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(item);
  });
});

// Testimonial
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  let currentSlide = 0;
  let autoSlideInterval;

  // Function to show a specific slide
  function showSlide(n) {
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + testimonials.length) % testimonials.length;

    testimonials[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Initialize slider
  showSlide(currentSlide);

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      resetAutoSlide();
      showSlide(index);
    });
  });

  // Add click events to arrows
  prevArrow.addEventListener("click", () => {
    resetAutoSlide();
    showSlide(currentSlide - 1);
  });

  nextArrow.addEventListener("click", () => {
    resetAutoSlide();
    showSlide(currentSlide + 1);
  });

  // Auto slide function
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  // Reset auto slide timer
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Start auto slide
  startAutoSlide();

  // Pause auto slide when hovering over testimonials
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  testimonialsContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  testimonialsContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      resetAutoSlide();
      showSlide(currentSlide - 1);
    } else if (e.key === "ArrowRight") {
      resetAutoSlide();
      showSlide(currentSlide + 1);
    }
  });

  // Swipe support for touch devices
  let touchStartX = 0;
  let touchEndX = 0;

  testimonialsContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  testimonialsContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      resetAutoSlide();
      showSlide(currentSlide + 1);
    }

    if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      resetAutoSlide();
      showSlide(currentSlide - 1);
    }
  }
});

// Contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("form-status");

  // Floating label functionality
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea"
  );
  formInputs.forEach((input) => {
    // Check if input has value on page load (for browser autofill)
    if (input.value) {
      input.previousElementSibling.style.top = "-0.6rem";
      input.previousElementSibling.style.left = "1rem";
      input.previousElementSibling.style.fontSize = "0.8rem";
      input.previousElementSibling.style.color = "var(--primary-glow)";
    }

    input.addEventListener("focus", () => {
      input.previousElementSibling.style.top = "-0.6rem";
      input.previousElementSibling.style.left = "1rem";
      input.previousElementSibling.style.fontSize = "0.8rem";
      input.previousElementSibling.style.color = "var(--primary-glow)";
    });

    input.addEventListener("blur", () => {
      if (!input.value) {
        input.previousElementSibling.style.top = "1.2rem";
        input.previousElementSibling.style.left = "1.5rem";
        input.previousElementSibling.style.fontSize = "1rem";
        input.previousElementSibling.style.color = "var(--text-muted)";
      }
    });
  });

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    let isValid = true;
    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--accent-color)";
      } else {
        input.style.borderColor = "";
      }
    });

    if (!isValid) {
      statusMessage.textContent = "Please fill in all required fields.";
      statusMessage.className = "status-message error";
      return;
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      statusMessage.textContent = "Please enter a valid email address.";
      statusMessage.className = "status-message error";
      emailInput.style.borderColor = "var(--accent-color)";
      return;
    }

    // Simulate form submission
    statusMessage.textContent = "Sending your message...";
    statusMessage.className = "status-message";

    // In a real application, you would send the form data to a server here
    setTimeout(() => {
      statusMessage.textContent =
        "Thank you! Your message has been sent successfully.";
      statusMessage.className = "status-message success";
      contactForm.reset();

      // Reset floating labels
      formInputs.forEach((input) => {
        input.previousElementSibling.style.top = "1.2rem";
        input.previousElementSibling.style.left = "1.5rem";
        input.previousElementSibling.style.fontSize = "1rem";
        input.previousElementSibling.style.color = "var(--text-muted)";
      });
    }, 1500);
  });

  // Clear error styles on input
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.style.borderColor = "";
      statusMessage.style.display = "none";
    });
  });
});

// Footer
// Back to top functionality
document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});

// Initialize back to top button
document.querySelector(".back-to-top").style.opacity = "0";
document.querySelector(".back-to-top").style.visibility = "hidden";
document.querySelector(".back-to-top").style.transition =
  "opacity 0.3s ease, visibility 0.3s ease";

// Newsletter form submission
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      this.reset();
    }
  });
