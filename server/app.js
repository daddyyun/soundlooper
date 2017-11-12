'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const path = require('path');
const { resolve } = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(volleyball);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

app.listen(3000, () => {
  console.log('Server is LISTENING');
});
