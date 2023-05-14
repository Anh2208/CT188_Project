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
    var quantity = document.getElementById("quantity").value
    var img = document.getElementById("img").value

    let item = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    item.push({
        id: id,
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        img: img
    })

    localStorage.setItem("list-item", JSON.stringify(item))
    console.log(localStorage)
    if (!checkID(id)) {
        alert("Sản phẩm đã tồn tại! Vui lòng nhập sản phẩm khác")
    }
    // render(item)
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



//hiển thị Item
var render = (listItem) => {
    listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : []
    table = `<tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Hình ảnh</th>
                <th>Chỉnh sửa</th>
                </tr>`;
    for (let i = 0; i < listItem.length; i++) {
        table += `<tr>
        <td>${listItem[i].id}</td>
        <td>${listItem[i].name}</td>
        <td>${listItem[i].type}</td>
        <td>${listItem[i].price}</td>
        <td>${listItem[i].quantity}</td>            
        <td><img src=""></td>
        <td>
            <button onclick="editItem(${listItem[i].id})"><i class="fa fa-pencil"></i></button>
            <button onclick="deleteItem(${listItem[i].id})"><i class="fa fa-trash-can"></i></button>
        </td>
    </tr>`
        document.getElementById('itemList').innerHTML = table;
    }


}

render()


function clear() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("type").value = ""
    document.getElementById("price").value = ""
    document.getElementById("quantity").value = ""
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
                    quantity: listItem[i].quantity,
                    img: listItem[i].img
                }
                result.push(itemSearch)

                var table = `<tr>
                                    <th>ID</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Loại</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Hình ảnh</th>
                                </tr>`;
                for (let i = 0; i < result.length; i++) {
                    table += `<tr>
                                    <td>${result[i].id}</td>
                                    <td>${result[i].name}</td>
                                    <td>${result[i].type}</td>
                                    <td>${result[i].price}</td>
                                    <td>${result[i].quantity}</td>
                                    <td><img src=""></td>
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