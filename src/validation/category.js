const isInvalidCategoryName = (name) => {
  if (name.length < 3 || name.length > 25) {
    return 'incorrect name length';
  }
  const regexp = new RegExp('^[a-zA-Z ]*$');
  if (name.search(regexp) === -1) {
    return 'incorrect symbol in name';
  }
  return false;
};

module.exports = { isInvalidCategoryName };
