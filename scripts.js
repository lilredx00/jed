// Shared functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle would go here if needed
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-bar button');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            alert('Search functionality would be implemented here');
            // In a real app, this would filter the gallery
        });
    }
});