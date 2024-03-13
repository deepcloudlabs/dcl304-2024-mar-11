const WebSocket = require("ws");
const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new WebSocket(BINANCE_WS_URL);
const {Server} = require("socket.io");
const io = new Server(2025, {cors: {origin: "*"}});
const sessions = [];


io.on("connection", session => {
    console.log(`New websocket connection is created: ${session.id}`);
    sessions.push(session);
    io.on("disconnect", () => {
        console.log(`Websocket connection is closed: ${session.id}`);
        sessions.splice(0,
            sessions.length,
            sessions.filter(_session => _session.id !== session.id)
        );
    });
});

ws.on("message", frame => {
    const rawTrade = JSON.parse(frame);
    const enrichedTrade = {};
    enrichedTrade.symbol = rawTrade.s;
    enrichedTrade.price = Number(rawTrade.p);
    enrichedTrade.quantity = Number(rawTrade.q);
    enrichedTrade.volume = enrichedTrade.price * enrichedTrade.quantity;
    enrichedTrade.bid = rawTrade.b;
    enrichedTrade.ask = rawTrade.a;
    enrichedTrade.timestamp = rawTrade.T;

    sessions.forEach( session => {
         session.emit("trade-event",JSON.stringify(enrichedTrade));
    });
});
