const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

router.use(require('./candidateRoutes'));

router.use(require('./partyRoutes'));

router.use(require('./voterRoutes'));

module.exports = router;