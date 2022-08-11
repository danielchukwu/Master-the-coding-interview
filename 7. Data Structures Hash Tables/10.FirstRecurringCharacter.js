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

function recurringCharacter(arr, target){
   const object = {};
   for (let i = 0; i < arr.length; i++) {
      if (object[arr[i]]){
         console.log(arr[i], target === arr[i])
         return arr[i];
      }
      object[arr[i]] = true;
   }
   return undefined;
}

const t1 = [[2,5,1,2,3,5,1,2,4], 2];
const t2 = [[2,1,1,2,3,5,1,2,4], 1];
const t3 = [[2,3,4,5], undefined];

recurringCharacter(...t1);