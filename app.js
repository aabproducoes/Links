const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API to get images
app.get('/images', (req, res) => {
    const imagesDirectory = path.join(__dirname, 'public/images');
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) {
            return res.status(500).send("Failed to read directory");
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
