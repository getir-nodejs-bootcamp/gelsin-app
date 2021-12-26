const ApiError = require("../errors/ApiError");
const httpStatus = require("http-status");

/*
 * @description : idChecker
 * @params(req : Request Object, res : Response, next : Callback Function)
 * @return String
 */
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
const idChecker = (req, res, next) => {
  if (!req?.params?.id?.match(/^[0-9a-fA-F]{24}$/)) {
    next(new ApiError("Lütfen geçerli bir ID bilgisi giriniz", httpStatus.BAD_REQUEST));
    return;
  }
  next();
};

module.exports = idChecker;
