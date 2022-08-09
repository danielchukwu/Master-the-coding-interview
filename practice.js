// Javascript - {}
// Topic - coding interview
// Problem:
//    Given 2 Arrays, create a functon that let's a user know (true/false) whether these two arrays contain any common items
// E.g 
// const array1 = ['a', 'b', 'c', 'x']   |  const array1 = ['a', 'b', 'c', 'x']
// const array2 - ['z', 'y', 'i']        |  const array2 - ['z', 'y', 'x']
// should return False                   |  should return True


// ANSWER
// SOLUTION 1
// first solution would obviously be to use a nested for loop and compair both arrays until we find a match to return true or don't to return false, but that would be a quadratic time complexity soo it wouldn't be the best solution except time efficiency wasn't the goal but space and readability

// SOLUTION 2
// q - do we have space
// interviewer - yes we do
// q - how much does the array grow
// interviewerr - for now only the given size but it is expected to grow to over a million over the next one year
// q - i noticed that array1 is sorted in a descending order and array2 is sorted in an ascending order, is that intentional and should i always expect that
// interviewer - ya you can

// i could merge both arrays, then use a set datastructure that has a constant time insertion and lookup and then iterate through the merged array and ask on each iteration is the current iter element in array, if so then return true if not add current itter element to the set datastructure and continue looping. if merged array is exhausted without any finding any identical element then return false 
// ['a', 'b', 'c', 'x', 'z', 'y', 'i']

function hasCommonItem2(arr1, arr2){
   const mergedArray = [...arr1, ...arr2]; // O(a+b)
   const seen = new Set();     // O(1)

   for (const k in mergedArray){
      if (seen.has(mergedArray[k])){
         return true;
      }
      seen.add(current); // O(n)
   }
   return false;
}

const arr1Test = [['a', 'b', 'c', 'x'], ['z', 'y', 'i']];
const arr2Test = [['a', 'b', 'c', 'x'], ['z', 'y', 'x']];
// hasCommonItem2(...arr2Test);     // Time = O(n), Space = O(n)


// SOLUTION 3
// i could also convert the first array into a hashmap(or object) that contains all the values of array 1 as keys and then loop through the second array and check on each iteration if the current value is inside the hashmap -> if it is then we return true else we continue looping. once array 2 is exhausted with no found common item we return false. we use the hash map because it has O(1) in insertion and lookup

function hasCommonItem3(arr1, arr2){
   // loop through first array and add all items as keys in our hashmap object
   const hashmap = {};
   arr1.forEach(element => {
      if(!hashmap[element]){
         hashmap[element] = true;
      }
   });
   
   // loop through second array and check if each item is in our hashmap object
   arr2.forEach(element => {
      if (hashmap[element]){
         return true;
      }
   })
}

// hasCommonItem3(...arr2Test);     // Time = O(n), Space = O(a)


// SOLUTION 4
// if readability is what's more important and not time we can also write this using a javascript provided method which is

function hasCommonItem4(arr1, arr2){
   return arr1.some(item => arr2.includes(item));
}
let commonFound = hasCommonItem4(...arr2Test);     // Time = O(n), Space = O(a)
console.log(commonFound);

