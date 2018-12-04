const isInvalidLogin = (login) => {
  if (login.length < 3 || login.length > 15) {
    return 'incorrect login length';
  }
  const regexp = new RegExp('^[a-zA-Z0-9_]*$');
  if (login.search(regexp) == -1) {
    return 'incorrect symbol in login';
  }
  return false;
}

const isInvalidPassword = (password) => {
  if (password.length < 3 || password.length > 15) {
    return 'incorrect password length';
  }
  const regexp = new RegExp('^[a-zA-Z0-9_]*$');
  if (password.search(regexp) == -1) {
    return 'incorrect symbol in password';
  }
  return false;
}

const isInvalidPhoneNumber = (phoneNumber) => {
  if (phoneNumber.toString().length != 7) {
    return 'incorrect phone number length';
  } else {
    if (isNaN(Number(phoneNumber))) {
      return 'incorrect phone number format';
    }
  }
  return false;
}

const isInvalidName = (name) => {
  if (name.length < 3 || name.length > 255) {
    return 'incorrect name length';
  }
  const regexp = new RegExp('^[a-zA-Z]*$');
  if (name.search(regexp) == -1) {
    return 'incorrect symbol in name';
  }
  return false;
}

const isInvalidEmail = (email) => {
  const regexp = new RegExp('@');
  if (email.match(regexp) == null) {
    return 'no symbol @';
  }
  return false;
}

const isInvalidAddress = (address) => {
  if (address.length < 5 || address.length > 255) {
    return 'incorrect address length';
  }
  return false;
}

module.exports = {
  isInvalidLogin,
  isInvalidPassword,
  isInvalidPhoneNumber,
  isInvalidName,
  isInvalidEmail,
  isInvalidAddress
}