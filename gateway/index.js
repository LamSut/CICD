const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Gateway is running 🚪'));

app.get('/users', async (req, res) => {
    const response = await axios.get('http://service-user:3001/users');
    res.json(response.data);
});

app.get('/orders', async (req, res) => {
    const response = await axios.get('http://service-order:3002/orders');
    res.json(response.data);
});

const port = 8080;
app.listen(port, () => console.log(`Gateway listening on port ${port}`));
