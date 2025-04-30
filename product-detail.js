
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail gallery functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.querySelector('img').src;
        });
    });

    // Size selector functionality
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quantity selector functionality
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Prevent manual input of invalid quantities
    quantityInput.addEventListener('change', function() {
        if (this.value < 1) {
            this.value = 1;
        }
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle the content visibility
            content.classList.toggle('active');
            
            // Rotate the icon
            if (content.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        const size = document.querySelector('.size-btn.active').textContent;
        
        // Here you would typically send this data to a cart management system
        console.log('Added to cart:', {
            product: 'Strawberry Juice',
            quantity: quantity,
            size: size
        });
        
        // Show success message
        alert('Product added to cart!');
    });

    // Buy now functionality
    const buyNowBtn = document.querySelector('.buy-now');
    buyNowBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        const size = document.querySelector('.size-btn.active').textContent;
        
        // Here you would typically redirect to checkout
        console.log('Proceeding to checkout:', {
            product: 'Strawberry Juice',
            quantity: quantity,
            size: size
        });
        
        // For demo purposes, just show an alert
        alert('Redirecting to checkout...');
    });
});

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function toggleMenu() {
let menu = document.getElementById('mobileMenu');
if (menu.classList.contains('open')) {
menu.classList.add('closing');
setTimeout(() => {
    menu.classList.remove('open', 'closing');
}, 500);
} else {
menu.classList.add('open');
}
}
  
