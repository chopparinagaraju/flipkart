// Product Data
const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Headphones", price: 2000 }
];

let cart = [];

// Display Products
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${product.name} - ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

// Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    displayCart();
}

// Display Cart
function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}

// Initialize
displayProducts();
