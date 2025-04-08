use async_trait::async_trait;
use serde::Deserialize;

use crate::models::news::NewsItem;

#[async_trait]
pub trait NewsApi {
    async fn fetch_news(&self, crypto_symbol: &str) -> Result<Vec<NewsItem>, Box<dyn std::error::Error>>;
}

pub mod cryptopanic;

// Function to create a NewsService with all available API clients
pub fn create_news_service() -> crate::services::news_service::NewsService {
    use std::sync::Arc;
    
    // Get API clients
    let cryptopanic_api = Arc::new(cryptopanic::CryptoPanicApi::new(
        std::env::var("CRYPTOPANIC_API_KEY")
            .unwrap_or_else(|_| "485f0f7383731d6aa0593e19716525df099ca7f4".to_string())
    )) as Arc<dyn NewsApi + Send + Sync>;
    
    
    // Create a vector of API clients
    let apis: Vec<Arc<dyn NewsApi + Send + Sync>> = vec![
        cryptopanic_api
    ];
    
    // Create and return the NewsService
    crate::services::news_service::NewsService::new(apis)
}
