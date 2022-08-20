// Javascript - {}
// Topic - Exercise Factorial
// Problem: Given a number N return the index value of thhe Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means N=5 -> 2+3

// function fibonacciIterative(n){
// //code here
// }
// fibonacciIterative(3)

// function fibonacciIterativeRecursive(n){
// //code here
// }
// fibonacciIterativeRecursive(3)


function fibonacciIterative(n){
   //check params
   if (n < 2) { return n }

   const fibArray = [0, 1];
   for (let i = n; i > 1; i--) {
      fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2]);
   }
   return fibArray[n];
}
let result1 = fibonacciIterative(6);
console.log(`iterative result1 = ${result1 }`);

function fibonacciIterativeRecursive(n){
   // base case
   if (n < 2){
      return n;
   }
   
   // recursive case
   return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2);
}
const result2 = fibonacciIterativeRecursive(6)
console.log(`recursive result2 = ${result2 }`);

