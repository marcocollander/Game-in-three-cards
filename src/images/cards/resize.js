const sharp = require("sharp");

sharp("dama-kier.png")
  .resize(220, 330)
  .toFile("dama-kier-small.png", (err) => {
    console.log(err);
  })
  .then(() => {
    console.log("Success");
  });
