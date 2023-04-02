function isPalindrome(Word) {
  str = Word.toLowerCase().replace(/[^a-z0-9]/g, '');

  return str === Word.split('').reverse().join('');
}

console.log(isPalindrome('abba')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('hello')); // false


/* 
// reverse copyInput
// compare copyInput to Input
// return true or false*/

/*
  Add written explanation of your solution here
  // Convert the string to lowercase and remove non-alphanumeric characters
  // Check if the string is the same forwards and backwards
  // Test the function with some examples
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
