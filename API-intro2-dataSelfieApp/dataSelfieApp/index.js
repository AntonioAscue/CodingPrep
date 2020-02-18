const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening at 3000 -port');
});
app.use(express.static('public')); //express host static file