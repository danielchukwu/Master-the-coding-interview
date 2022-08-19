// Javascript - {}
// Topic - Exercise Factorial


function findFactorialRecursive(number) {
   // code here
}

function findFactorialIterative(number) {
   // code here
   let result = number;
   for (let i=number-1; i > 0; i--){
      result *= i;
   }
   return result
}

// const obj1 = findFactorialRecursive(5);
const obj2 = findFactorialIterative(5);
console.log(obj2);