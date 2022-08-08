// Javascript - {}
// Topic - White Board Coding Interview
// program - I am going to give you a collection of numbers, and i need you to take this collection of numbers and find a matching pair that is equal to a sum that i am going to give you as well
// Inputs(arrays) and outputs(sum)
// collection 1 : [1, 2, 3, 5, 9] sum = 8
// collection 2 : [1, 2, 4, 4] sum = 8

// SOLUTION 1
// i can simply iterate through the array and on each item, i binary search the rest of the array for a posible match which would give me an nlogn time complexity


// collection 1 : [1, 2, 3, 5, 9] sum = 8
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

      pairFound = findLatter(newCollection, latterValue);
      if (pairFound){
         console.log("PAIR FOUND!");
         return true;
      }
   }
}

findPair([1, 2, 3, 5, 9], 8)