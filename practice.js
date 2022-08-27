// Javascript - {}
// Topic: Dynamic Programming (Fibonacci Sequence)

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

let operationsCount = 0
function fibonacci(n){
   operationsCount++;
   if (n < 2){
      return n;
   }
   return fibonacci(n-1) + fibonacci(n-2);
}

let result = fibonacci(7);
console.log('operations count: ', operationsCount)
console.log(result)


// fibonacci sequence using memoization to be made more efficient

let operationsCount2 = 0;

function fibonacciDP() {
   const hashtable = {}

   function fib(n) {
      if (n in hashtable){
         return hashtable[n];
      } else {
         operationsCount2++;
         if (n < 2){
            return n;
         }
         hashtable[n] = fib(n-1) + fib(n-2);
         return hashtable[n];
      }
   }

   return fib;
}

const fibDP = fibonacciDP();

console.log((fibDP(7)))
console.log('operations count for dynamic programming fibonacci sequence: ', operationsCount2);