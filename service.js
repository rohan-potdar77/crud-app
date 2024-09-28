const createError = (error, status) => {
  const customError = new Error(error);
  customError.status = status;
  return customError;
};

module.exports = { createError };
