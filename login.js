function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // هنا ممكن تضيف تحقق من صحة البيانات (اختياري)

  alert("Login successful!");

  // توجيه إلى صفحة الهوم
  window.location.href = "home.html";
}
