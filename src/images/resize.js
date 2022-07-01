const sharp = require('sharp');

sharp('back.png')
  .resize(220, 330)
  .toFile('back-small.png', (err) => {
    console.log(err);
  })
  .then(() => {
    console.log('Success');
  });
