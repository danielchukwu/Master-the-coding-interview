// Javascript - {}
// Topic - White Board Coding Interview
// program - I am going to give you a collection of numbers, and i need you to take this collection of numbers and find a matching pair that is equal to a sum that i am going to give you as well
// Inputs(arrays) and outputs(sum)
// collection 1 : [1, 2, 5, 9] sum = 8
// collection 2 : [1, 2, 4, 4] sum = 8

// SOLUTION 1
// i can simply iterate through the array and on each item, i binary search the rest of the array for a posible match which would give me an nlogn time complexity


// collection 1 : [1, 2, 5, 9] sum = 8
//                 ^
function findLatter(newCollection, latterValue) {
   while (newCollection.length > 0){
      let mid_i = Math.floor(newCollection.length / 2);  // mid index
      let mid_v = newCollection[mid_i];  // mid value

      if(mid_v == latterValue){   // if latter in pair found
         return true;
         
      } else if (mid_v < latterValue){
         newCollection = newCollection.slice(mid_i+1);
         
      } else if (mid_v > latterValue){
         newCollection = newCollection.slice(0, mid_i);
      }
   }
}

function findPair(collection, givenSum){
   size = collection.length - 1;

   for(let i=0; i<size; i++){
      current = collection[i];
      newCollection = collection.slice(i+1);    // array to binary search
      let latterValue = givenSum - current;     // latter value

      pairFound = findLatter(newCollection, latterValue); // check if latter exists in

      if (pairFound){
         console.log("PAIR FOUND!");
         return true;
      }
   }
}

// findPair([1, 2, 3, 5, 9], 8) // Big O => O(n logn) Quadratic Time

// interviewer. that is one way to solve the problem but that solution would be too expensive for this company you know


// SOLUTION 2
// i can make this linear time by using double pointers to check the first and the last item of the array if they are a pair that adds up to 8 or if not i want to know if our sum is greater or lesser to know whether to shift our first pointer or the last pointer

// collection 1 : [1, 2, 5, 9] sum = 8
//                 ^        ^
function findPair2(collection, givenSum){
   let first = 0;
   let last = collection.length - 1;

   while(first !== last){
      let sum = collection[first] + collection[last];

      if (sum == givenSum){
         console.log("found pair. Hooray!!! -> " + collection[first] + " and " + collection[last]);
         return true;
      } else if (sum < givenSum) {
         first++;
      } else if (sum > givenSum) {
         last--;
      }
   }
}

// findPair2([1, 2, 4, 4], 8);   // Big O => O(n) Linear Time

// interviewer okay that is good, but let me take it a step further now and say that the order of the array is no longer guranteed. which other way can you think of to solve this problem


// SOLUTION 3
// create a set that is to store latter values for each item in the array. loop through array and check on each loop if current value is in the latter set then their 

// collection 1 : [2, 1, 9, 5] sum = 8
//                 ^
function findPair3(collection, givenSum){
   const latters = new Set();

   for(let i=0; i<collection.length; i++){
      currentValue = collection[i];

      if (latters.has(currentValue)){
         console.log("PAIR FOUND! => " + currentValue + " at index " + i);
         return true;
      } else {
         latters.add(givenSum-currentValue);
      }
   }
}

findPair3([1, 2, 4, 4], 8);   // Big O => O(n) Linear Time
