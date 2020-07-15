export function validateUser(values) {
  let errors = {};
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (values.email.length === 0) {
    errors.empty = "Required";
    errors.isValid = false;
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Incorrect email format";
    errors.isValid = false;
  }
  if (values.password.length === 0) {
    errors.passwordEmpty = "Required";
    errors.isValid = false;
  }
  if (Object.keys(errors).length === 0) {
    errors.isValid = true;
  }
  return errors;
}
