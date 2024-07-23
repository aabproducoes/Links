const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const imagesDirectory = './images'; // Replace with your images directory

app.get('/generate-image-list', (req, res) => {
  const folderName = path.basename(imagesDirectory);
  const images = fs.readdirSync(imagesDirectory).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
  }).map(file => path.join(imagesDirectory, file));

  const imageList = {
    folderName: folderName,
    images: images
  };

  fs.writeFileSync(path.join(imagesDirectory, 'image_list.json'), JSON.stringify(imageList, null, 2));
  res.json({ message: 'Image list generated successfully' });
});

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
