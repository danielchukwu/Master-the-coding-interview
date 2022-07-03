// Javascript
// Topic - Interview Question - Data Structures and Algorithms
// program - Write a function that reverses a string 


function reverse (string) {
   if (typeof string !== "string" || string.length < 2){
      return "Input didn't pass the check!"
   }
   let backwards = "";
   let stringLen = string.length-1;

   for (let i=stringLen; i >= 0; i--){
      backwards += string[i];
   }
   console.log(backwards)
   return backwards
} 


let string1 = "abcdefgh"
reverse(string1)

// Improving readability
const reverse2 = string => {
   return reverse(string)
}

reverse2(string1)