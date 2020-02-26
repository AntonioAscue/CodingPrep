const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening to port 3000'));
app.use(express.static('public'));
app.use(express.json());

const dataArr = [];

app.post('/api', (req, res) => {
  const data = req.body;
  dataArr.push(data);
  res.json(dataArr);

  if (dataArr.length <= 1) {
    saveData(dataArr);
  } else {
    const storedData = retrieveData();
    storedData.push(data);
    saveData(storedData);
  }
});

function retrieveData() {
  const data = fs.readFileSync('./config.json');

  try {
    return JSON.parse(data);
  }
  catch (err) {
    console.log('There has been a parsing error');
    console.log(err);
  }
}

function saveData(data) {
  fs.writeFile('./config.json', JSON.stringify(data), (err) => {
    err ? (console.log('There has been an error saving your configuration data.'),
      console.log(err.message))
      : console.log('Configuration saved successfully.');
  })
}