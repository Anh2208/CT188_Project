const provinceSelect = document.getElementById("province-select");
const districtSelect = document.getElementById("district-select");
const wardSelect = document.getElementById("ward-select");
let provinceCode;

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
const form = document.querySelector('.input');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');
const emailError = form.querySelector('#email-error');
const phoneError = form.querySelector('#phone-error');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = emailInput.value;
  const phone = phoneInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== '' && !emailRegex.test(email)) {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (phone !== '' && !phoneRegex.test(phone)) {
    phoneError.style.display = 'block';
  } else {
    phoneError.style.display = 'none';
  }

  // Nếu email và số điện thoại hợp lệ, tiến hành lưu thông tin chỉnh sửa
  if (emailError.style.display === 'none' && phoneError.style.display === 'none') {
    // Code để lưu thông tin chỉnh sửa
    console.log('Lưu thông tin chỉnh sửa thành công!');
  }
});

//
// function checkPassword() {
//     var newPassword = document.getElementById("newPassword").value;
//     var confirmPassword = document.getElementById("checknewPassword").value;

//     if (newPassword == confirmPassword) {
//         alert("dung roi ne")
//         document.getElementById("password-match-message").innerHTML = "Mật khẩu mới trùng khớp.";
        
//     } else {
//         alert("sai roi ne")
//         document.getElementById("password-match-message").innerHTML = "Mật khẩu mới không trùng khớp.";
//     }
// }


//đổi mk
function checkPassword() {
    var inputPassword = document.getElementById("inputPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var checknewPassword = document.getElementById("checknewPassword").value;

    // Kiểm tra mật khẩu hiện tại
    if (inputPassword === "") {
        alert("Bạn chưa nhập mật khẩu hiện tại!");
        return false;
    }

    // Kiểm tra mật khẩu mới
    if (newPassword === "") {
        alert("Bạn chưa nhập mật khẩu mới!");
        return false;
    }
    if (newPassword.length < 6) {
        alert("Mật khẩu mới phải có ít nhất 6 ký tự!");
        return false;
    }

    // Kiểm tra nhập lại mật khẩu mới
    if (checknewPassword === "") {
        alert("Bạn chưa nhập lại mật khẩu mới!");
        return false;
    }
    if (newPassword !== checknewPassword) {
        alert("Mật khẩu mới và mật khẩu nhập lại không trùng khớp!");
        return false;
    }

    // Xử lý đổi mật khẩu
    // Thêm mã xử lý đổi mật khẩu ở đây
    alert("Đổi mật khẩu thành công!");
}