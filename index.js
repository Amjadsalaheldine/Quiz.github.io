function register() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;

  if (!username || !email || !password || !phone || !gender) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Phone:", phone);
  console.log("Gender:", gender);

  alert("Register successful!");

  // توجيه إلى صفحة تسجيل الدخول بعد التسجيل
  window.location.href = "login.html";
}
