// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
    })
}

//update cart
function updateCart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-rows");
    var total = 0;
    var i = 0;
    while (i < cart_rows.length) {
        var cart_row = cart_rows[i];
        var price_item = cart_row.getElementsByClassName("price_item")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText);
        var quantity = quantity_item.value;
        total += (price * quantity);
        i++;
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
}