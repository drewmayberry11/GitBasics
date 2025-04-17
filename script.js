document.getElementById("greetBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "Thanks for clicking!";
});
// Show current date and time when button is clicked
document.getElementById("showDateBtn").addEventListener("click", () => {
  const now = new Date();
  document.getElementById(
    "dateOutput"
  ).textContent = `Current Time: ${now.toLocaleString()}`;
});

// Simulate form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    document.getElementById(
      "formStatus"
    ).textContent = `Thanks, ${name}! I’ll contact you at ${email}.`;
    this.reset();
  } else {
    document.getElementById(
      "formStatus"
    ).textContent = `Please fill out both fields.`;
  }
});
