import validator from 'validator';

export function validateRequired(value) {
  if (!value || !value.toString().trim().length) {
    return 'Field is required';
  }
}

export function validateEmail(value) {
  if (!value || !validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }
}

export function validateName(value) {
  if (!value || !value.toString().trim().length) {
    return 'Field is required';
  }
  if (/\d/.test(value)) {
    return "cannot contains numbers"
  }
}

export function validateNumber(value) {
  if (!value || !value.toString().trim().length) {
    return 'Field is required';
  }
  if (!/^[0-9]+$/.test(value)) {
    return "Must contains numbers"
  }
}

export function validateZip(value) {
    if (!value || !value.toString().trim().length) {
        return 'Field is required';
    }
    if (!/^\d{5}(?:[-\s]\d{4})?$/.test(value)) {
        return "Must contains only 5 numbers"
    }
}

export function validateCvc(value) {
    if (!value || !value.toString().trim().length) {
        return 'Field is required';
    }
    if (!/^[0-9]{3}$/.test(value)) {
        return "Must contains only 3 numbers"
    }
}

