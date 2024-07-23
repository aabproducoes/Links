const fs = require('fs');
const path = require('path');

const imagesDirectory = './images'; // Replace with your images directory

function generateImageList(directory) {
  const folderName = path.basename(directory);
  const images = fs.readdirSync(directory).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
  }).map(file => path.join(directory, file));

  const imageList = {
    folderName: folderName,
    images: images
  };

  fs.writeFileSync(path.join(directory, 'image_list.json'), JSON.stringify(imageList, null, 2));
}

generateImageList(imagesDirectory);
