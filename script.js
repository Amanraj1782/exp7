// NAVIGATION
function show(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

show("exp1");

// ================= 2.1.1 CRUD =================
let products = [];

function addProduct() {
    let name = document.getElementById("pname").value;
    let price = document.getElementById("pprice").value;
    let category = document.getElementById("pcat").value;

    let product = { name, price, category };
    products.push(product);

    displayProducts();
}

function displayProducts() {
    let html = "";
    products.forEach((p, i) => {
        html += `
        <div class="card">
            <b>${p.name}</b><br>
            ₹${p.price} - ${p.category}<br>
            <button onclick="deleteProduct(${i})">Delete</button>
        </div>`;
    });

    document.getElementById("productList").innerHTML = html;
}

function deleteProduct(i) {
    products.splice(i, 1);
    displayProducts();
}

// ================= 2.1.2 MVC =================
let students = [];

function addStudent() {
    let name = document.getElementById("sname").value;
    students.push(name);

    let list = "";
    students.forEach(s => {
        list += `<li>${s}</li>`;
    });

    document.getElementById("studentList").innerHTML = list;
}

// ================= 2.1.3 CATALOG =================
function loadCatalog() {
    let data = [
        {
            name: "Premium Headphones",
            variants: [
                { color: "Black", price: 199.99 },
                { color: "White", price: 209.99 }
            ]
        }
    ];

    let html = "";

    data.forEach(p => {
        html += `<div class="card"><h3>${p.name}</h3>`;

        p.variants.forEach(v => {
            html += `<p>${v.color} - ₹${v.price}</p>`;
        });

        html += `</div>`;
    });

    document.getElementById("catalog").innerHTML = html;
}