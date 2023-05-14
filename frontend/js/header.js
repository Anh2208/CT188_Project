let searchForm = document.querySelector(".search-form");

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
//   // shoppingCart.classList.remove("active");
//   navbar.classList.remove("active");
// };

// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () => {
//     console.log('Search button clicked');
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     navbar.classList.remove('active');
// }
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  console.log("Search button clicked");
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
};

// window.onscroll = () => {
//   searchForm.classList.remove("active");
//   // shoppingCart.classList.remove('active');
//   navbar.classList.remove("active");
// };
const loginBtn = document.querySelector("#login-btn");
const loginItem = document.querySelector("#loginButton");
const registerItem = document.querySelector("#register");
const CartItem = document.querySelector("#cartUser");
const infoUserItem = document.querySelector("#infoUser");
const logoutItem = document.querySelector("#logout");
window.addEventListener("load", function () {
  // Thực hiện kiểm tra localStorage và điều chỉnh trạng thái hiển thị của menu tương ứng
  if (localStorage.getItem("user")) {
    // Hiển thị menu trang cá nhân và đăng xuất
    loginBtn.classList.add("dropdown-toggle-no-caret");
    loginItem.style.display = "none";
    registerItem.style.display = "none";
    CartItem.style.display = "block";
    infoUserItem.style.display = "block";
    logoutItem.style.display = "block";
  } else {
    // Hiển thị đăng nhập và đăng ký
    loginBtn.classList.remove("dropdown-toggle-no-caret");
    loginItem.style.display = "block";
    registerItem.style.display = "block";
    infoUserItem.style.display = "none";
    logoutItem.style.display = "none";
    CartItem.style.display = "none";
  }
});
const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", () => {
  // Chuyển đến trang đăng nhập
  window.location.href = "/dang-nhap";

  // Xóa toàn bộ thông tin trong localStorage
  localStorage.clear();
});
const cardButton = document.querySelector("#cartUser");
cardButton.addEventListener("click", function () {
    if(localStorage.getItem('listCards')){
      window.location.href = "checkout.html";
    }
    else{
      alert("Vui lòng đặt hàng trước khi xem giỏ hàng!!!")
    }
});

console.log(localStorage);
