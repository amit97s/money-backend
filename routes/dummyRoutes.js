const express = require('express');
const { saveDummyData, getDummyData } = require('../controllers/dummyController'); // Ensure these are correctly imported

const router = express.Router();

router.post('/dummy', saveDummyData);

router.get('/dummy', getDummyData);

module.exports = router;