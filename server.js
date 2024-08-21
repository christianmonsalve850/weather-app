const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

require('dotenv').config()

const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/data', async (req, res) => {
    const city = req.query.city || "New York City";

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: process.env.VITE_API_KEY,
                units: 'metric',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
