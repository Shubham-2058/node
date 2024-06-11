const express = require('express');

const app = express();

app.use((request, response) => {
    response.json({ message: 'hi this is me'});
});

module.exports = app;