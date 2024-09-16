// server/controllers/cvController.js
const CV = require('../models/CV');

// Get all CVs
exports.getCVs = async (req, res) => {
  try {
    const cvs = await CV.find();
    res.status(200).json(cvs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving CVs' });
  }
};

// Create a CV
exports.createCV = async (req, res) => {
  const { name, email, phone, experience, education, skills } = req.body;

  try {
    const cv = new CV({ name, email, phone, experience, education, skills });
    await cv.save();
    res.status(201).json(cv);
  } catch (error) {
    res.status(500).json({ message: 'Error creating CV' });
  }
};
