function validateSearch() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput.trim() === '') {
        alert('Search not found in library.');
    } else {
        // Proceed with your search logic
        console.log('Searching for: ' + searchInput);
    }
}