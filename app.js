const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json({ limit: '100kb' }));

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/', productRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
