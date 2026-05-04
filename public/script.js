fetch('/products.json') 
.then(res => res.json())
.then(products => {
    const container = document.getElementById('productList');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="/images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <span>$${product.price}</span>
        `;
        container.appendChild(card);
    });
})