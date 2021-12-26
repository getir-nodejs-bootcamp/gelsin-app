const logger = require("../scripts/logger/Error");

module.exports = (error, req, res, next) => {
  console.log("Error middleware calisti..");

  logger.log({
    level: "error",
    message: {
      status: error.status || 500,
      message: error.message || "Internal Server Error....",
    },
  });

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Internal Server Error....",
    },
  });
};
