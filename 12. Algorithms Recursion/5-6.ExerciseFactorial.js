// Javascript - {}
// Topic - Exercise Factorial


function findFactorialRecursive(number) {
   // base case
   if (number === 2){
      return number;
   }

   // recursive case
   return findFactorialRecursive(number-1) * number;
}

function findFactorialIterative(number) {
   // code here
   let result = number;
   for (let i=number-1; i > 1; i--){
      result *= i;
   }
   return result;
}

const obj1 = findFactorialRecursive(5);
console.log(`recursive result = ${obj1}`)
const obj2 = findFactorialIterative(5);
console.log(`iteritative result = ${obj2}`)