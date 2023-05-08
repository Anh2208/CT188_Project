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
        name: 'PRODUCT NAME 1',
        image: '../../assets/images/img01.jpg',
        price: 120000,
        type: "collapse11",
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '../../assets/images/img01.jpg',
        price: 120000,
        type: "collapse31",
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '../../assets/images/img01.jpg',
        price: 220000,
        type: "collapse23",
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '../../assets/images/img01.jpg',
        price: 123000,
        type: "collapse31",
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '../../assets/images/img01.jpg',
        price: 320000,
        type: "collapse42",
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '../../assets/images/img01.jpg',
        price: 120000,
        type: "collapse41",
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
