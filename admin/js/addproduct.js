function checkID(id) {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []

    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].id == id) {

            return true;
        }
    }
}

//thêm Item
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
    localStorage.setItem("list-item", JSON.stringify(item))
    console.log(localStorage)
    if (!checkID(id)) {
        alert("Sản phẩm đã tồn tại! Vui lòng nhập sản phẩm khác")
    }
    // render()
    clear()

}

//hiển thị Item
// function render() {
//     let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
//     let item = `<tr>
//         <th>ID</th>
//         <th>Tên sản phẩm</th>
//         <th>Loại</th>
//         <th>Giá</th>
//         <th>Số lượng</th>
//         <th>Mô tả</th>
//         <th>Hình ảnh</th>
//         <th>Chỉnh sửa</th>
//     </tr>`

// for (let i = 0; i < listItem.length; i++) {
//     item += `<tr>
//     <td>${listItem[i].id}</td>
//     <td>${listItem[i].name}</td>
//     <td>${listItem[i].type}</td>
//     <td>${listItem[i].price}</td>
//     <td>${listItem[i].quantity}</td>            
//     <td>${listItem[i].script}</td>
//     <td>${listItem[i].img}</td>
//     <td>
//         <button onclick="editItem(${listItem[i].id})">Sửa</button>
//         <button onclick="deleteItem(${listItem[i].id})">Xoá</button>
//     </td>
// </tr>`
// }


//}

var tb = document.getElementById('itemList')
let item = document.createElement('tr')
//hiển thị Item
var render = () => {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    tb.innerHTML = `<tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Mô tả</th>
                <th>Hình ảnh</th>
                <th>Chỉnh sửa</th>
                </tr>`;
    for (let i = 0; i < listItem.length; i++) {
        let inin = `<tr>
        <td>${listItem[i].id}</td>
        <td>${listItem[i].name}</td>
        <td>${listItem[i].type}</td>
        <td>${listItem[i].price}</td>
        <td>${listItem[i].quantity}</td>            
        <td>${listItem[i].script}</td>
        <td><img src=""></td>
        <td>
            <button onclick="editItem(${listItem[i].id})">Sửa</button>
            <button onclick="deleteItem(${listItem[i].id})">Xoá</button>
        </td>
    </tr>`
        tb.innerHTML += inin;
    }
}

render()

function clear() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("type").value = ""
    document.getElementById("price").value = ""
    document.getElementById("quantity").value = ""
    document.getElementById("script").value = ""
    document.getElementById("img").value = ""
}

//sửa Item
// function editItem(id) {
//     let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
//     for (let i = 0; i < listItem.length; i++) {
//         document.getElementById("id").value = listItem[i].id
//         document.getElementById("name").value = listItem[i].name
//         document.getElementById("type").value = listItem[i].type
//         document.getElementById("price").value = listItem[i].price
//         document.getElementById("quantity").value = listItem[i].quantity
//         document.getElementById("script").value = listItem[i].script
//         document.getElementById("img").value = listItem[i].img
//     }
// }

//xoá Item
function deleteItem(x) {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].id == x) {
            listItem.splice(i, 1)
            localStorage.setItem("list-item", JSON.stringify(listItem))
            render()
        }
    }
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