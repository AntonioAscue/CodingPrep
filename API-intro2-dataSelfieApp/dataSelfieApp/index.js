const Datastore = require('nedb');
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening at 3000 -port');
});
app.use(express.static('public')); //express host static file
app.use(express.json()); // support json encoded bodies

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (req, res) => {
  const data = req.body;
  console.log(data);
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  res.json({ status: "Success", ...data });
});

app.get('/api', (req, res) => {
  database.find({}, (err, data) => { 
    if(err){
      res.end();
      return;
    }
    res.json(data);
   });
})