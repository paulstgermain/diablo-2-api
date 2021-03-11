require('dotenv').config();

const express = require('express');


const server = express();

server.use(express.json());

const port = process.env.PORT;

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors());
}

// API endpoint
server.get('/api/characters', (req, res) => {
    res.json({
        necromancer: 'Revives the dead.',
        sorceress: 'Practices arcane magics.',
        druid: 'One with nature.'
    })
})


server.get('*', (req, res) => {
    res.json({ message: "Welp, it's working." });
});

server.listen(port, () => {
    console.log(`Magic happening on [port:${port}]`);
});