// Javascript - {}
// Topic - Exercise Reverse String
// Problem: Implement a function that reverses a string using iteration...and then recursion!
// function reverseString(str) {

// }

// reverseString('yoyo mastery')
// //should return: 'yretsam oyoy'


function reverseString(str) {
   // check params: 
   if (str.length < 2) {
      return str;
   };

   return reverseString(str.slice(1)) + str[0];
}

const result = reverseString('yoyo mastery')
console.log(result);
//should return: 'yretsam oyoy'