const BINANCE_URL = "https://api.binance.com/api/v3/ticker/price";
// async + functional programming
fetch(BINANCE_URL).then(res=>res.json())
                  .then(async tickers => tickers.map(ticker => { return {"symbol": ticker.symbol.toLocaleLowerCase(), "price": Number(ticker.price)};}))
                  .then(async tickers => tickers.filter(ticker => ticker.price > 1_000))
                  .then(console.log);
