let users = [
  {
    id: 1,
    fullname: "Hoang Anh",
    email: "anhvh1412@gmail.com",
    username: "Anh",
    role: "user",
  },
  {
    id: 2,
    fullname: "Hoang Nhan",
    email: "anhvh1412@gmail.com",
    username: "Nhan",
    role: "admin",
  },
  {
    id: 3,
    fullname: "Hoang Thong",
    email: "anhvh1412@gmail.com",
    username: "Thong",
    role: "user",
  },
  {
    id: 4,
    fullname: "Hoang Duong",
    email: "anhvh1412@gmail.com",
    username: "Duong",
    role: "admin",
  },
];
//
const userContainer = document.getElementById("user-container");

function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "col-3 card-info";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const img = document.createElement("img");
  img.className = "img-card"
  img.src = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"

  const name = document.createElement("h5");
  name.className = "card-title title";
  name.textContent = user.fullname;

  const email = document.createElement("p");
  email.className = "card-text email";
  email.textContent = `Email: ${user.email}`;

  const username = document.createElement("p");
  username.className = "card-text";
  username.textContent = `Username: ${user.username}`;

  const role = document.createElement("p");
  role.className = "card-text";
  role.textContent = `Role: ${user.role}`;

  cardBody.appendChild(img);
  cardBody.appendChild(name);
  cardBody.appendChild(email);
  cardBody.appendChild(username);
  cardBody.appendChild(role);
  card.appendChild(cardBody);
  userContainer.appendChild(card);
}
//hiển thị thông tin user
users.forEach((user) => {
  createUserCard(user);
});

const userRoleSelect = document.getElementById("status-user");

userRoleSelect.addEventListener("change", () => {
  const selectedRole = userRoleSelect.value;

  const filteredUsers = selectedRole === "all" ? users : users.filter(user => user.role === selectedRole);

  displayUsers(filteredUsers);
});

function displayUsers(users) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = "";

  users.forEach(user => {
    createUserCard(user);
  });
}

