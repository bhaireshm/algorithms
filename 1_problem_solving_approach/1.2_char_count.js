function charCount(str) {
  // create an object
  var result = {};

  for (let char of str) {
    // if char has special chars, ignore it
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // if the char is alpha numeric add to object if not exists or increment it
      result[char] = ++result[char] || 1;
    }
  }

  // return object
  return result;
}

function isAlphaNumeric(char) {
  let charCode = char.charCodeAt(0);

  if (
    (charCode > 47 && charCode < 57) || // 0-9
    (charCode > 96 && charCode < 123) || // a-z
    (charCode > 64 && charCode < 91) // A-Z
  )
    return true;

  return false;
}

console.log(charCount("Hello my name is Bhairesh M. Thank you!!! $#%%"));
