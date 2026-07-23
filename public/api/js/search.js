// Sample data to search through
const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Grape",
    "Watermelon",
    "Peach"
];

// Get references to the input and results elements
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

// Debounced search function
const debouncedSearch = debounce(() => {
    const query = searchInput.value.trim();
    const results = search(query);
    displayResults(results);
}, 300);

// Event listener with debouncing
searchInput.addEventListener('input', debouncedSearch);

// Function to filter items based on the search query
function search(query) {
    return items.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
    );
}

// Function to display the results
function displayResults(results) {
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="item">No results found</div>';
        return;
    }

    results.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.textContent = item;
        resultsContainer.appendChild(itemElement);
    });
}

// Debounce function to limit how often the search function is called
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}