function checkID(id) {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []

    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].id == id) {
            console.log(listItem[i].id)
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
    var img = document.getElementById("img-file").file

    let item = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    item.push({
        id: id,
        name: name,
        type: type,
        price: price,
        img: img
    })

    localStorage.setItem("list-item", JSON.stringify(item))
    if (!checkID(id)) {
        alert("Sản phẩm đã tồn tại! Vui lòng nhập sản phẩm khác")
    }
    clear()

}
function showProduct() {
    table = `<tr>
       <th>ID</th>
       <th>Tên sản phẩm</th>
       <th>Loại</th>
       <th>Giá</th>
       <th>Hình ảnh</th>
       <th>Chỉnh sửa</th>
   </tr>`
    var listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    for (let i = 0; i < listItem.length; i++) {
        table += `<tr>
        <td>${listItem[i].id}</td>
        <td>${listItem[i].name}</td>
        <td>${listItem[i].type}</td>
        <td>${listItem[i].price}</td>            
        <td><img src="${listItem[i].img}"></td>
        <td>
            <button onclick="editItem(${listItem[i].id})"><i class="fa fa-pencil"></i></button>
            <button onclick="deleteItem(${listItem[i].id})"><i class="fa fa-trash-can"></i></button>
        </td>
    </tr>`
    }
    document.getElementById("itemList").innerHTML = table

}

showProduct()
function clear() {
    location.reload()
}

console.log(localStorage)
//xoá Item
function deleteItem(x) {
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].id == x) {
            listItem.splice(i, 1)
            localStorage.setItem("list-item", JSON.stringify(listItem))
            showProduct()
        }
    }

}
//tìm kiếm Item
function searchItem() {
    let input = document.getElementById("searchInput").value;
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    var result = []
    if (searchItem) {
        for (let i = 0; i < listItem.length; i++) {
            var str = listItem[i].name
            if (str.includes(input)) {
                document.getElementById("tableSearch").style.display = "block";
                document.getElementById("itemList").style.display = "none";
                var itemSearch = {
                    id: listItem[i].id,
                    name: listItem[i].name,
                    type: listItem[i].type,
                    price: listItem[i].price,
                    img: listItem[i].img
                }
                result.push(itemSearch)

                var table = `<tr>
                                    <th>ID</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Loại</th>
                                    <th>Giá</th>
                                    <th>Hình ảnh</th>
                                </tr>`;
                for (let i = 0; i < result.length; i++) {
                    table += `<tr>
                                    <td>${result[i].id}</td>
                                    <td>${result[i].name}</td>
                                    <td>${result[i].type}</td>
                                    <td>${result[i].price}</td>
                                    <td><img src="${result[i].img}"></td>
                                </tr>`
                    document.getElementById("tableSearch").innerHTML = table
                    console.log(result)
                }
            }
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