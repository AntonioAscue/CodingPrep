const express = require('express');
const app =  express();
const port = 3000;
app.use(express.json());

app.listen(port, ()=> console.log(`Listening to port ${port}.`));
app.use(express.static('public'));

app.post('/api', (request,res) => {
  console.log(request);
});