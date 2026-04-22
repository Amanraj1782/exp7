function show(num) {
  document.querySelectorAll(".box").forEach(el => el.style.display = "none");
  document.getElementById("exp" + num).style.display = "block";
}

/* 🔗 EXP 1 — API (Axios-like simulation) */
function fetchData() {
  const div = document.getElementById("apiData");
  div.innerHTML = "Loading... ⏳";

  setTimeout(() => {
    const data = ["Product 1", "Product 2", "Product 3"];
    div.innerHTML = data.map(p => `<div>${p}</div>`).join("");
  }, 1000);
}

/* 🛒 EXP 2 — Redux Cart */
let cart = [];

function addItem() {
  cart.push("Item " + (cart.length + 1));
  renderCart();
}

function renderCart() {
  const ul = document.getElementById("cart");
  ul.innerHTML = "";
  cart.forEach((item, i) => {
    ul.innerHTML += `
      <li>
        ${item}
        <button onclick="removeItem(${i})">❌</button>
      </li>`;
  });
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

/* 💬 EXP 3 — Chat Simulation */
function sendMsg() {
  const input = document.getElementById("msg");
  const box = document.getElementById("chatBox");

  if (input.value === "") return;

  box.innerHTML += `<div>You: ${input.value}</div>`;
  
  setTimeout(() => {
    box.innerHTML += `<div>Server: Reply to "${input.value}"</div>`;
  }, 500);

  input.value = "";
}
