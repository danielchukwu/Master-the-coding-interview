// Javascript - {}
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that 
// they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
   // iterate through the array and add the compliment for each item that possibly adds up 
   // to target -> as the key to the index of that value and keep checking
   const latterDict = {};
   
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