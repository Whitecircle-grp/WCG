document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Collect form data
  // You can send it to backend via fetch() or axios here
  alert("Sign-Up Successful!");
});

document.getElementById("signinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Backend auth logic goes here
  alert("Login Successful!");
});
