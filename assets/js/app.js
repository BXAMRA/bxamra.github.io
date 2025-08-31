document.addEventListener("DOMContentLoaded", function () {
  // Initialize all features
  initLoader();
  initNavigation();
  initScrollAnimations();
  initSkillBars();
  initContactForm();
  initParticleAnimation();
  initTypingAnimation();
  initBootstrapComponents();
});

// Loading Animation
function initLoader() {
  const loader = document.querySelector(".loader");

  // Hide loader after animations complete
  setTimeout(() => {
    if (loader) {
      loader.style.display = "none";
    }
    // Start other animations after loader
    startInitialAnimations();
  }, 2500);
}

// Start initial page animations
function startInitialAnimations() {
  // Add animation classes to elements
  const elementsToAnimate = document.querySelectorAll(
    ".hero-subtitle, .hero-description, .hero-buttons"
  );
  elementsToAnimate.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// Enhanced Bootstrap Navigation
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navbarHeight = navbar ? navbar.offsetHeight : 76;
        let targetPosition;

        // Calculate scroll position for different sections
        if (targetId === "home") {
          targetPosition = 0;
        } else if (targetId === "fiverr") {
          // For fiverr section, scroll to show it full screen
          targetPosition = targetSection.offsetTop - navbarHeight + 20;
        } else {
          targetPosition = targetSection.offsetTop - navbarHeight - 20;
        }

        // Smooth scroll to target
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });

        // Update active link immediately
        updateActiveNavLink(targetId);

        // Close mobile navbar if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // Header background on scroll
  window.addEventListener(
    "scroll",
    throttle(function () {
      if (!navbar) return;

      if (window.scrollY > 100) {
        navbar.style.background = "rgba(31, 33, 33, 0.98)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.background = "rgba(31, 33, 33, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
      }

      // Update active nav link based on scroll position
      updateActiveNavLinkOnScroll();
    }, 100)
  );

  // Initialize active nav link
  updateActiveNavLinkOnScroll();
}

// Update active navigation link based on scroll position
function updateActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 76;

  let current = "home"; // Default to home
  const scrollPosition = window.scrollY + navbarHeight + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    // Check if current scroll position is within this section
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = sectionId;
    }
  });

  // Special case: if we're at the top, always show home as active
  if (window.scrollY < 100) {
    current = "home";
  }

  updateActiveNavLink(current);
}

// Update active nav link
function updateActiveNavLink(activeId) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${activeId}`) {
      link.classList.add("active");
    }
  });
}

// Initialize Bootstrap Components
function initBootstrapComponents() {
  // Initialize tooltips if any
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers if any
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

// Enhanced Typing Animation with Moving Cursor
function initTypingAnimation() {
  const typingTextElement = document.querySelector(".typing-text");
  const typingCursor = document.querySelector(".typing-cursor");

  if (!typingTextElement || !typingCursor) return;

  const fullText = "BXAMRA";
  let currentText = "";
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function updateTyping() {
    if (isWaiting) {
      return;
    }

    if (isDeleting) {
      // Deleting characters
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Adding characters
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Update the text content
    typingTextElement.textContent = currentText;

    // Position cursor after the current text
    const textWidth = getTextWidth(
      currentText,
      getComputedStyle(typingTextElement)
    );
    typingCursor.style.left = textWidth + "px";

    let typeSpeed = 150;

    if (isDeleting) {
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, wait then start deleting
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, wait then start typing again
      isDeleting = false;
      typeSpeed = 500;
    }

    setTimeout(updateTyping, typeSpeed);
  }

  // Helper function to calculate text width
  function getTextWidth(text, fontStyle) {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = `${fontStyle.fontWeight} ${fontStyle.fontSize} ${fontStyle.fontFamily}`;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  // Start typing animation after loader
  setTimeout(() => {
    // Position cursor initially
    typingCursor.style.position = "absolute";
    typingCursor.style.left = "0px";
    updateTyping();
  }, 3000);
}

// Scroll-triggered animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Add animation classes based on element type
        if (element.classList.contains("section-title")) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }

        if (element.classList.contains("project-card")) {
          const cards = Array.from(element.parentNode.children);
          const index = cards.indexOf(element);
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, index * 100);
        }

        if (element.classList.contains("service-card")) {
          const cards = Array.from(element.parentNode.children);
          const index = cards.indexOf(element);
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, index * 100);
        }

        if (element.classList.contains("contact-item")) {
          const items = Array.from(element.parentNode.children);
          const index = items.indexOf(element);
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
          }, index * 150);
        }

        if (element.classList.contains("skill-item")) {
          animateSkillBar(element);
        }

        if (element.classList.contains("education-item")) {
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
          }, 100);
        }
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const elementsToObserve = document.querySelectorAll(
    ".section-title, .project-card, .service-card, .contact-item, .skill-item, .education-item"
  );
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}

// Skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".progress-bar");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.setProperty("--skill-width", `${width}%`);
    bar.style.width = "0%"; // Start from 0
  });
}

function animateSkillBar(skillItem) {
  const progressBar = skillItem.querySelector(".progress-bar");
  const width = progressBar.getAttribute("data-width");

  setTimeout(() => {
    progressBar.style.width = `${width}%`;
    progressBar.style.transition = "width 2s ease-out";
  }, 500);
}

// Enhanced Contact Form
function initContactForm() {
  const contactForm = document.querySelector(".contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const subject = document.getElementById("subject")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all fields", "error");
        return;
      }
      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      submitBtn.disabled = true;

      try {
        // Build payload directly from the form (uses name= attributes)
        const data = new FormData(this);

        // POST to Formspree endpoint defined in the form action
        const res = await fetch(this.action, {
          method: "POST",
          headers: { Accept: "application/json" }, // request JSON response
          body: data, // let browser set multipart/form-data + boundary
        });

        if (res.ok) {
          showNotification(
            "Message sent successfully! I'll get back to you soon.",
            "success"
          );
          this.reset();
        } else {
          // Try to parse JSON error messages from Formspree
          let msg = "Submission failed. Please try again.";
          try {
            const err = await res.json();
            if (err && Array.isArray(err.errors)) {
              msg = err.errors.map((e) => e.message).join(", ");
            }
          } catch (_) {}
          showNotification(msg, "error");
        }
      } catch (err) {
        // Covers network/CORS failures
        showNotification("Network error. Please try again.", "error");
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced notification system with Bootstrap styling
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element with Bootstrap classes
  const notification = document.createElement("div");
  notification.className = `notification alert position-fixed top-0 end-0 m-3`;

  // Set alert type based on notification type
  switch (type) {
    case "success":
      notification.classList.add("alert-success");
      notification.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i>${message}`;
      break;
    case "error":
      notification.classList.add("alert-danger");
      notification.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i>${message}`;
      break;
    case "warning":
      notification.classList.add("alert-warning");
      notification.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i>${message}`;
      break;
    default:
      notification.classList.add("alert-info");
      notification.innerHTML = `<i class="bi bi-info-circle-fill me-2"></i>${message}`;
  }

  notification.style.cssText = `
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Enhanced particle animation with mouse interaction
function initParticleAnimation() {
  const particles = document.querySelectorAll(".particle");

  particles.forEach((particle, index) => {
    // Add random delay to particle animations
    const delay = Math.random() * 2;
    particle.style.animationDelay = `${delay}s`;

    // Add mouse interaction
    particle.addEventListener("mouseenter", function () {
      this.style.opacity = "0.3";
      this.style.transform = "scale(1.5)";
    });

    particle.addEventListener("mouseleave", function () {
      this.style.opacity = "0.1";
      this.style.transform = "scale(1)";
    });
  });

  // Add parallax effect to particles
  window.addEventListener(
    "scroll",
    throttle(function () {
      const scrollTop = window.pageYOffset;

      particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.05;
        const yPos = -(scrollTop * speed);
        particle.style.transform += ` translateY(${yPos}px)`;
      });
    }, 16)
  ); // ~60fps
}

// Add enhanced hover effects and interactions
document.addEventListener("DOMContentLoaded", function () {
  // Project cards enhanced hover effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
      this.style.boxShadow = "0 15px 40px rgba(50, 128, 141, 0.3)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "";
    });
  });

  // Service cards enhanced hover effect
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("featured")) {
        this.style.transform = "translateY(-12px) scale(1.02)";
        this.style.borderColor = "var(--color-fiverr-green)";
        this.style.boxShadow = "0 15px 35px rgba(29, 191, 115, 0.2)";
      }
    });

    card.addEventListener("mouseleave", function () {
      if (!this.classList.contains("featured")) {
        this.style.transform = "translateY(0) scale(1)";
        this.style.borderColor = "";
        this.style.boxShadow = "";
      }
    });
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
                z-index: 1;
            `;

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Enhanced Fiverr button interaction
  const fiverrButton = document.querySelector(".btn-fiverr");
  if (fiverrButton) {
    fiverrButton.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 0 40px rgba(29, 191, 115, 0.8)";
    });

    fiverrButton.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Add pulsing animation to featured service card
  const featuredCard = document.querySelector(".service-card.featured");
  if (featuredCard) {
    featuredCard.style.animation = "featured-pulse 3s ease-in-out infinite";
  }

  // Add smooth reveal animation to education items
  const educationItems = document.querySelectorAll(".education-item");
  educationItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-30px)";
    item.style.transition = "all 0.6s ease-out";
    item.style.animationDelay = `${index * 0.1}s`;
  });
});

// Utility function to throttle events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced smooth scrolling for hero buttons
document.addEventListener("DOMContentLoaded", function () {
  const heroButtons = document.querySelectorAll(".hero-buttons .btn");
  heroButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 76;
          let targetPosition;

          if (targetId === "fiverr") {
            targetPosition = targetSection.offsetTop - navbarHeight + 20;
          } else {
            targetPosition = targetSection.offsetTop - navbarHeight - 20;
          }

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: "smooth",
          });

          // Update active nav link
          updateActiveNavLink(targetId);
        }
      }
    });
  });
});

// Add CSS for additional animations
const additionalStyles = document.createElement("style");
additionalStyles.textContent = `
    @keyframes featured-pulse {
        0%, 100% {
            box-shadow: 0 0 20px rgba(29, 191, 115, 0.15);
        }
        50% {
            box-shadow: 0 0 25px rgba(29, 191, 115, 0.25);
        }
    }
    
    .education-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s ease-out;
    }
    
    .spinner-border-sm {
        width: 1rem;
        height: 1rem;
        border-width: 0.1em;
    }
    
    .alert {
        border: none;
        font-weight: 500;
    }
    
    /* Enhanced mobile navbar */
    @media (max-width: 991.98px) {
        .navbar-collapse {
            background: var(--bs-card-bg);
            border-radius: 8px;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid var(--bs-border-color);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .navbar-nav .nav-link {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgba(94, 82, 64, 0.1);
            text-align: center;
        }
        
        .navbar-nav .nav-link:last-child {
            border-bottom: none;
        }
        
        .navbar-nav .nav-link:hover {
            background: rgba(50, 128, 141, 0.1);
            border-radius: 4px;
        }
    }
    
    /* Improved typing container positioning */
    .typing-container {
        position: relative;
        display: inline-block;
        height: 1.2em;
    }
    
    .typing-cursor {
        position: absolute;
        top: 0;
        transition: left 0.1s ease;
    }
`;

document.head.appendChild(additionalStyles);

// Performance optimization - Intersection Observer for lazy loading
const lazyElements = document.querySelectorAll("[data-lazy]");
if (lazyElements.length > 0) {
  const lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          // Handle lazy loading logic here
          lazyObserver.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );

  lazyElements.forEach((element) => {
    lazyObserver.observe(element);
  });
}

// Add preloader for better UX
window.addEventListener("load", function () {
  // Hide any remaining loading states
  const loadingElements = document.querySelectorAll(".loading");
  loadingElements.forEach((element) => {
    element.classList.remove("loading");
  });
});

// Error handling for external resources
window.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      // Handle image loading errors
      e.target.style.display = "none";
    }
  },
  true
);

// Initialize smooth reveal animations
function initRevealAnimations() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

// Call reveal animations
initRevealAnimations();
