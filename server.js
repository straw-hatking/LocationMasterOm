const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

let locationHistory = [];

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to store location
app.post('/location', (req, res) => {
    const { latitude, longitude, altitude, timestamp } = req.body;
    locationHistory.push({ latitude, longitude, altitude, timestamp });
    res.status(200).send('Location stored successfully');
});

// Endpoint to get location history
app.get('/location-history', (req, res) => {
    res.json(locationHistory);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
