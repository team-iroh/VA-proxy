const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 4001;

app.use(cors);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Proxy server is listening at http://localhost:${port}`));

