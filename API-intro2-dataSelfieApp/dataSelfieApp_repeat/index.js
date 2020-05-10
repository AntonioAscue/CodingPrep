const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public')); //host static files in a public
app.use(express.json({ limit: "1mb" }));

app.post('/', (req, res) => {
  console.log(req.body);
  const coord = req.body;

  saveDb(coord, (err) => {
    console.log("writefile", coord);
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
    }
    console.log('Configuration saved successfully.')
  })

  res.json({
    status: 'success',
    latitude: coord.lat,
    longitude: coord.lon
  })

})

function saveDb(data, callback) {
  fs.writeFile('./public/database.json', JSON.stringify(data), callback);
}