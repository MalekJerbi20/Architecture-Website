const express = require('express');
const multer = require('multer');
const router = express.Router();
const Project = require('../models/Project');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage });

// Add new project with image upload
router.post('/projects', upload.array('images' , 5), async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      images: req.files.map(file => file.filename)
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

module.exports = router;