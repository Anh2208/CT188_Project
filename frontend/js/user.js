const provinceSelect = document.getElementById("province-select");
const districtSelect = document.getElementById("district-select");
const wardSelect = document.getElementById("ward-select");
let provinceCode;

//check user
if (localStorage.getItem("user")) {
  console.log(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email;
  const userName = user.username;
  const userPass = user.password;
  const userPhone = user.phone;
  const userSex = user.sex;

  document.getElementById("email").value = userEmail;
  document.getElementById("username").value = userName;
  document.getElementById("phone").value = userPhone;
  document.getElementById("repassword").value = userPass;
  if (userSex == "female") {
    document.getElementById("female").checked = true;
  } else {
    document.getElementById("male").checked = true;
  }
}

// Lấy danh sách các tỉnh/thành phố
fetch("https://provinces.open-api.vn/api/p")
  .then((response) => response.json())
  .then((data) => {
    // Tạo option cho dropdown menu tỉnh/thành phố
    data.forEach((province) => {
      const option = document.createElement("option");
      option.value = province.code;
      option.text = province.name;
      provinceSelect.appendChild(option);
    });
  });

// Khi người dùng chọn tỉnh/thành phố
provinceSelect.addEventListener("change", () => {
  provinceCode = provinceSelect.value;

  // Lấy danh sách các huyện/quận của tỉnh/thành phố đã chọn
  fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
    .then((response) => response.json())
    .then((data) => {
      // Xóa tất cả các option trong dropdown menu huyện/quận
      districtSelect.innerHTML = "";

      // Tạo option cho dropdown menu huyện/quận
      data.districts.forEach((district) => {
        const option = document.createElement("option");
        option.value = district.code;
        option.text = district.name;
        districtSelect.appendChild(option);
      });
    });
});

// Khi người dùng chọn huyện/quận
districtSelect.addEventListener("change", () => {
  const districtCode = districtSelect.value;

  // Lấy danh sách các xã/phường của huyện/quận đã chọn
  fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
    .then((response) => response.json())
    .then((data) => {
      // Xóa tất cả các option trong dropdown menu xã/phường
      wardSelect.innerHTML = "";

      // Tạo option cho dropdown menu xã/phường
      data.wards.forEach((ward) => {
        const option = document.createElement("option");
        option.value = ward.code;
        option.text = ward.name;
        wardSelect.appendChild(option);
      });
    });
});

// kiểm tra số điện thoại và email có hợp lệ hay không
const form = document.querySelector(".input");
const nameInput = form.querySelector("#username");
const emailInput = form.querySelector("#email");
const phoneInput = form.querySelector("#phone");
const emailError = form.querySelector("#email-error");
const phoneError = form.querySelector("#phone-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  const phone = phoneInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== "" && !emailRegex.test(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (phone !== "" && !phoneRegex.test(phone)) {
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }

  // Nếu email và số điện thoại hợp lệ, tiến hành lưu thông tin chỉnh sửa
  if (
    emailError.style.display === "none" &&
    phoneError.style.display === "none"
  ) {
    // Code để lưu thông tin chỉnh sửa
    console.log("Lưu thông tin chỉnh sửa thành công!");
  }
});

//
function checkPassword() {
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("checknewPassword").value;

  if (newPassword == confirmPassword) {
    alert("Đổi mật khẩu thành công!!!");
    // document.getElementById("password-match-message").innerHTML =
    //   "Mật khẩu mới trùng khớp.";
  } else {
    alert("sai roi ne");
    // document.getElementById("password-match-message").innerHTML =
    //   "Mật khẩu mới không trùng khớp.";
  }
}

//logout
// Lấy ra phần tử đăng xuất và thêm sự kiện click vào
var logoutBtn = document.querySelector('.dropdown-menu a[href="./Login.html"]');
logoutBtn.addEventListener("click", function (event) {
  // Ngăn chặn hành động mặc định của phần tử <a> khi click
  event.preventDefault();
  // Xóa toàn bộ thông tin ở localStorage
  localStorage.clear();
  // Chuyển hướng về trang Login
  location.href = "./Login.html";
});
