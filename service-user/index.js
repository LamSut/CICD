const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3001, () => console.log('User service on port 3001'));
