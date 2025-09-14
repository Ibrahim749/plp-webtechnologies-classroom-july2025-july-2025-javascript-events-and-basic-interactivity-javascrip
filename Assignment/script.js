// === Event Handling & Form Validation ===
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  // Custom validation logic
  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = `Thank you, ${name}! Your message has been received.`;
    feedback.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// === Interactive Feature 1: Background Color Changer ===
document.getElementById("colorBtn").addEventListener("click", () => {
  const colors = ["#ffe4e1", "#e6e6fa", "#f0fff0", "#f5f5dc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// === Interactive Feature 2: Live Text Preview ===
document.getElementById("liveInput").addEventListener("input", (e) => {
  const preview = document.getElementById("previewText");
  preview.textContent = e.target.value || "Preview will appear here";
});
