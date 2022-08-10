// Javascript - {}
// Topic - Data Structures and Algorithm
// Program: Given 2 arrays that are sorted, merge this two arrays into one big one
//   Input  = [0, 3, 4, 31], [4, 6, 30]
//   Output = [0, 3, 4, 4, 6, 30, 31]


// ANSWER
// SOLUTION 1
// q - can i assume that the inputs are always going to be arrays
// int - yes you can

// q - are both arrays always going to be sorted individually
// int - yes they are

// q - are both arrays allowed to have identical values
// int - ya they are

// first solution that comes to mind is to use nested for loops to iterate through both arrays and compare both
// [0, 3, 4, 31], [4, 6, 30]
//  ^              ^
// use double pointers to iterate

function mergeArrays(arr1, arr2){
   // check input
   if (typeof(arr1) !== 'object' || typeof(arr2) !== 'object') {return 'input is not an array'}
   // check length of array
   if ((arr1.length === 0) || (arr2.length ===0)){return [...arr1, ...arr2]}

   let mergedArray = []
   let i = 0;
   let j = 0;

   while ( (i < arr1.length) && (j < arr2.length) ) {
      if (arr1[i] <= arr2[j]){
         mergedArray.push(arr1[i]);
         i++;
      } else {
         mergedArray.push(arr2[j]);
         j++;
      }
   }

   // add rest of the array to mergedArray
   mergedArray = [...mergedArray, ...arr1.slice(i), ...arr2.slice(j)]
   console.log(mergedArray)
   return mergedArray;
}

// mergeArrays([0, 3, 4, 31], [4, 6, 30])



var twoSum = function(nums, target) {
   // iterate through the array and add the compliment for each item that possibly adds up 
   // to target -> as the key to the index of that value and keep checking
   const latterDict = {};
   let current;
   
   for(let i=0; i<nums.length; i++){
      if (latterDict.hasOwnProperty(nums[i])){
         return [latterDict[nums[i]], i]
      }
      let latter = target - nums[i];
      latterDict[latter] = i;
   }
   
};

const test1 = [[2,7,11,15], 9]
const test2 = [[3,2,4], 6]
const test3 = [[3,3], 6]

const result = twoSum(...test3)
console.log(result)