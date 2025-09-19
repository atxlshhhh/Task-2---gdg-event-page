// Countdown Timer
const eventDate = new Date("Nov 15, 2025 10:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    timer.innerHTML = "🎉 The event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Registration Form Simulation
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMessage.style.display = "block";
  form.reset();
});
