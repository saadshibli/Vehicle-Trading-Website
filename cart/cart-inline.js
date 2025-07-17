// Multi-step checkout logic for cart page

document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    const cartContent = document.getElementById('cartContent');
    const cartSummary = document.getElementById('cartSummary');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderSummaryTotal = document.getElementById('orderSummaryTotal');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const termsCheck = document.getElementById('termsCheck');
    let currentStep = 1;

    // Show checkout form if cart is not empty
    function showCheckoutIfCart() {
        const cart = JSON.parse(localStorage.getItem('carCart')) || [];
        if (cart.length > 0 && checkoutForm) {
            checkoutForm.classList.remove('d-none');
        } else if (checkoutForm) {
            checkoutForm.classList.add('d-none');
        }
    }

    // Step navigation
    window.nextCheckoutStep = function(step) {
        if (!validateStep(step)) return;
        setStep(step + 1);
    };
    window.prevCheckoutStep = function(step) {
        setStep(step - 1);
    };
    function setStep(step) {
        currentStep = step;
        document.querySelectorAll('.checkout-section').forEach(sec => {
            sec.classList.remove('active');
            if (parseInt(sec.getAttribute('data-section')) === step) {
                sec.classList.add('active');
            }
        });
        document.querySelectorAll('.step-indicator').forEach(ind => {
            ind.classList.toggle('active', parseInt(ind.getAttribute('data-step')) === step);
        });
        // Progress bar
        const progress = document.getElementById('checkoutProgress');
        if (progress) progress.style.width = (step * 25) + '%';
        // Populate order summary on last step
        if (step === 4) populateOrderSummary();
    }
    function validateStep(step) {
        // Basic validation for required fields
        if (step === 1) {
            const required = ['firstName','lastName','email','phone'];
            for (let id of required) {
                const el = document.getElementById(id);
                if (!el || !el.value.trim()) {
                    el && el.focus();
                    return false;
                }
            }
        }
        if (step === 2) {
            const required = ['addressLine1','city','state','zipCode'];
            for (let id of required) {
                const el = document.getElementById(id);
                if (!el || !el.value.trim()) {
                    el && el.focus();
                    return false;
                }
            }
        }
        if (step === 3) {
            // Payment method and card details
            const method = document.querySelector('input[name="paymentMethod"]:checked');
            if (!method) return false;
            if (method.value === 'creditCard' || method.value === 'debitCard') {
                const required = ['cardName','cardNumber','expiryDate','cvv'];
                for (let id of required) {
                    const el = document.getElementById(id);
                    if (!el || !el.value.trim()) {
                        el && el.focus();
                        return false;
                    }
                }
            }
        }
        return true;
    }
    // Populate order summary and delivery details
    function populateOrderSummary() {
        const cart = JSON.parse(localStorage.getItem('carCart')) || [];
        let total = 0;
        if (orderSummaryItems) {
            orderSummaryItems.innerHTML = cart.map(item => {
                total += parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity;
                return `<div class='d-flex justify-content-between align-items-center mb-2'><span>${item.title} x${item.quantity}</span><span>${item.price}</span></div>`;
            }).join('');
        }
        if (orderSummaryTotal) {
            orderSummaryTotal.innerHTML = `<div class='d-flex justify-content-between align-items-center'><span class='fw-bold'>Total:</span><span class='h5 text-success mb-0'>₹${total.toLocaleString()}</span></div>`;
        }
        // Delivery details
        document.getElementById('summaryName').textContent = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
        document.getElementById('summaryEmail').textContent = document.getElementById('email').value;
        document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
        document.getElementById('summaryAddress').textContent = document.getElementById('addressLine1').value + ', ' + (document.getElementById('addressLine2').value || '') + ', ' + document.getElementById('city').value + ', ' + document.getElementById('state').value + ' ' + document.getElementById('zipCode').value;
        const method = document.querySelector('input[name="paymentMethod"]:checked');
        document.getElementById('summaryPayment').textContent = method ? method.nextElementSibling.textContent : '';
    }
    // Enable Place Order button only if terms checked
    if (termsCheck && placeOrderBtn) {
        termsCheck.addEventListener('change', function() {
            placeOrderBtn.disabled = !this.checked;
        });
    }
    // Place order
    window.placeOrder = function() {
        if (!termsCheck.checked) return;
        // Clear cart
        localStorage.removeItem('carCart');
        if (cartContent) cartContent.innerHTML = '<div class="alert alert-success">Thank you for your order! Your cart is now empty.</div>';
        if (cartSummary) cartSummary.innerHTML = '';
        if (checkoutForm) checkoutForm.classList.add('d-none');
        showToast('Order placed successfully!', 'bg-success');
    };
    // Show checkout if cart present on load
    showCheckoutIfCart();
    // Also show/hide on cart changes
    window.addEventListener('storage', showCheckoutIfCart);
}); 