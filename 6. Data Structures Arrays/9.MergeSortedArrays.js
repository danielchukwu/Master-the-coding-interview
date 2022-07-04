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
      return arr1.concat(arr2);
   }
   
   const mergedArray = [];
   let i = 0; 
   let j = 0;

   // Length of arrays
   let [arr1Length, arr2Length] = [arr1.length, arr2.length]
   
   while (i < arr1Length || j < arr2Length) {
      // comparison values initialization
      let arr1item = arr1[i];
      let arr2item = arr2[j];

      // Check: add the rest of the op
      if (i === arr1Length){
         mergedArray.push(...arr2.slice(j,));
         break;
      } else if (j === arr2Length){
         mergedArray.push(...arr1.slice(i,));
         break;
      }

      // [0, 3, 4, 31], 
      //           ^
      // [4, 6, 30]
      //        ^
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

      // merged
      // [0, 3, 4, 4, ]
   }
   console.log(mergedArray)
}

const arr1 = [0, 3, 4, 31]; 
const arr2 = [4, 6, 30];

mergeSortedArrays(arr1, arr2)