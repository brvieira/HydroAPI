const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/dados', require('./api/routes/dadosRoutes')());

app.listen(port);

console.log('RESTful API server started on: ' + port);
