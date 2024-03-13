const WebSocket = require("ws");
const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new WebSocket(BINANCE_WS_URL);

let amqp = require('amqplib/callback_api');
amqp.connect('amqp://guest:guest@127.0.0.1:5672', (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((channel_error, channel) => {
        if (channel_error) {
            throw channel_error;
        }
        ws.on('message', (frame) => {
            const event = JSON.parse(frame);
            const document = {};
            document.symbol = event.s;
            document.price = Number(event.p);
            document.quantity = Number(event.q);
            document.volume = document.price * document.quantity;
            document.bid = event.b;
            document.ask = event.a;
            document.sequence = event.t;
            document.timestamp = new Date(event.T);
            channel.publish('tradex', '', Buffer.from(JSON.stringify(document)));
        });
    });
});