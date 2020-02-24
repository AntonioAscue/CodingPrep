const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening at 3000 -port');
});
app.use(express.static('public')); //express host static file
app.use(express.json()); // support json encoded bodies

app.post('/api', (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.json({
    status: 'Success!',
    latitude: data.lat,
    longitude: data.lon
  });
});