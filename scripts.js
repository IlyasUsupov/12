function openModal(title, colors, sizes) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalColors').textContent = colors;
    document.getElementById('modalSizes').textContent = sizes;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.card');
    
    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        product.style.display = name.includes(query) ? 'block' : 'none';
    });
}