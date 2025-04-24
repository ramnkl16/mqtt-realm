const express = require('express');
const mqtt = require('mqtt');
const Realm = require('realm');

const app = express();
const port = 3000;

// MQTT client and server setup
const mqttClient = mqtt.connect('mqtt://localhost:1883');

mqttClient.on('connect', () => {
  console.log('MQTT client connected');
});

mqttClient.on('message', (topic, message) => {
  console.log(`Received message: ${message.toString()} on topic: ${topic}`);
});

app.get('/publish', (req, res) => {
  const topic = req.query.topic;
  const message = req.query.message;
  mqttClient.publish(topic, message);
  res.send('Message published');
});

// RealmDB setup and sample CRUD operations
const appSchema = {
  name: 'App',
  properties: {
    _id: 'objectId',
    name: 'string',
  },
  primaryKey: '_id',
};

const realmConfig = {
  schema: [appSchema],
  path: 'app.realm',
};

app.use(express.json());

app.post('/create', async (req, res) => {
  const { name } = req.body;
  const realm = await Realm.open(realmConfig);
  realm.write(() => {
    realm.create('App', { _id: new Realm.BSON.ObjectId(), name });
  });
  res.send('Data created');
});

app.get('/read', async (req, res) => {
  const realm = await Realm.open(realmConfig);
  const data = realm.objects('App');
  res.json(data);
});

app.put('/update', async (req, res) => {
  const { id, name } = req.body;
  const realm = await Realm.open(realmConfig);
  realm.write(() => {
    const data = realm.objectForPrimaryKey('App', new Realm.BSON.ObjectId(id));
    data.name = name;
  });
  res.send('Data updated');
});

app.delete('/delete', async (req, res) => {
  const { id } = req.body;
  const realm = await Realm.open(realmConfig);
  realm.write(() => {
    const data = realm.objectForPrimaryKey('App', new Realm.BSON.ObjectId(id));
    realm.delete(data);
  });
  res.send('Data deleted');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
