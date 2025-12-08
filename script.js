// Simple Search Function
function filterTools() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let cards = document.querySelectorAll('.card');
    let titles = document.querySelectorAll('.category-section');

    // Loop through all cards and hide those who don't match the search query
    cards.forEach(card => {
        let txtValue = card.getAttribute('data-name');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    // Optional: You could add logic here to hide section titles if all their cards are hidden.
}