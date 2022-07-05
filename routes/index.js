const express = require('express');
const path = require('path');
const router = express.Router();

const controller = require(path.join(__dirname + "/../controllers/index.crud"));

router.get('/read',controller.read);
router.post('/create/:type',controller.create);
router.post('/update/:type',controller.update);
router.delete('/delete/:type',controller.destroy);


module.exports = router;


