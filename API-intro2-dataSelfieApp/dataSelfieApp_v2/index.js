const Datastore = require('nedb')
const express = require('express');
const app =  express();
const port = 3000;
app.use(express.json());

app.listen(port, ()=> console.log(`Listening to port ${port}.`));
app.use(express.static('public'));

const db = new Datastore('public/database/datastore');
db.loadDatabase();

app.post('/api', (req,res) => {
  const data=req.body.json();
  db.insert(data);
  res.send({status:"200",...data})
});