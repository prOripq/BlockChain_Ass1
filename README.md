# Cryptocurrency News Aggregator


Done by SE-2315: Yussupov Zhangir, Arlen Baybossin, Yeskendir 

A Rust-based service that collects and displays the latest cryptocurrency news from Cryptopanic source.



## Key Features

- Search news by cryptocurrency name or symbol
- Fetch data from multiple APIs (CryptoPanic and CoinGecko)
- Display news title, source, date, and summary
- Handle errors and API rate limits
- Simple web interface for user interaction

## Project Structure

```
crypto_news_aggregator/
├── src/
│   ├── api/
│   │   ├── cryptopanic.rs
│   │   ├── coingecko.rs
│   │   ├── mod.rs
│   │   └── tests.rs
│   ├── models/
│   │   ├── news.rs
│   │   ├── error.rs
│   │   └── mod.rs
│   ├── services/
│   │   ├── news_service.rs
│   │   ├── rate_limiter.rs
│   │   ├── mod.rs
│   │   └── tests.rs
│   ├── web/ 
│   │   │   ├── index.html
│   │   |   ├── style.css
|   |   |   |── app.js
|   |── web_api.rs
│   └── main.rs 
└── Cargo.toml   
```

## Setup and Installation

1. Install Rust and Cargo (if not already installed):
   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. Clone the repository:
   ```
   git clone https://github.com/yourusername/crypto_news_aggregator.git
   cd crypto_news_aggregator
   ```

3. Set up environment variables (optional):
   ```
   export CRYPTOPANIC_API_KEY="your_api_key_here"
   export PORT="8080"
   ```

4. Build and run the application:
   ```
   cargo build --release
   cargo run --release
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## API Keys

- CryptoPanic: Get your API key from [https://cryptopanic.com/developers/api/](https://cryptopanic.com/developers/api/)
- CoinGecko: Free tier doesn't require an API key

## Testing

Run the tests with:
```
cargo test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
