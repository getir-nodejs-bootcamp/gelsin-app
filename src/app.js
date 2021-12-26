const express = require("express");
const fileUpload = require("express-fileupload");
const { UserRoutes, ProductRoutes } = require("./routes");
const loaders = require("./loaders");
const config = require("./config");
const events = require("./scripts/events");
const path = require("path");
const fs = require("fs");
const errorHandler = require("./middlewares/errorHandler");
const morgan = require("morgan");

config();
loaders();
events();

const app = express();
app.use("/product-images", express.static(path.join(__dirname, "./", "uploads/products")));
app.use(express.json());
app.use(fileUpload());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "logs/network", "access.log"), { flags: "a" });
// setup the logger
app.use(morgan("tiny", { stream: accessLogStream }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Application is running on ${process.env.APP_PORT}`);
  app.use("/users", UserRoutes);
  app.use("/products", ProductRoutes);

  app.use((req, res, next) => {
    const error = new Error("Böyle bir EP Bulunmamaktadır..");
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});
