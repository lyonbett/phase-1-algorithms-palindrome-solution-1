function reverse(word){
  const wordArr = word.split("")
  const reverseWordArr = wordArr.reverse()
  const reversedWord = reverseWordArr.join("")

  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reverseWord = reverse(word)
  // If the input is the same as the reversed input
  if (word === reverseWord){
    return true;
  }else{
    return false;
  }
}

/*
  Add written explanation of your solution here

  this code is a simple and efficient solution to check whether a string is a palindrome or not.
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
