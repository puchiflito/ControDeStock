const conflictError = (msg, code = "CONFLICTO") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 409;
  err.message = msg;
  throw err;
};

const notFoundError = (msg, code = "NO_FUNCIONA") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 404;
  err.message = msg;
  throw err;
};

const notAuthorizedError = (msg, code = "NO_AUTORIZADO") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 401;
  err.message = msg;
  throw err;
};

const forbiddenError = (msg, code = "PROHIBIDO_EL_ACCESO") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 403;
  err.message = msg;
  throw err;
};

const internalServerError = (msg, code = "ERROR_DEL_SERVIDOR") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 500;
  err.message = msg;
  throw err;
};

const badRequestError = (msg, code = "PETICION_INCORRECTA") => {
  let err = new Error();
  err.code = code;
  err.httpStatus = 400;
  err.message = msg;
  throw err;
};

const sendEmailError = (msg = "Error al enviar el email") => {
  internalServerError(msg, "SEND_EMAIL_ERROR");
};

const schemaValidationError = (msg = "Error en la validación de los datos") => {
  badRequestError(msg);
};

export default {
  conflictError,
  notFoundError,
  notAuthorizedError,
  forbiddenError,
  internalServerError,
  sendEmailError,
  badRequestError,
  schemaValidationError,
};
