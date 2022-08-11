// Javascript - {}
// Topic - Google Question (First Recurring Character)
// Problem: Given an array return the first recurring character

// Example 1
// Input  - [2,5,1,2,3,5,1,2,4]
// Output - 2

// Example 2
// Input  - [2,1,1,2,3,5,1,2,4]
// Output - 1

// Example 3
// Input  - [2,3,4,5]
// Output - undefined

// SOLUTION 1 (Brute Force)
// i could use a nested for loop to iterate through the single given array an for each item i am checking through out the array for any other item that matches it, if any is found i return the result else if the loop is exhausted and non is found then i return undefined
// Time Complexity => O(n^2)
// Space Complexity => O(1). no additional space

function recurringCharacterBF (arr, target) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]){
            console.log(arr[i], target === arr[i])
            return arr[i];
         }
      }
   }
   console.log(undefined)
   return undefined
}

const t1 = [[2,5,1,2,3,5,1,2,4], 2];
const t2 = [[2,1,1,2,3,5,1,2,4], 1];
const t3 = [[2,3,4,5], undefined];

recurringCharacterBF(...t2)
// recurringCharacterBF([1, 2, 1], 1)



// SOLUTION 2
// i could use an object that has a constant time insertion and constant time access, then loop through the given array and check if i have the current item under iteration inside my object if i do then we have found our result if not i want to add it and set the value to true.
// Time Complexity => O(n)
// Space Complexity => O(n)
// interviewer - this sounds a whole lot better. can you code this solution
// inter
function recurringCharacter(arr, target){
   const object = {};
   for (let i = 0; i < arr.length; i++) {
      if (object[arr[i]]){
         return arr[i];
      }
      object[arr[i]] = true;
   }
   return undefined;
}

// const t1 = [[2,5,1,2,3,5,1,2,4], 2];
// const t2 = [[2,1,1,2,3,5,1,2,4], 1];
// const t3 = [[2,3,4,5], undefined];

// recurringCharacter(...t3);