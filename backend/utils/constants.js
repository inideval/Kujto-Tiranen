const SAFE_SEARCH_CATEGORIES = [
  'adult',
  'violence',
  'racy',
  'spoof',
  'medical',
];

const SAFE_VALUES = ['VERY_UNLIKELY', 'UNLIKELY'];
const IMAGE_ALREADY_STORED_ERROR = `A similar image is already uploaded, please choose another one!`;
const SOMETHING_WENT_WRONG = 'Something went wrong!';
const NO_PHTOS_FOUND = 'No photos found for this location!';
const SYMBOL_NOT_FOUND = 'Please upload key and symbol!';
const IMAGE_NOT_FOUND = 'Please upload an image!';
const ERROR_DELETING_IMAGE = 'Error deleting temp image:';

module.exports = {
  SAFE_SEARCH_CATEGORIES,
  SAFE_VALUES,
  IMAGE_ALREADY_STORED_ERROR,
  SOMETHING_WENT_WRONG,
  NO_PHTOS_FOUND,
  IMAGE_NOT_FOUND,
  ERROR_DELETING_IMAGE,
  SYMBOL_NOT_FOUND
};
