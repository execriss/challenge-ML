import { validationResult } from "express-validator";

export const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(error => {
      return {
        param: error.param,
        message: error.msg
      };
    });

    return res.status(422).json({
      success: false,
      errors: formattedErrors
    });
  }

  next();
};
