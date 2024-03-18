const multer = require("multer");

const upload = multer({
  dest: "./uploads",
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, done) => {
    const fileName = file.mimetype;
    if (
      fileName === "image/jpeg" ||
      fileName === "image/png" ||
      fileName === "image/jpeg"
    ) {
      done(null, true);
    } else {
      done(new Error("Invalid file type"), false);
    }
  },
});

module.exports = upload;
