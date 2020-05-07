const express =  require('express');
const app =  express();
app.listen(3000, () => console.log('listening at 3000'));

// (1) I want to serve web pages

app.use(express.static('public')); //host static files in a public