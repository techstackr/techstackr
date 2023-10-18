const express = require('express');
const router = express.Router();
const techController = require('../controllers/technologyController.js');

// get list of Techs (name, desc, icon)
router.get('/', techController.getTechnologies, (req, res) => {
  res.status(201).json(res.locals.allTech);
});

/**
 * @abstract Create new Tech
 */
// router.post('/', (req, res) => {

// });

// router.delete('/', (req, res) => {

// });

// router.update('/', (req, res) => {

// });

module.exports = router;
