const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 4001;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/:1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Proxy server is listening at http://localhost:${port}`));

