function filterCars(category) {
    const cards = document.querySelectorAll('.car-card');
    cards.forEach(card => {
        const showCard = category === 'all' || 
                        (category === 'ev' && card.classList.contains('ev')) || 
                        (category === 'new' && card.classList.contains('new')) || 
                        (category === 'used' && card.classList.contains('used'));
        card.style.display = showCard ? 'block' : 'none';
    });
}

window.filterCars = filterCars;

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to filter links in the dropdown
    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(link => {
        link.addEventListener('click', function(e) {
            const category = this.getAttribute('onclick')?.match(/filterCars\('(.+?)'\)/)?.[1];
            if (category) {
                filterCars(category);
                e.preventDefault();
            }
        });
    });

    // Info (detail) button logic
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = btn.closest('.car-card');
            const carId = card ? card.getAttribute('data-car-id') : null;
            if (!carId || !carDetails[carId]) return;
            const details = carDetails[carId];
            // Set modal title and image
            document.getElementById('detailTitle').textContent = card.querySelector('.card-title').textContent;
            document.getElementById('detailImage').src = card.querySelector('.card-img-top').src;
            // Set badges
            const badgeDiv = document.getElementById('detailBadges');
            badgeDiv.innerHTML = card.querySelector('.badge-container').innerHTML;
            // Set tab content
            const specsTab = document.getElementById('specsTab');
            const historyTab = document.getElementById('historyTab');
            const featuresTab = document.getElementById('featuresTab');
            specsTab.innerHTML = '<ul>' + Object.entries(details.specs).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('') + '</ul>';
            historyTab.innerHTML = '<ul>' + Object.entries(details.history).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('') + '</ul>';
            featuresTab.innerHTML = '<ul>' + details.features.map(f => `<li>${f}</li>`).join('') + '</ul>';
            // Show modal
            const modal = new bootstrap.Modal(document.getElementById('detailModal'));
            modal.show();
        });
    });
});

// Car details data
const carDetails = {
    1: {
        specs: {
            "Acceleration": "0-60 mph in 3.1s",
            "Range": "358 miles",
            "Charging": "250 kW max",
            "Seats": "5",
            "Drive Type": "All-Wheel Drive"
        },
        history: {
            "Accident History": "None",
            "Service Records": "Full history",
            "Ownership": "First owner"
        },
        features: [
            "Autopilot", 
            "Premium Interior", 
            "Panoramic Roof",
            "Wireless Charging",
            "Smart Summon"
        ]
    },
    // ... (rest of carDetails object as in the original inline script)
}; 