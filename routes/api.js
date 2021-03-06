var express = require('express');
var router = express.Router();
var controllers = require('../controllers/eventController')
/* GET users listing. */
router.get('/event', controllers.readEvents)
router.get('/event/:id', controllers.readEvent)
router.post('/event', controllers.createEvent)
router.put('/event/:id', controllers.updateEvent)
router.delete('/event/:id', controllers.deleteEvent)

module.exports = router;
