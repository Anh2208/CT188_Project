let carts = [
  {
    id: 1,
    usename: "Hoang Anh",
    email: "anhvh1412@gmail.com",
    total: "10.900.000 VND",
    payment: true,
    date: "22-8-2001",
    status: "Đã giao hàng",
  },
  {
    id: 2,
    usename: "Hoang Nhân",
    email: "anhvh1412@gmail.com",
    total: "1.900.000 VND",
    payment: true,
    date: "22-8-2001",
    status: "Chưa giao hàng",
  },
  {
    id: 3,
    usename: "Hoang Thông",
    email: "anhvh1412@gmail.com",
    total: "2.900.000 VND",
    payment: false,
    date: "22-8-2001",
    status: "Đang giao hàng",
  },
  {
    id: 4,
    usename: "Hoang Dương",
    email: "anhvh1412@gmail.com",
    total: "3.900.000 VND",
    payment: true,
    date: "22-8-2001",
    status: "Đang giao",
  },
];
const tableBody = document.getElementById("cart-table-body");

// Lặp qua mảng carts và tạo thẻ tr và các thẻ td tương ứng
carts.forEach((cart, index) => {
  const row = document.createElement("tr");

  const indexCell = document.createElement("td");
  indexCell.textContent = index + 1;
  row.appendChild(indexCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = cart.usename;
  row.appendChild(nameCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = cart.email;
  row.appendChild(emailCell);

  const totalCell = document.createElement("td");
  totalCell.textContent = cart.total;
  row.appendChild(totalCell);

  //   const paymentCell = document.createElement("td");
  //   paymentCell.textContent = cart.payment;
  //   row.appendChild(paymentCell);
  const paymentCell = document.createElement("td");
  paymentCell.textContent = cart.payment ? "Đã thanh toán" : "Chưa thanh toán";
  row.appendChild(paymentCell);

  const dateCell = document.createElement("td");
  dateCell.textContent = cart.date;
  row.appendChild(dateCell);

  const statusCell = document.createElement("td");
  statusCell.textContent = cart.status;
  row.appendChild(statusCell);

  tableBody.appendChild(row);
});
