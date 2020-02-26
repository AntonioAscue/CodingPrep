const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening to port 3000'));
app.use(express.static('public'));
app.use(express.json());

const dataArr = [];

app.post('/api',(req,res) => {
  const data = req.body;
  dataArr.push(data);
  console.log(dataArr);
  res.json(dataArr);
});