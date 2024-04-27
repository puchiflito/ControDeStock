const errorController = (err, req, res, next) => {
  console.error(err);
  res.status(err.httpStatus || 500).send({ ...err, status: "error" });
};

module.exports = errorController;
