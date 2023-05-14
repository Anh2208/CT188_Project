let carts = [
  {
    id: 1,
    usename: "Hoang Anh",
    email: "anhvh1412@gmail.com",
    total: "10.900.000 VND",
    payment: true,
    date: "22-8-2001",
    status: "Đã giao",
  },
  {
    id: 2,
    usename: "Hoang Nhân",
    email: "anhvh1412@gmail.com",
    total: "1.900.000 VND",
    payment: true,
    date: "22-8-2001",
    status: "Chưa thanh toán",
  },
  {
    id: 3,
    usename: "Hoang Thông",
    email: "anhvh1412@gmail.com",
    total: "2.900.000 VND",
    payment: false,
    date: "22-8-2001",
    status: "Đã giao",
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

// hiển thị và lọc danh sách
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

const selectElement = document.getElementById("status-dropdown");
selectElement.addEventListener("change", () => {
  const selectedStatus = selectElement.value;
  tableBody.innerHTML = "";
  carts.forEach((cart, index) => {
    if (cart.status === selectedStatus) {
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

      const paymentCell = document.createElement("td");
      paymentCell.textContent = cart.payment
        ? "Đã thanh toán"
        : "Chưa thanh toán";
      row.appendChild(paymentCell);

      const dateCell = document.createElement("td");
      dateCell.textContent = cart.date;
      row.appendChild(dateCell);

      const statusCell = document.createElement("td");
      statusCell.textContent = cart.status;
      row.appendChild(statusCell);

      tableBody.appendChild(row);
    }
    if (selectedStatus === "Tất cả" || selectedStatus == "") {
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

      const paymentCell = document.createElement("td");
      paymentCell.textContent = cart.payment
        ? "Đã thanh toán"
        : "Chưa thanh toán";
      row.appendChild(paymentCell);

      const dateCell = document.createElement("td");
      dateCell.textContent = cart.date;
      row.appendChild(dateCell);

      const statusCell = document.createElement("td");
      statusCell.textContent = cart.status;
      row.appendChild(statusCell);

      tableBody.appendChild(row);
    }
  });
});
//end 