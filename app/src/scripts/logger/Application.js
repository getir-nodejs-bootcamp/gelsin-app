const winston = require("winston");
const path = require("path");

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "application-service" },
  transports: [new winston.transports.File({ filename: path.join(__dirname, "../../", "logs/application", "combined.log") }), new winston.transports.Console()],
});

module.exports = logger;
