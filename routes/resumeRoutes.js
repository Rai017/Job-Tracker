const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");
const { requireAuth } = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/dashboard", requireAuth, resumeController.dashboard);

router.get("/upload", requireAuth, (req, res) => {
  res.render("upload", { title: "Upload Resume" });
});

router.post("/upload", requireAuth, upload.single("resume"), resumeController.uploadResume);

router.get("/view", requireAuth, resumeController.viewResumes);


router.post("/delete/:id", requireAuth, resumeController.deleteResume);

module.exports = router;
