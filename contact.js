document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const responseMsg = document.getElementById("responseMsg");

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  // Simulate sending form data
  setTimeout(() => {
    responseMsg.textContent = "✅ Thank you! Your message has been sent.";
    responseMsg.style.color = "green";
    form.reset();
  }, 1000);
});
