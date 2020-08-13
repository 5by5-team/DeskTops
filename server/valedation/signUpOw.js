// const Validator = require('validator');
// const isEmpty = require('is-empty');
// module.exports = function validateSignupinOw(data) {
//   let errors = {};

// // Name checks
//   if (Validator.isEmpty(data.name)) {
//     errors.firstName = 'first name field is required';
//   }
// // phone checks
//   if (Validator.isEmpty(data.phone)) {
//     errors.firstName = 'first name field is required';
//   }
// // CompanyName checks
//  if (Validator.isEmpty(data.companyname)) {
//   errors.firstName = 'first name field is required';
// } 
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
//   return {
//     errors,
//     isValid: isEmpty(errors),
//   };
// };