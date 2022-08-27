// Javascript - {}
// Topic: Dynamic Programming (Fibonacci Sequence)

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

function fibonacci(n){
   if (n < 2){
      return n;
   }
   return fibonacci(n-1) + fibonacci(n-2);
}
