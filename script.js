// Highlight active nav link
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Real-time clock in footer
const footer = document.querySelector('footer');
setInterval(() => {
  const now = new Date();
  footer.innerHTML = `<p>&copy; 2025 HealthCare+ | All rights reserved | ${now.toLocaleTimeString()}</p>`;
}, 1000);

// Emergency link alert
document.getElementById('emergency-link').addEventListener('click', () => {
  alert("🚨 Connecting you to emergency services...");
});

// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
