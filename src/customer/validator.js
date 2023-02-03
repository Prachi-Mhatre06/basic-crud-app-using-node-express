const { body, validationResult } = require('express-validator')

const customerValidationRules = () => {
  return [
    body('email')
    .isEmail()
    .withMessage('Invalid email'),
    body('name')
    .isLength({ min: 5 })
    .withMessage('name is required'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  console.log('hwereee')
  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  customerValidationRules,
  validate,
}