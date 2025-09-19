// Countdown Timer
const eventDate = new Date("Oct 15, 2025 10:00:00").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  if (diff < 0) {
    document.getElementById("timer").innerHTML = "Event Started!";
    clearInterval(timer);
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Form Submission Simulation
document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  this.reset();
});

// Dark/Light Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
