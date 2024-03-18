const { Router } = require("express");
const upload = require("../services/uploader");

const router = Router();

router.post("/files", upload.single("avatar"), (req, res, next) => {
  try {
    console.log(req.file);
    res.end("success");
  } catch (error) {
    res.json({ msg: "file uploading failed", error });
  }
});

module.exports = router;
