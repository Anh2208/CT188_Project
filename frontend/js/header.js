let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    console.log('Search button clicked');
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () => {
//     console.log('Search button clicked');
//     shoppingCart.classList.toggle('active');
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    console.log('Search button clicked');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');    
}



window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


//show and hide loginButton
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser) {
  // Người dùng đã đăng nhập, ẩn nút đăng nhập và hiển thị các tính năng cho người dùng đã đăng nhập
  document.getElementById('loginButton').style.display = 'none';
  // Hiển thị các tính năng cho người dùng đã đăng nhập
} else {
  // Người dùng chưa đăng nhập, hiển thị nút đăng nhập
  // document.getElementById('loginButton').style.display = 'block';
}
