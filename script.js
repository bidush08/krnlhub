// Advanced Filter Function
function filterTools() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    
    // Get all category sections (e.g., Subdomain, Port Scanning, etc.)
    let sections = document.querySelectorAll('.category-section');

    sections.forEach(section => {
        let cards = section.querySelectorAll('.card');
        let hasVisibleCards = false;

        // Loop through cards inside this section
        cards.forEach(card => {
            let name = card.getAttribute('data-name').toUpperCase();
            
            // If matches search OR if search is empty
            if (name.indexOf(input) > -1) {
                card.style.display = ""; // Show card
                hasVisibleCards = true;
            } else {
                card.style.display = "none"; // Hide card
            }
        });

        // Toggle the entire section based on whether it has visible cards
        if (hasVisibleCards) {
            section.style.display = ""; // Show section
        } else {
            section.style.display = "none"; // Hide section
        }
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function closeMenu() {
    document.getElementById('mobile-menu').style.display = "none";
}
