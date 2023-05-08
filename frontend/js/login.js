const users = [
  {
    username: "user1",
    password: "1",
  },
  {
    username: "user2",
    password: "1",
  },
  {
    username: "user3",
    password: "1",
  },
];
const form = document.querySelector("form");
window.localStorage.clear();
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const loggedInUser = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (loggedInUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    console.log(localStorage);
    alert("Đăng nhập thành công!");
    // window.localStorage.clear();
    console.log(localStorage);
    window.location.href = "./User.html"; // chuyển đến trang chủ
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng");
  }
});
