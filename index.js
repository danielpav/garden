const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/feature', (req, res) => {
  res.json({ ok: true });
});

app.post('/measurement', (req, res) => {
  res.json({ ok:true });
});

app.use(express.static(dir));

app.listen(4443, () => console.log('Listening on http://localhost:4443'));
