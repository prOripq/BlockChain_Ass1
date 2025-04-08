document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const cryptoSymbolInput = document.getElementById('crypto-symbol');
    const errorMessage = document.getElementById('error-message');
    const resultsContainer = document.getElementById('results-container');
    const cryptoSymbolDisplay = document.getElementById('crypto-symbol-display');
    const timestamp = document.getElementById('timestamp');
    const newsGrid = document.getElementById('news-grid');
    const noResults = document.getElementById('no-results');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const cryptoSymbol = cryptoSymbolInput.value.trim().toUpperCase();
        
        if (!cryptoSymbol) {
            showError('Please enter a cryptocurrency symbol');
            return;
        }
        
        // Clear previous results
        newsGrid.innerHTML = '';
        hideError();
        
        // Show loading state
        searchForm.querySelector('button').textContent = 'Searching...';
        searchForm.querySelector('button').disabled = true;
        
        // Fetch news from the Rust backend API
        fetchCryptoNews(cryptoSymbol)
            .then(data => {
                // Update UI with results
                displayResults(cryptoSymbol, data);
            })
            .catch(err => {
                showError('Failed to fetch news. Please try again later.');
                console.error(err);
            })
            .finally(() => {
                // Reset button state
                searchForm.querySelector('button').textContent = 'Search News';
                searchForm.querySelector('button').disabled = false;
            });
    });

    function fetchCryptoNews(symbol) {
        // Real API call to the Rust backend
        return fetch(`/api/news/${symbol}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('API call failed:', error);
