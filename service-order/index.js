const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));

const orders = [
    { id: 1, userId: 1, item: 'Book' },
    { id: 2, userId: 2, item: 'Pen' }
];

app.get('/orders', async (req, res) => {
    const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3001';
    const { data: users } = await axios.get(`${userServiceUrl}/users`);
    const enriched = orders.map(o => ({
        ...o,
        user: users.find(u => u.id === o.userId)
    }));
    res.json(enriched);
});

app.listen(3002, () => console.log('Order service on port 3002'));
