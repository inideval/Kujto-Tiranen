const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const fsPromises = require('fs').promises;

const Photo = require('../models/photoModel');
const AppError = require('../utils/appError');
const Constants = require('../utils/Constants');
const catchAsync = require('../utils/catchAsync');
const checkIfImageIsSafe = require('../utils/checkSafeSearch');
const { body, validationResult } = require('express-validator');
const { analyzeWithGoogleVision } = require('../utils/googleVision');
const { generateImageHash, ensureDirectoryExists, generateFileName } = require('../utils/imageUtils');

const TEMP_DIR = path.resolve(__dirname, process.env.TEMP_IMAGE_DIR);
const UPLOAD_DIR = path.resolve(__dirname, process.env.UPLOAD_IMAGE_DIR);

exports.validatePhotoUpload = [
  body('description').notEmpty().withMessage('Description is required'),
  body('locationFamily').notEmpty().withMessage('Location family is required'),
  body('originYear')
  .isInt().withMessage('Origin year must be a valid number')
  .custom((value) => {
    const currentYear = new Date().getFullYear();
    if (value > currentYear) {
      throw new AppError(`Origin year cannot be greater than ${currentYear}`, 400);
    }
    return true;
  }),  
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Email must be valid'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new AppError(
          'Validation error: ' +
            errors
              .array()
              .map((e) => e.msg)
              .join(', '),
          400
        )
      );
    }
    next();
  },
];

exports.uploadPhoto = catchAsync(async (req, res, next) => {
  if (!req.files || !req.files.image) {
    return next(new AppError(Constants.IMAGE_NOT_FOUND, 400));
  }

  const image = req.files.image;
  const { _ , mimetype, data } = image;

  const locationFamily = req.body.locationFamily;

  const generatedKey = generateFileName(mimetype);
  const tempPath = path.join(TEMP_DIR, generatedKey);
  const permanentDir = path.join(UPLOAD_DIR, locationFamily);
  const permanentPath = path.join(permanentDir, generatedKey);
  const relativePath = path.join('uploads', 'images', locationFamily, generatedKey);

  try {
    await image.mv(tempPath);

    const annotation = await analyzeWithGoogleVision(image);
    const unsafeReason = checkIfImageIsSafe(annotation);

    if (unsafeReason) {
      return next(new AppError(unsafeReason, 400));
    }

    const hash = await generateImageHash(data);

    await Photo.create({
      hash,
      path: relativePath,
      ...req.body,
    });

    await ensureDirectoryExists(permanentDir);
    await image.mv(permanentPath);
    
    res.status(201).json({
      status: 'Success',
      filePath: relativePath,
    });
  } finally {
    await fsPromises.unlink(tempPath);
  }
});

exports.getPhotos = catchAsync(async (req, res, next) => {
  const locationFamily = req.params.location;

  const photos = await Photo.find({ locationFamily }).sort('originYear');

  if (!photos || photos.length === 0) {
    return next(new AppError(Constants.NO_PHTOS_FOUND, 404));
  }

  const response = await Promise.all(
    photos.map(async (p) => {
      const imageFilePath = path.join(__dirname, `../../${p.path}`);
      const mimeType = mime.lookup(imageFilePath);
  
      const imageBuffer = await fs.promises.readFile(imageFilePath);
  
      return {
        image: `data:${mimeType};base64,${imageBuffer.toString('base64')}`,
        description: p.description,
        year: p.originYear,
        name: `${p.firstName} ${p.lastName}`,
      };
    })
  );

  res.status(200).json({
    status: 'Success',
    results: response.length,
    data: response,
  });
});


