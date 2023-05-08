
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("Vui lòng nhập tên người dùng và mật khẩu");
  }
  else if (username == data.username && password == data.password) {
    alert("Đăng nhập thành công");
    window.location.href = "./User.html";
  }
});