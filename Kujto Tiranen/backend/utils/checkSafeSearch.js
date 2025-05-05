const { SAFE_SEARCH_CATEGORIES, SAFE_VALUES } = require('./Constants');

/**
 * Checks if an image is safe based on Vision API's SafeSearch annotation.
 * @param {object} annotation - The safeSearchAnnotation object from the Vision API.
 * @returns {string|null} - Returns an error message if unsafe, or null if it's safe.
 */
module.exports = (annotation) => {
  for (const category of SAFE_SEARCH_CATEGORIES) {
    const value = annotation[category];

    if (!SAFE_VALUES.includes(value)) {
      return `Image is not suitable due to ${category} content.`;
    }
  }

  return null;
};
