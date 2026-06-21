// --- Advanced Filter Function ---
function filterTools() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let sections = document.querySelectorAll('.category-section');

    sections.forEach(section => {
        let cards = section.querySelectorAll('.card');
        let hasVisibleCards = false;

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
            section.style.display = ""; 
        } else {
            section.style.display = "none"; 
        }
    });
}

// --- Unified Sliding Menu Controls ---
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle open/close and swap the icon
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    menuToggle.innerHTML = sidebar.classList.contains('open') ? '✕' : '☰';
});

// Close sidebar if user clicks completely outside of it
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== menuToggle && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        menuToggle.innerHTML = '☰';
    }
});

// Auto-close the sidebar when any navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        menuToggle.innerHTML = '☰';
    });
});
