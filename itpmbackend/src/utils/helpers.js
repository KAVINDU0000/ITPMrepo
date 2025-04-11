// Helper functions

/**
 * Determine the age category of a pet
 * @param {number} age - The age of the pet in years
 * @returns {string} - The age category (puppy, adult, or senior)
 */
exports.getAgeCategory = (age) => {
  if (age < 1) return 'puppy';
  if (age < 8) return 'adult';
  return 'senior';
};

/**
 * Format a response object
 * @param {boolean} success - Whether the operation was successful
 * @param {string} message - The message to return
 * @param {object} data - The data to return
 * @returns {object} - The formatted response object
 */
exports.formatResponse = (success, message, data = null) => {
  return {
    success,
    message,
    ...(data && { data })
  };
}; 