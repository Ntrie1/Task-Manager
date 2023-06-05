const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: false }))
}

module.exports = expressConfig;