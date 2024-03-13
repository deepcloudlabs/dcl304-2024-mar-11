const WebSocket = require("ws");
const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new WebSocket(BINANCE_WS_URL);
const {connect, Schema, Types, model} = require("mongoose");
const db_name = "tradingdb";
const collection_name = "trades";


connect(`mongodb://localhost:27017/${db_name}`, {
    "socketTimeoutMS": 0
}).then(() => console.log("Connected to the mongodb"));

const tradeSchema = new Schema({
    "_id": Schema.Types.ObjectId,
    "symbol": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "quantity": {
        type: Number,
        required: true
    },
    "volume": {
        type: Number,
        required: true
    },
    "timestamp": {
        type: Date,
        required: true
    },
    "sequence": {
        type: Number,
        required: true
    },
    "bid": {
        type: Number,
        required: true
    },
    "ask": {
        type: Number,
        required: true
    }
});
const Trade = model(collection_name, tradeSchema);

ws.on("message", frame => {
    const event = JSON.parse(frame);
    const document = {};
    document._id = new Types.ObjectId();
    document.symbol = event.s;
    document.price = Number(event.p);
    document.quantity = Number(event.q);
    document.volume = document.price * document.quantity;
    document.bid = event.b;
    document.ask = event.a;
    document.sequence = event.t;
    document.timestamp = new Date(event.T);
    const trade = new Trade(document);
    trade.save()
        .then((savedTrade) => {
        })
        .catch(console.error);
});