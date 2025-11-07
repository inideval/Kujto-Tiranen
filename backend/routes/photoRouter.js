const express = require('express');

const controller = require('../controllers/photoController');

const router = express.Router();

router
  .route('/')
  .post(controller.validatePhotoUpload, controller.uploadPhoto);

router.route('/:location').get(controller.getPhotos);

module.exports = router;
