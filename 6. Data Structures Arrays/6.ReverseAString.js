// Javascript
// Topic - Interview Question - Data Structures and Algorithms
// program - Write a function that reverses a string 


function reverse(str){
   // check input
   if (typeof(str) !== 'string' || str.length < 2){
      return;
   }

   let reversedStr = '';
   for (let i=str.length-1; i>=0; i--){
      reversedStr += str[i];
   }
   console.log(reversedStr);
}
reverse

// Improving readability
const reverse2 = string => reverse(string);

reverse2(string1)