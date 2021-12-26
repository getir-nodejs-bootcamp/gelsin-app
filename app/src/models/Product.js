const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Application");

const ProductSchema = new Mongoose.Schema(
  {
    name: String,
    description: String,
    quantity: Number,
    unit_price: Number,
    category: [String], //! Meyve, Elektronik, Bunun için de bir Model gerçekleştirilmelidir..
    //! user => isAdmin?
    user_id: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    media: String,
    comments: [
      {
        comment: String,
        rate: Number,
        created_at: Date,
        user_id: {
          type: Mongoose.Types.ObjectId,
          ref: "user",
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

ProductSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});

module.exports = Mongoose.model("product", ProductSchema);
