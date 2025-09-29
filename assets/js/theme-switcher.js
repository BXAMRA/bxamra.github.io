// theme-switcher.js
document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("theme");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Function to set the theme attribute and update toggle switch state
  function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    toggleSwitch.checked = theme === "dark";
  }

  // Initial theme set based on system color scheme
  setTheme(prefersDark ? "dark" : "light");

  // Create toggle switch element
  const toggleSwitch = document.createElement("input");
  toggleSwitch.type = "checkbox";
  toggleSwitch.className = "form-check-input";
  toggleSwitch.id = "themeToggle";
  toggleSwitch.style.cursor = "pointer";

  const label = document.createElement("label");
  label.htmlFor = "themeToggle";
  label.className = "form-check-label ms-2";
  label.textContent = "Dark Mode";

  const container = document.createElement("div");
  container.className = "form-check form-switch ms-auto";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.appendChild(toggleSwitch);
  container.appendChild(label);

  // Append the toggle to navbar container (flex container in navbar)
  const navbarContainer = document.querySelector(".navbar .container-fluid");
  if (navbarContainer) {
    navbarContainer.appendChild(container);
  }

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
});
