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

function hasCommonItem(arr1, arr2){
   const mergedArray = [...arr1, ...arr2];
   const seen = new Set();

   for (const item in mergedArray) {
      console.log(item);
   }
}

hasCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'i']);