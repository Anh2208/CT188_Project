function checkID(id) {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].id == id) {

            return true;
        }
    }
}


function add() {

    var id = document.getElementById("id").value
    var name = document.getElementById("name").value
    var type = document.getElementById("type").value
    var price = document.getElementById("price").value
    var quantity = document.getElementById("quantity").value
    var script = document.getElementById("script").value
    var img = document.getElementById("img").value

    let item = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    item.push({
        id: id,
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        script: script,
        img: img
    })
    if (!checkID(id)) {
        render();
    } else {
        alert("Sản phẩm đã tồn tại! Vui lòng nhập sản phẩm khác")
        localStorage.removeItem("listItem")
    }
    localStorage.setItem("list-item", JSON.stringify(item))
    console.log(localStorage)

}

function render() {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    let item = `<tr>
        <th>ID</th>
        <th>Tên sản phẩm</th>
        <th>Loại</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Mô tả</th>
        <th>Hình ảnh</th>
        <th>Chỉnh sửa</th>
    </tr>`

    for (let i = 0; i < listItem.length; i++) {
        item += `<tr>
        <td>${listItem[i].id}</td>
        <td>${listItem[i].name}</td>
        <td>${listItem[i].type}</td>
        <td>${listItem[i].price}</td>
        <td>${listItem[i].quantity}</td>            
        <td>${listItem[i].script}</td>
        <td>${listItem[i].img}</td>
    </tr>`
    }
    document.getElementById("tableContent").innerHTML = item
}
function clear() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("type").value = ""
    document.getElementById("price").value = ""
    document.getElementById("quantity").value = ""
    document.getElementById("script").value = ""
    document.getElementById("img").value = ""
}

function chooseImg(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}