fetch('http://localhost:3000/products.json') 
.then(res => res.json())
.then(products => {
    const container = document.getElementById('productList');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="http://localhost:3000/images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <span>$${product.price}</span>
        `;
        container.appendChild(card);
    });
})