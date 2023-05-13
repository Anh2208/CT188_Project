let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: '6 lon nước ngọt Coca Cola 320ml',
        image: '../../assets/images/coca-1.jpg',
        price: 58600,
        type: "collapse43",
    },
    
    {
        id: 2,
        name: '<a href="ct-myhaohao.html" style="text-decoration:none; color:black;">Thùng 30 gói mì Hảo Hảo tôm chua cay 75g</a>',
        image: '../../assets/images/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202211181144401243.jpg',
        price: 120000,
        type: "collapse31",
    },
    {
        id: 3,
        name: 'Quýt giống Úc 1kg (5 - 9 trái)',
        image: '../../assets/images/quytut1',
        price: 000,
        type: "collapse23",
    },
    {
        id: 4,
        name: '<a href="ct-mydenhat.html" style="text-decoration:none; color:black;">Thùng 30 gói mì Đệ Nhất thịt bằm 82g</a>',
        image: '../../assets/images/mydenhat1.jpg',
        price: 241000,
        type: "collapse31",
    },
    {
        id: 5,
        name: 'Rượu soju Good Day vị đào 13.5% chai 360ml',
        image: '../../assets/images/soju1.jpg',
        price: 63000,
        type: "collapse42",
    },
    {
        id: 6,
        name: 'Thùng 24 lon bia Heineken Sleek 330ml',
        image: '../../assets/images/heniken1.jpg',
        price: 430000,
        type: "collapse41",
    },
    {
        id: 7,
        name: '<a href="ct-mymodern.html" style="text-decoration:none; color:black;">Thùng 24 ly mì Modern lẩu Thái tôm 65g</a>',
        image: '../../assets/images/mylauthai1.jpg',
        price: 180000,
        type: "collapse31",
    },
    {
        id: 8,
        name: 'Quýt giống Úc 1kg (5 - 9 trái)',
        image: '../../assets/images/quytut1.jpg',
        price: 62000,
        type: "collapse23",
    },
    {
        id: 9,
        name: '<a href="ct-mykokomi.html" style="text-decoration:none; color:black;">Thùng 30 gói mì Kokomi 90 tôm chua cay 90g</a>',
        image: '../../assets/images/kokomi1.jpg',
        price: 180000,
        type: "collapse31",
    },
    {
        id: 10,
        name: 'Nấm bào ngư trắng 300g',
        image: '../../assets/images/nam-bao-ngu-1.jpg',
        price: 18000,
        type: "collapse21",
    },
    {
        id: 11,
        name: 'Nấm kim châm Hàn Quốc 150g',
        image: '../../assets/images/nam-kim-cham-1.jpg',
        price: 13900,
        type: "collapse21",
    },
    {
        id: 12,
        name: 'Khoai mỡ 1kg (1 - 2 củ)',
        image: '../../assets/images/khoai-mo-tui-1.jpg',
        price: 37800,
        type: "collapse21",
    },
    {
        id: 13,
        name: 'Khổ qua 500g (3 - 5 trái)',
        image: '../../assets/images/kho-qua-1.jpg',
        price: 16300,
        type: "collapse21",
    },
    {
        id: 14,
        name: 'Cà chua 500g (7-9 trái)',
        image: '../../assets/images/ca-chua-1.jpg',
        price: 12000,
        type: "collapse21",
    },
    {
        id: 15,
        name: 'Dưa hấu ruột đỏ túi 2kg',
        image: '../../assets/images/dua-hau1.jpg',
        price: 35200,
        type: "collapse23",
    },
    {
        id: 16,
        name: 'Thùng 12 lon bia Tiger 500ml',
        image: '../../assets/images/tiger-1.jpg',
        price: 210000,
        type: "collapse41",
    },
    {
        id: 17,
        name: '<a href="ct-namvang.html" style="text-decoration:none; color:black;">Thùng 30 gói hủ tiếu Nam Vang Nhịp Sống 70g</a>',
        image: '../../assets/images/hu-tieu-1.jpg',
        price: 240000,
        type: "collapse32",
    },
    {
        id: 18,
        name: '<a href="ct-miensuon.html" style="text-decoration:none; color:black;">Thùng 24 gói miến sườn heo Vifon 58g</a>',
        image: '../../assets/images/mien-suon1.jpg',
        price: 247000,
        type: "collapse32",
    },

    {
        id: 19,
        name: 'Táo mật Koru Mỹ 1kg (4 - 5 trái)',
        image: '../../assets/images/tao-koru-1.jpg',
        price: 59000,
        type: "collapse23",
    },
    {
        id: 20,
        name: 'Thùng 20 lon bia Budweiser 330ml',
        image: '../../assets/images/budweiser1.jpg',
        price: 290000,
        type: "collapse41",
    },
    {
        id: 21,
        name: '<a href="ct-5htieu.html" style="text-decoration:none; color:black;">5 tô hủ tiếu Nam Vang Nhớ mãi mãi tô 71g</a>',
        image: '../../assets/images/combo-5-to-hu-tieu1.jpg',
        price: 81500,
        type: "collapse32",
    },
    {
        id: 22,
        name: '<a href="ct-mien2.html" style="text-decoration:none; color:black;">10 gói miến lẩu Thái Vifon 60g</a>',
        image: '../../assets/images/10-goi-mien-1.jpg',
        price: 113000,
        type: "collapse32",
    },

    {
        id: 23,
        name: 'Ổi nữ hoàng 1kg (3-5 trái)',
        image: '../../assets/images/oi1.jpg',
        price: 19300,
        type: "collapse23",
    },
    {
        id: 24,
        name: 'Thùng 24 lon Strongbow dâu đen 330ml',
        image: '../../assets/images/strongbow1.jpg',
        price: 39000,
        type: "collapse41",
    },
    {
        id: 25,
        name: 'Kim chi cải thảo cắt lát Bibigo Ông Kim hộp 500g',
        image: '../../assets/images/kim-chi1.jpg',
        price: 47500,
        type: "collapse22",
    },
    {
        id: 26,
        name: 'Rau quả hỗn hợp đông lạnh SG Food gói 500g',
        image: '../../assets/images/rau-qua-1.jpg',
        price: 42000,
        type: "collapse22",
    },
    {
        id: 27,
        name: 'Bắp hạt đông lạnh Mama Food gói 250g',
        image: '../../assets/images/bap-hat-1.jpg',
        price: 18000,
        type: "collapse22",
    },
    {
        id: 28,
        name: 'Me chua 68g',
        image: '../../assets/images/me-chua-1.jpg',
        price: 4500,
        type: "collapse22",
    },
    {
        id: 29,
        name: '<a href="ct-phobo.html" style="text-decoration:none; color:black;">Thùng 30 gói phở bò Vifon 65g</a>',
        image: '../../assets/images/pho-bo-1.jpg',
        price: 210000,
        type: "collapse33",
    },
    {
        id: 30,
        name: '<a href="ct-bunmam.html" style="text-decoration:none; color:black;">10 gói bún mắm Hằng Nga 75g</a>',
        image: '../../assets/images/bun-mam-1.jpg',
        price: 99000,
        type: "collapse33",
    },
    {
        id: 31,
        name: '<a href="ct-phoga.html" style="text-decoration:none; color:black;">5 gói phở gà Vifon 65g</a>',
        image: '../../assets/images/pho-ga-1.jpg',
        price: 42500,
        type: "collapse33",
    },
    {
        id: 32,
        name: '<a href="ct-bunbo.html" style="text-decoration:none; color:black;">10 gói bún bò huế Hằng Nga 73g</a>',
        image: '../../assets/images/bun-bo-1.jpg',
        price: 95000,
        type: "collapse33",
    },
    {
        id: 33,
        name: 'Thùng 48 hộp sữa tươi tiệt trùng có đường Kun 180ml',
        image: '../../assets/images/sua-1.jpg',
        price: 310000,
        type: "collapse51",
    },
    {
        id: 34,
        name: 'Sữa đặc có đường Ngôi sao Phương Nam Xanh lá hộp 380g',
        image: '../../assets/images/sua-dac-1.jpg',
        price: 20600,
        type: "collapse52",
    },
    {
        id: 35,
        name: 'Ngũ cốc dinh dưỡng VinaCafé Bfast bịch 500g',
        image: '../../assets/images/ngu-coc-1.jpg',
        price: 67800,
        type: "collapse53",
    },
    {
        id: 36,
        name: 'Bánh Malkist Crackers Roma gói 216g',
        image: '../../assets/images/banh-quy-1.jpg',
        price: 19500,
        type: "collapse61",
    }, 
    {
        id: 37,
        name: '2 gói snack khoai tây vị kim chi Hàn Quốc OStar 108g',
        image: '../../assets/images/snack-1.jpg',
        price: 45800,
        type: "collapse62",
    },
    {
        id: 38,
        name: 'Đậu phộng sả ớt Tài Tài hũ 250g',
        image: '../../assets/images/dau-phong-1.jpg',
        price: 43000,
        type: "collapse63",
    }
];
products.splice(2, 1);
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

//list by 
$(document).ready(function() {
    $('.list-group a').click(function() {
      var dataType = $(this).data('type');  
      // Filter products by type
      let filteredProducts = products.filter((product) => {
        return product.type === dataType;
      });
  
      // Clear previous list of products
      list.innerHTML = '';
  
      // Render new list of products
      filteredProducts.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
      });
    });
  });

  //
  var currentCollapse = null;
$(document).ready(function() {
  $(".head").click(function() {
    var collapse = $(this).next(".collapse");
    if (collapse.is(":visible")) {
      collapse.slideUp(500);
      currentCollapse = null;
    } else {
      collapse.slideDown(500);
      if (currentCollapse != null) {
        currentCollapse.slideUp(500);
      }
      currentCollapse = collapse;
    }
  });
});
