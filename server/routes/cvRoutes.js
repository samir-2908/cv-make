// server/routes/cvRoutes.js
const express = require('express');
const { getCVs, createCV } = require('../controllers/cvController');
const router = express.Router();

router.get('/cvs', getCVs);
router.post('/cvs', createCV);

module.exports = router;
