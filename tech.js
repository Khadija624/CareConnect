function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    
    // Set the default display style if not set
    if (searchBar.style.display === '') {
        searchBar.style.display = 'none'; // Initial state (hidden)
    }

    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block'; // Show the search bar
    } else {
        searchBar.style.display = 'none'; // Hide the search bar
    }
}
