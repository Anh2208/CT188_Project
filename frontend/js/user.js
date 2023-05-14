const provinceSelect = document.getElementById("province-select");
const districtSelect = document.getElementById("district-select");
const wardSelect = document.getElementById("ward-select");
let provinceCode;

//check user
if (localStorage.getItem("user")) {
  // consolelog(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email || "Chưa có email!!!";
  const userName = user.username;
  // const userPass = user.password;
  const userPhone = user.phone || "";
  const userSex = user.sex;

  document.getElementById("email").value = userEmail;
  document.getElementById("username").value = userName;
  document.getElementById("phone").value = userPhone;
  // document.getElementById("repassword").value = userPass;
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

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const email = emailInput.value;
//   const phone = phoneInput.value;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (email !== "" && !emailRegex.test(email)) {
//     emailError.style.display = "block";
//   } else {
//     emailError.style.display = "none";
//   }

//   const phoneRegex = /^[0-9]{10}$/;
//   if (phone !== "" && !phoneRegex.test(phone)) {
//     phoneError.style.display = "block";
//   } else {
//     phoneError.style.display = "none";
//   }

//   // Nếu email và số điện thoại hợp lệ, tiến hành lưu thông tin chỉnh sửa
//   if (
//     emailError.style.display === "none" &&
//     phoneError.style.display === "none"
//   ) {
//     // Code để lưu thông tin chỉnh sửa
//     console.log("Lưu thông tin chỉnh sửa thành công!");
//   }
// });

//
function checkPassword() {
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("checknewPassword").value;
  var passOld = document.getElementById("repassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (passOld != user.password) {
    alert("Sai mật khẩu!!!");
  } else if (
    newPassword == confirmPassword &&
    newPassword != "" &&
    confirmPassword != ""
  ) {
    user.password = newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Đổi mật khẩu thành công!!!");
    location.reload();
  } else {
    alert("Mật khẩu cũ và với không trùng khớp hoặc chưa nhập!!!");
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

// Lưu thông tin chỉnh sửa
// Lấy button lưu thông tin chỉnh sửa
const saveBtn = document.getElementById("save-btn");

// Thêm sự kiện click vào button lưu thông tin chỉnh sửa
saveBtn.addEventListener("click", function () {
  // Cập nhật giá trị user lên localStorage
  // Lấy giá trị các trường thông tin từ form
  const name = document.getElementById("username").value;
  const sex = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  ).value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Lấy giá trị user từ localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Cập nhật giá trị user với các giá trị mới
  user.name = name;
  user.sex = sex;
  user.email = email;
  user.phone = phone;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log(emailRegex.test(email));
  if (email !== "" && !emailRegex.test(email)) {
    alert("Email không hợp lệ!!!");
    // emailError.style.display = "block";
  }
  else if(email == ""){
    alert("Email không hợp lệ!!!");
  }
  else {
    emailError.style.display = "none";
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (phone !== "" && !phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ!!!");
    // phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }

  if (
    email !== "" &&
    emailRegex.test(email) &&
    phone !== "" &&
    phoneRegex.test(phone)
  ) {
    // Lưu giá trị user mới vào localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Lưu thông tin chỉnh sửa thành công!");
    location.reload();
  }
});
