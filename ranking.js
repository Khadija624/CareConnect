function applyFilters() {
    const region = document.getElementById("region").value;
    const subject = document.getElementById("subject").value;
    const metric = document.getElementById("ranking-metric").value;

    const rankingItems = document.querySelectorAll("#rankingList li");

    rankingItems.forEach((item) => {
        
        const itemRegion = item.getAttribute("data-region");
        const itemSubject = item.getAttribute("data-subject");
        const itemMetric = item.getAttribute("data-metric");

        
        const matchesRegion = region === "all" || region === itemRegion;
        const matchesSubject = subject === "all" || subject === itemSubject;
        const matchesMetric = metric === "overall" || metric === itemMetric;

        
        if (matchesRegion && matchesSubject && matchesMetric) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
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