let users = [
  {
    id: 1,
    fullname: "Hoang Anh",
    email: "anhvh1412@gmail.com",
    username: "Anh",
    password: "1",
    phone: "113",
    role: "user",
    sex: "male",
  },
  {
    id: 2,
    fullname: "Hoang Nhan",
    email: "anhvh1412@gmail.com",
    username: "Nhan",
    password: "1",
    phone: "114",
    role: "admin",
    sex: "female",
  },
  {
    id: 3,
    fullname: "Hoang Thong",
    email: "anhvh1412@gmail.com",
    username: "Thong",
    password: "1",
    phone: "115",
    role: "user",
    sex: "female",
  },
  {
    id: 4,
    fullname: "Hoang Duong",
    email: "anhvh1412@gmail.com",
    phone: "116",
    username: "Duong",
    password: "1",
    role: "admin",
    sex: "female",
  },
];

let products = [
  {
    id: 1,
    name: "6 lon nước ngọt Coca Cola 320ml",
    image: "../../frontend/assets/images/coca-1.jpg",
    price: 58600,
    type: "Nước giải khát",
  },

  {
    id: 2,
    name: "Thùng 30 gói mì Hảo Hảo tôm chua cay 75g",
    image:
      "../../frontend/assets/images/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202211181144401243.jpg",
    price: 120000,
    type: "Mì",
  },
  {
    id: 3,
    name: "Quýt giống Úc 1kg (5 - 9 trái)",
    image: "../../frontend/assets/images/quytut1.jpg",
    price: 30000,
    type: "Trái cây",
  },
  {
    id: 4,
    name: "Thùng 30 gói mì Đệ Nhất thịt bằm 82g",
    image: "../../frontend/assets/images/mydenhat1.jpg",
    price: 241000,
    type: "Mì",
  },
  {
    id: 5,
    name: "Rượu soju Good Day vị đào 13.5% chai 360ml",
    image: "../../frontend/assets/images/soju1.jpg",
    price: 63000,
    type: "Nước giải khát",
  },
  {
    id: 6,
    name: "Thùng 24 lon bia Heineken Sleek 330ml",
    image: "../../frontend/assets/images/heniken1.jpg",
    price: 430000,
    type: "Nước giải khát",
  },
  {
    id: 7,
    name: "Thùng 24 ly mì Modern lẩu Thái tôm 65g",
    image: "../../frontend/assets/images/mylauthai1.jpg",
    price: 180000,
    type: "Mì",
  },
  {
    id: 8,
    name: "Quýt giống Úc 1kg (5 - 9 trái)",
    image: "../../frontend/assets/images/quytut1.jpg",
    price: 62000,
    type: "Trái cây",
  },
  {
    id: 9,
    name: "Thùng 30 gói mì Kokomi 90 tôm chua cay 90g",
    image: "../../frontend/assets/images/kokomi1.jpg",
    price: 180000,
    type: "Mì",
  },
  {
    id: 10,
    name: "Nấm bào ngư trắng 300g",
    image: "../../frontend/assets/images/nam-bao-ngu-1.jpg",
    price: 18000,
    type: "Rau củ",
  },
  {
    id: 11,
    name: "Nấm kim châm Hàn Quốc 150g",
    image: "../../frontend/assets/images/nam-kim-cham-1.jpg",
    price: 13900,
    type: "Rau củ"
  },
  {
    id: 12,
    name: "Khoai mỡ 1kg (1 - 2 củ)",
    image: "../../frontend/assets/images/khoai-mo-tui-1.jpg",
    price: 37800,
    type: "Rau củ",
  },
  {
    id: 13,
    name: "Khổ qua 500g (3 - 5 trái)",
    image: "../../frontend/assets/images/kho-qua-1.jpg",
    price: 16300,
    type: "Rau củ",
  },
  {
    id: 14,
    name: "Cà chua 500g (7-9 trái)",
    image: "../../frontend/assets/images/ca-chua-1.jpg",
    price: 12000,
    type: "Rau củ",
  },
  {
    id: 15,
    name: "Dưa hấu ruột đỏ túi 2kg",
    image: "../../frontend/assets/images/dua-hau1.jpg",
    price: 35200,
    type: "Trái cây",
  },
  {
    id: 16,
    name: "Thùng 12 lon bia Tiger 500ml",
    image: "../../frontend/assets/images/tiger-1.jpg",
    price: 210000,
    type: "Nước giải khát",
  },
  {
    id: 17,
    name: "Thùng 30 gói hủ tiếu Nam Vang Nhịp Sống 70g",
    image: "../../frontend/assets/images/hu-tieu-1.jpg",
    price: 240000,
    type: "Hủ tiếu",
  },
  {
    id: 18,
    name: "Thùng 24 gói miến sườn heo Vifon 58g",
    image: "../../frontend/assets/images/mien-suon1.jpg",
    price: 247000,
    type: "Miến",
  },

  {
    id: 19,
    name: "Táo mật Koru Mỹ 1kg (4 - 5 trái)",
    image: "../../frontend/assets/images/tao-koru-1.jpg",
    price: 59000,
    type: "Trái cây",
  },
  {
    id: 20,
    name: "Thùng 20 lon bia Budweiser 330ml",
    image: "../../frontend/assets/images/budweiser1.jpg",
    price: 290000,
    type: "Nước giải khát",
  },
  {
    id: 21,
    name: "5 tô hủ tiếu Nam Vang Nhớ mãi mãi tô 71g",
    image: "../../frontend/assets/images/combo-5-to-hu-tieu1.jpg",
    price: 81500,
    type: "Hủ tiếu",
  },
  {
    id: 22,
    name: "Thùng 24 gói miến sườn heo Vifon 58g",
    image: "../../frontend/assets/images/10-goi-mien-1.jpg",
    price: 113000,
    type: "Miến",
  },

  {
    id: 23,
    name: "Ổi nữ hoàng 1kg (3-5 trái)",
    image: "../../frontend/assets/images/oi1.jpg",
    price: 19300,
    type: "Trái cây",
  },
  {
    id: 24,
    name: "Thùng 24 lon Strongbow dâu đen 330ml",
    image: "../../frontend/assets/images/strongbow1.jpg",
    price: 39000,
    type: "Nước giải khát",
  },
  {
    id: 25,
    name: "Kim chi cải thảo cắt lát Bibigo Ông Kim hộp 500g",
    image: "../../frontend/assets/images/kim-chi1.jpg",
    price: 47500,
    type: "Thực phẩm",
  },
  {
    id: 26,
    name: "Rau quả hỗn hợp đông lạnh SG Food gói 500g",
    image: "../../frontend/assets/images/rau-qua-1.jpg",
    price: 42000,
    type: "Rau củ",
  },
  {
    id: 27,
    name: "Bắp hạt đông lạnh Mama Food gói 250g",
    image: "../../frontend/assets/images/bap-hat-1.jpg",
    price: 18000,
    type: "Rau củ",
  },
  {
    id: 28,
    name: "Me chua 68g",
    image: "../../frontend/assets/images/me-chua-1.jpg",
    price: 4500,
    type: "Trái cây",
  },
  {
    id: 29,
    name: "Thùng 30 gói phở bò Vifon 65g",
    image: "../../frontend/assets/images/pho-bo-1.jpg",
    price: 210000,
    type: "Phở",
  },
  {
    id: 30,
    name: "10 gói bún mắm Hằng Nga 75g",
    image: "../../frontend/assets/images/bun-mam-1.jpg",
    price: 99000,
    type: "Bún",
  },
  {
    id: 31,
    name: "5 gói phở gà Vifon 65g",
    image: "../../frontend/assets/images/pho-ga-1.jpg",
    price: 42500,
    type: "Phở",
  },
  {
    id: 32,
    name: "10 gói bún bò huế Hằng Nga 73g",
    image: "../../frontend/assets/images/bun-bo-1.jpg",
    price: 95000,
    type: "Bún",
  },
  {
    id: 33,
    name: "Thùng 48 hộp sữa tươi tiệt trùng có đường Kun 180ml",
    image: "../../frontend/assets/images/sua-1.jpg",
    price: 310000,
    type: "Sữa",
  },
  {
    id: 34,
    name: "Sữa đặc có đường Ngôi sao Phương Nam Xanh lá hộp 380g",
    image: "../../frontend/assets/images/sua-dac-1.jpg",
    price: 20600,
    type: "Sữa",
  },
  {
    id: 35,
    name: "Ngũ cốc dinh dưỡng VinaCafé Bfast bịch 500g",
    image: "../../frontend/assets/images/ngu-coc-1.jpg",
    price: 67800,
    type: "Ngủ cốc",
  },
  {
    id: 36,
    name: "Bánh Malkist Crackers Roma gói 216g",
    image: "../../frontend/assets/images/banh-quy-1.jpg",
    price: 19500,
    type: "Bánh",
  },
  {
    id: 37,
    name: "2 gói snack khoai tây vị kim chi Hàn Quốc OStar 108g",
    image: "../../frontend/assets/images/snack-1.jpg",
    price: 45800,
    type: "Bánh",
  },
  {
    id: 38,
    name: "Đậu phộng sả ớt Tài Tài hũ 250g",
    image: "../../frontend/assets/images/dau-phong-1.jpg",
    price: 43000,
    type: "Bánh",
  },
];

// window.localStorage.clear();
// console.log(localStorage);
function login() {
  // Kiểm tra xem có thông tin người dùng trong localStorage không
  if (localStorage.getItem("user")) {
    // localStorage.removeItem('user'); // Nếu có, xóa thông tin người dùng đó
    const user = JSON.parse(localStorage.getItem("user"));
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if (username === user.username && password === user.password) {
      if(user.role === "admin"){
        window.location.href = "userDashboard.html";
      }
      else{
        alert("Bạn không phải là Admin");
        location.reload();
      }
    }
  }

  // Lấy giá trị tên người dùng và mật khẩu từ input trên form
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Kiểm tra thông tin đăng nhập với mảng users
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  // Nếu thông tin đăng nhập đúng
  if (user) {
    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("list-item", JSON.stringify(products))
    // Chuyển hướng người dùng đến trang header.html
    window.location.href = "product.html";
  } else {
    // Nếu thông tin đăng nhập sai, hiển thị thông báo lỗi
    const formMessage = document.querySelector(".form-message");
    formMessage.innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng";
    formMessage.classList.add("form-message-error");
  }
}

const form = document.querySelector("#Login");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi
  login(); // Gọi hàm login() để xử lý đăng nhập
});
