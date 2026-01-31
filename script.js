function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Cart function ensure karo yeh EXIST karta hai
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return; // Safety check
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Product added to cart!');
}
// Products Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 4999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Backpack",
        price: 1599,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "Fashion"
    },
    {
        id: 4,
        name: "Sneakers",
        price: 2499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        category: "Fashion"
    },
    {
        id: 5,
        name: "Coffee Maker",
        price: 3499,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
        category: "Home"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Electronics"
    },
    // 25+ Premium Products with Categories

    // Electronics (8 products)
    {id:1,name:"Sony WH-1000XM5 Headphones",price:24999,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",category:"electronics",rating:4.9,discount:15},
    {id:2,name:"Apple Watch Series 9",price:42999,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",category:"electronics",rating:4.8,discount:10},
    {id:3,name:"iPhone 15 Pro",price:99999,image:"https://images.unsplash.com/photo-1695906323478-4b6010f17e0f?w=400",category:"electronics",rating:4.9,discount:5},
    {id:4,name:"JBL Flip 6 Speaker",price:8999,image:"https://images.unsplash.com/photo-1624137024641-162f9f7b7fdb?w=400",category:"electronics",rating:4.7,discount:20},
    {id:5,name:"Samsung 55\" QLED TV",price:54999,image:"https://images.unsplash.com/photo-1592899672596-47a488d68586?w=400",category:"electronics",rating:4.6,discount:12},
    {id:6,name:"MacBook Air M2",price:99990,image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",category:"electronics",rating:4.9,discount:8},
    {id:7,name:"Power Bank 20000mAh",price:1999,image:"https://images.unsplash.com/photo-1639762681488-d315d55a2c2a?w=400",category:"electronics",rating:4.5,discount:25},
    {id:8,name:"Gaming Mouse",price:2999,image:"https://images.unsplash.com/photo-1587829741303-44dfabf0a6a1?w=400",category:"electronics",rating:4.7,discount:18},

    // Fashion (7 products)
    {id:9,name:"Nike Air Max 270",price:12999,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",category:"fashion",rating:4.8,discount:10},
    {id:10,name:"Levi's Slim Fit Jeans",price:3499,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",category:"fashion",rating:4.6,discount:15},
    {id:11,name:"Ray-Ban Wayfarer",price:8999,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",category:"fashion",rating:4.9,discount:12},
    {id:12,name:"Adidas Originals Hoodie",price:4999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",category:"fashion",rating:4.7,discount:20},
    {id:13,name:"Casio G-Shock Watch",price:7999,image:"https://images.unsplash.com/photo-1541781774459-bb2af79a8ac7?w=400",category:"fashion",rating:4.8,discount:8},
    {id:14,name:"Puma Backpack",price:2499,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",category:"fashion",rating:4.5,discount:22},
    {id:15,name:"Formal Leather Shoes",price:5999,image:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",category:"fashion",rating:4.6,discount:15},

    // Home & Kitchen (6 products)
    {id:16,name:"Philips Air Fryer",price:8999,image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",category:"home",rating:4.7,discount:18},
    {id:17,name:"Mixer Grinder 750W",price:3499,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",category:"home",rating:4.5,discount:25},
    {id:18,name:"Dining Table Set",price:24999,image:"https://images.unsplash.com/photo-1600585152263-c62422cf6481?w=400",category:"home",rating:4.6,discount:10},
    {id:19,name:"Coffee Maker",price:4999,image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",category:"home",rating:4.8,discount:15},
    {id:20,name:"Bed Sheets (Cotton)",price:1799,image:"https://images.unsplash.com/photo-1558618047-3c8c76bd8d57?w=400",category:"home",rating:4.7,discount:30},
    {id:21,name:"Ceramic Dinner Set",price:2999,image:"https://images.unsplash.com/photo-1551028718-6e6d30ef9e77?w=400",category:"home",rating:4.6,discount:20},

    // Sports (4 products)
    {id:22,name:"Yonex Badminton Racket",price:3999,image:"https://images.unsplash.com/photo-1579952363873-27d3bfad9c4b?w=400",category:"sports",rating:4.8,discount:12},
    {id:23,name:"Decathlon Cricket Kit",price:2999,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",category:"sports",rating:4.7,discount:18},
    {id:24,name:"Gym Dumbbells 10kg",price:2499,image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",category:"sports",rating:4.5,discount:15},
    {id:25,name:"Yoga Mat Premium",price:1299,image:"https://images.unsplash.com/photo-1571019619615-86476187b9d5?w=400",category:"sports",rating:4.6,discount:25}
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}


function displayProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    const loading = document.getElementById('loading');
    const noProducts = document.getElementById('no-products');
    
    if (loading) loading.style.display = 'flex';
    
    setTimeout(() => {
        if (loading) loading.style.display = 'none';
        
        if (productsToShow.length === 0) {
            if (noProducts) noProducts.style.display = 'block';
            if (container) container.innerHTML = '';
            return;
        }
        
        if (noProducts) noProducts.style.display = 'none';
        
        container.innerHTML = productsToShow.map(product => `
            <div class="product-card">
                ${product.discount ? `<div class="product-badge">${product.discount}% OFF</div>` : ''}
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-rating">
                        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                        <span>(${product.rating})</span>
                    </div>
                    <h3>${product.name}</h3>
                    <div class="price-section">
                        <div class="price">₹${product.price}</div>
                    </div>
                    <button class="quick-view-btn" onclick="openQuickView(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        👁️ Quick View
                    </button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
    🛒 Add to Cart
</button>
                </div>
            </div>
        `).join('');
    }, 800);
}


// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Toast notification
    showToast('Product added to cart!');
}

// Show Toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Featured products on home
    if (document.getElementById('featured-products')) {
        const featured = products.slice(0, 3);
        displayProducts(featured, 'featured-products');
    }
    
    // All products page
    if (document.getElementById('all-products')) {
        displayProducts(products, 'all-products');
    }
});
// Professional Back Button (Home page pe nahi dikhega)
function createBackButton() {
    // Home page pe mat banao
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') return;
    
    // Back button already exists? Skip
    if (document.getElementById('back-btn')) return;
    
    const backBtn = document.createElement('button');
    backBtn.id = 'back-btn';
    backBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
        </svg>
        Back
    `;
    backBtn.className = 'pro-back-button';
    backBtn.onclick = () => {
        window.history.back();
        // Smooth animation
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '0.7';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    };
    
    document.body.appendChild(backBtn);
}

// Page load pe check karo
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Sirf non-home pages pe back button
    setTimeout(() => {
        createBackButton();
    }, 100);
    
    // Featured products on home
    if (document.getElementById('featured-products')) {
        const featured = products.slice(0, 3);
        displayProducts(featured, 'featured-products');
    }
    
    // All products page
    if (document.getElementById('all-products')) {
        displayProducts(products, 'all-products');
    }
});
// Har product pe red heart
function toggleWishlist(productId) {
    const hearts = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = hearts.indexOf(productId);
    if (index > -1) {
        hearts.splice(index, 1);
    } else {
        hearts.push(productId);
    }
    localStorage.setItem('wishlist', JSON.stringify(hearts));
}
// Quick View Modal Functions
function openQuickView(product) {
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = `₹${product.price}`;
    document.getElementById('modal-add-cart').onclick = () => addToCart(product.id);
    document.getElementById('quick-view').style.display = 'block';
}

function closeModal() {
    document.getElementById('quick-view').style.display = 'none';
}

// Modal Events
document.addEventListener('DOMContentLoaded', () => {
    // Close modal on click outside
    window.onclick = (event) => {
        const modal = document.getElementById('quick-view');
        if (event.target === modal) {
            closeModal();
        }
    }
    
    // Close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
});
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}
