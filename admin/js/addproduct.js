function add() {
    var data = []

    var item_id = document.getElementById("id").value
    var item_name = document.getElementById("nameproduct").value
    var item_type = document.getElementById("type").value
    var item_price = document.getElementById("price").value
    var item_quantity = document.getElementById("quantity").value
    var item_script = document.getElementById("script").value
    var item_img = document.getElementById("img").value

    var item = {
        Id: item_id,
        Name: item_name,
        Type: item_type,
        Price: item_price,
        Quantity: item_quantity,
        Script: item_script,
        Img: item_img
    }
    data.push(item)
    
    console.log(window.localStorage)

    render()

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
            <th>${data[i].Id}</th>
            <th>${data[i].Name}</th>
            <th>${data[i].Type}</th>
            <th>${data[i].Price}</th>
            <th>${data[i].Quantity}</th>
            <th>${data[i].Script}</th>
            <th>${data[i].Img}</th>

            </tr>`
        }
        document.getElementById("render").innerHTML = table
        console.log()
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