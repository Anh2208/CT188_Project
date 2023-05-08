let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "../../assets/images/img01.jpg",
    price: 120000,
    type: "collapse11",
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "../../assets/images/img02.jpg",
    price: 120000,
    type: "collapse21",
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "../../assets/images/img03.jpg",
    type: "collapse32",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    type: "collapse42",
    image: "../../assets/images/img04.jpg", 
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    type: "collapse53",
    image: "../../assets/images/img05.jpg",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    type: "collapse63",
    image: "../../assets/images/img06.jpg",
    price: 120000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

$(document).ready(function () {
  $(".list-group-item").click(function () {
    $($(this).attr("href")).collapse("toggle");
  });
});
// $(document).ready(function () {
//   // Lắng nghe sự kiện khi danh sách được mở rộng
//   $(".list-group-item").on("click", function () {
//     // Tìm tất cả các danh sách khác và thu lại chúng
//     $(".collapse.show").each(function () {
//       $(this).collapse("hide");
//     });
//   });
// });
// $(document).ready(function () {
//     $(".list-group-item").click(function () {
//       // Mở rộng hoặc thu lại danh sách sản phẩm
//       $($(this).attr("href")).collapse("toggle");
//       // Tìm tất cả các danh sách khác và thu lại chúng
//       $(".collapse.show").not($($(this).attr("href"))).each(function () {
//         $(this).collapse("hide");
//       });
//     });
//   });

  //render product from type
  function filterProductsByCategory(category) {
    $('.product-item').hide(); // Hide all products
    
    // // Show only the products that belong to the selected category
    // $('.product-item').each(function() {
    //     if ($(this).data('category') === category) {
    //         $(this).show();
    //     }
    // });
}



  