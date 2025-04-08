# Cryptocurrency News Aggregator


Done by SE-2315: Yussupov Zhangir, Arlen Baybossin, Yeskendir 

A Rust-based service that collects and displays the latest cryptocurrency news from Cryptopanic source.



## Key Features

- Fetch data from CryptoPanic
- Display news title, source, date, and summary
- Search news by cryptocurrency name or symbol
- Handle errors and API rate limits
- Simple UX and UI


## ScreenShots
![image](https://github.com/user-attachments/assets/3964c1e3-bb62-4412-888d-f56605bce878)
![image](https://github.com/user-attachments/assets/53bb0a3c-daf3-4900-808a-59623508c110)
![image](https://github.com/user-attachments/assets/dfceb62d-1f47-4c59-8472-99c53279a759)
![image](https://github.com/user-attachments/assets/c9d8329e-555e-4c3f-8f8d-1c9b26346ca4)





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


1. Set up API:
   ```
   $env:CRYPTOPANIC_API_KEY = "Your API here"
   export PORT="port that you want to host(For Example 2020)"
   ```

2.  Run the application:
   ```
   cargo run
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:2020
   ```

## API Keys

- CryptoPanic: Get your API key from [https://cryptopanic.com/developers/api/](https://cryptopanic.com/developers/api/)

## Testing

Run the tests with:
```
cargo test
```

## License

This project is licensed under the MIT License.
