// Cart functionality
let cart = JSON.parse(localStorage.getItem('carCart')) || [];

// Add to cart function
function addToCart(carId) {
    const card = document.querySelector(`.car-card[data-car-id="${carId}"]`);
    if (!card) return;
    
    const carTitle = card.querySelector('.card-title').textContent.split(' <span')[0].trim();
    const carPrice = card.querySelector('.card-title span').textContent.trim();
    const carImage = card.querySelector('.card-img-top').src;
    const carYear = card.querySelector('p').textContent.split('|')[0].replace('Year:', '').trim();
    
    // Check if car is already in cart
    const existingCarIndex = cart.findIndex(item => item.id === carId);
    
    if (existingCarIndex >= 0) {
        cart[existingCarIndex].quantity += 1;
        showToast(`Increased ${carTitle} quantity in cart!`, 'bg-success');
    } else {
        cart.push({
            id: carId,
            title: carTitle,
            price: carPrice,
            image: carImage,
            year: carYear,
            quantity: 1
        });
        showToast(`${carTitle} added to cart!`, 'bg-success');
    }
    
    // Save to localStorage
    localStorage.setItem('carCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (!cartCountElement) return;
    
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = itemCount;
    
    // Show/hide badge based on count
    if (itemCount > 0) {
        cartCountElement.classList.remove('d-none');
    } else {
        cartCountElement.classList.add('d-none');
    }
}

// Toast notification system
function showToast(message, bgClass = 'bg-primary') {
    const toastContainer = document.getElementById('toastContainer');
    
    const toastElement = document.createElement('div');
    toastElement.className = `toast align-items-center ${bgClass} text-white border-0`;
    toastElement.setAttribute('role', 'alert');
    toastElement.setAttribute('aria-live', 'assertive');
    toastElement.setAttribute('aria-atomic', 'true');
    
    toastElement.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    toastContainer.appendChild(toastElement);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
    
    // Remove from DOM after hiding
    toastElement.addEventListener('hidden.bs.toast', function() {
        toastElement.remove();
    });
}

// Initialize tooltips and popovers
function initTooltipsAndPopovers() {
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initTooltipsAndPopovers();
    
    // Convert Buy Now buttons to Add to Cart
    document.querySelectorAll('.car-card').forEach(card => {
        const carId = card.dataset.carId;
        const buyButton = card.querySelector('.btn-success');
        
        if (buyButton) {
            buyButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
            buyButton.setAttribute('data-bs-toggle', 'tooltip');
            buyButton.setAttribute('data-bs-placement', 'top');
            buyButton.setAttribute('title', 'Add to your cart');
            
            buyButton.addEventListener('click', function(e) {
                e.preventDefault();
                addToCart(carId);
            });
        }
    });
});