// 125. Valid Palindrome



// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.







/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversedString = cleanedString.split('').reverse().join('');
    
    // Compare cleaned string with its reversed version
    return cleanedString === reversedString;
};