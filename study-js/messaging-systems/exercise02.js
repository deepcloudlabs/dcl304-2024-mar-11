const WebSocket = require("ws");
const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new WebSocket(BINANCE_WS_URL);

const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "hr-backend-producer",
    brokers: ["127.0.0.1:9092"]
});
const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

producer.connect()
    .then(() => console.log("Connected to the Kafka broker successfully."))
    .catch(err => console.error(err));

ws.on("message", frame => {
    const event = JSON.parse(frame);
    const tradeEvent = {};
    tradeEvent.symbol = event.s;
    tradeEvent.price = Number(event.p);
    tradeEvent.quantity = Number(event.q);
    tradeEvent.volume = tradeEvent.price * tradeEvent.quantity;
    tradeEvent.bid = event.b;
    tradeEvent.ask = event.a;
    tradeEvent.sequence = event.t;
    tradeEvent.timestamp = new Date(event.T);
    producer.send({
        topic: "trade-events",
        messages: [
            {"key": tradeEvent.symbol, "value": JSON.stringify(tradeEvent)}
        ]
    }).then(() => {
        console.log("Event has been successfully sent.")
    }).catch(err => console.error(err));
});