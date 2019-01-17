const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Micro-service on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/hello/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`);
});

app.post('/post', (req, res) => {
  res.send(JSON.stringify(req.body));
});
