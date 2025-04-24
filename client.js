const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  console.log('MQTT client connected');
});

client.on('message', (topic, message) => {
  console.log(`Received message: ${message.toString()} on topic: ${topic}`);
});

function subscribe(topic) {
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    } else {
      console.error(`Failed to subscribe to topic: ${topic}`, err);
    }
  });
}

function publish(topic, message) {
  client.publish(topic, message, (err) => {
    if (!err) {
      console.log(`Message published to topic: ${topic}`);
    } else {
      console.error(`Failed to publish message to topic: ${topic}`, err);
    }
  });
}

module.exports = {
  subscribe,
  publish,
};
