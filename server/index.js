const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 4001;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

