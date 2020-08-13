// const Validator = require('validator');
// const isEmpty = require('is-empty');
// module.exports = function validateSignupinRig(data) {
//   let errors = {};

// // Name checks
//   if (Validator.isEmpty(data.name)) {
//     errors.name = 'name field is required';
//   }
// // Email checks
//   if (Validator.isEmpty(data.email)) {
//     errors.email = 'Email field is required';
//   } else if (!Validator.isEmail(data.email)) {
//     errors.email = 'Email is invalid';
//   }
// // Password checks
//   if (Validator.isEmpty(data.password)) {
//     errors.password = 'Password field is required';
//   }
//   if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
//     errors.password = 'Password must be at least 6 characters';
//   }
//   if (Validator.isEmpty(data.phone)) {
//     errors.phone = 'phne field is required';
//   }
//   console.log(errors)
// };
