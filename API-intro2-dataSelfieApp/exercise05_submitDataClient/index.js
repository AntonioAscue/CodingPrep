const Datastore = require('nedb');
const express = require('express');
const app = express();
app.listen(3000, console.log('listening to port 3000'));
app.use(express.json())
app.use(express.static('public'));

const database =  new Datastore('database.db');
database.loadDatabase();

app.post('/api', (req, res) => {
  const data = req.body;
  database.insert(data);
  res.json({
    status: "success",
    latitude: data.latitude,
    longitude: data.longitude,
    item: data.item
  });
});