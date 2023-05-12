var data = [];
function checkID(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
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

    var item = {
        id: id,
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        script: script,
        img: img
    }
    if (!checkID(id)) {
        data.push(item);
        render()
        clear()
    } else {
        alert("Sản phẩm đã tồn tại! Vui lòng nhập sản phẩm khác")
    }
    var json = JSON.stringify(item)
    localStorage.setItem(id, json)
    console.log(window.localStorage)

    function render() {
        table = `<tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Mô tả</th>
                <th>Hình ảnh</th>
                </tr>`

        for (let i = 0; i < data.length; i++) {
            table += `<tr>
                <th>${data[i].id}</th>
                <th>${data[i].name}</th>
                <th>${data[i].type}</th>
                <th>${data[i].price}</th>
                <th>${data[i].quantity}</th>
                <th>${data[i].script}</th>
                <th>${data[i].img}</th>
            </tr>`
        }
        document.getElementById("render").innerHTML = table
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

// lấy phần Modal
var modal = document.getElementById('myModal');

// Lấy phần button mở Modal
var btn = document.getElementById("myBtn");

// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close")[0];

// Khi button được click thi mở Modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// Khi span được click thì đóng Modal
span.onclick = function () {
    modal.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}