// Javascript - {}
// Topic - Leetcode (contains duplicate)
// Problem: Given an integer array nums, return true if any value appears at least twice in the array, and return 
// false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// Accepted
// 1,907,335
// Submission



// SOLUTION 1
var containsDuplicate = function(nums) {
   const seenSet = new Set();
   for (let i = 0; i < nums.length; i++) {
      if (seenSet.has(nums[i])){
         console.log(true);
         return true;
      }
      seenSet.add(nums[i]);
   }
   console.log(false);
   return false;
};

const t1 = [1,2,3,1];
const t2 = [1,2,3,4];
const t3 = [1,1,1,3,3,4,3,2,4,2];

containsDuplicate(t3);