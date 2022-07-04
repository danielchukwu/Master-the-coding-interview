// Javascript
// Topic: Interview Question - Data Structures & Algorithm
// Program: Given 2 arrays that are sorted, merge this two arrays into one big one

// Input
// [0, 3, 4, 31], [4, 6, 30]
// Output
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2){
   // Check Input
   if (arr1.length === 0 || arr2.length === 0){
      arr1.push(...arr2)
      return arr1;
   }
   
   let mergedArray = [];
   let i = 0; 
   let j = 0;

   // Length of arrays
   let [arr1Length, arr2Length] = [arr1.length, arr2.length]
   
   while (i < arr1Length || j < arr2Length) {
      // comparison values initialization
      let arr1item = arr1[i];
      let arr2item = arr2[j];

      // Check: to see if we have added all the elements of either arr1 or arr2
      [mergedArray, done] = checkArryays(mergedArray, arr1, arr2, arr1Length, arr2Length, i, j);
      if (done) break;

      // Merge Arrays: add items from both arrays in a sorted order
      [mergedArray, i, j] = mergeArrays(mergedArray, arr1item, arr2item, i, j);
   }
   console.log(mergedArray)
}

const arr1 = []; 
const arr2 = [5, 6, 7];

mergeSortedArrays(arr1, arr2)

function checkArryays(mergedArray, arr1, arr2, arr1Length, arr2Length, i, j) {
   // Program is done variable
   let done = false;

   if (i === arr1Length){
      mergedArray.push(...arr2.slice(j,));
      done = true;
   } else if (j === arr2Length){
      mergedArray.push(...arr1.slice(i,));
      done = true;
   }
   return [mergedArray, done]
}

function mergeArrays (mergedArray, arr1item, arr2item, i, j) {
   if (arr1item === arr2item){
      mergedArray.push(arr1item);
      mergedArray.push(arr2item);
      i++;
      j++;
   } else if (arr1item < arr2item) {
      mergedArray.push(arr1item);
      i++;         
   } else if (arr1item > arr2item) {
      mergedArray.push(arr2item);
      j++;
   }

   return [mergedArray, i, j]
}