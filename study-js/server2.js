const WebSocket = require("ws");
const {Observable, map,filter} = require("rxjs");

const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new WebSocket(BINANCE_WS_URL);
const observable = new Observable(
    observer => {
        ws.on("message", frame => {
            const trade = JSON.parse(frame);
            observer.next(trade);
        });
        return function unsubscribe(){
            console.log("Observer has just been unsubscribed.");
        };
    }
);
// async pipe: map -> filter
const subscription = observable.pipe(
    map(rawTrade =>{
        const enrichedTrade = {};
        enrichedTrade.symbol = rawTrade.s;
        enrichedTrade.price = Number(rawTrade.p);
        enrichedTrade.quantity = Number(rawTrade.q);
        enrichedTrade.volume = enrichedTrade.price * enrichedTrade.quantity;
        enrichedTrade.bid = rawTrade.b;
        enrichedTrade.ask = rawTrade.a;
        enrichedTrade.timestamp = new Date(rawTrade.T);
        return enrichedTrade;
    }),
    filter(trade => trade.volume > 5_000)
).subscribe(console.log);

setTimeout( () => {
    subscription.unsubscribe();
}, 30_000)