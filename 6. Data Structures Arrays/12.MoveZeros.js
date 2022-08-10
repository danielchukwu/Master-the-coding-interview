// Javascript - {}
// Topic - Leetcode (move zeros)
// Problem: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the
// non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:


// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// ANSWER

var moveZeroes = function(nums) {
   let count = 0;
   for (let i = 0; i<nums.length; i++) {
      nums[i] = nums[i+count]
      if(nums[i]===0){
         count++;
         nums[i] = nums[i+count]
      }

      if (nums[i] === undefined){
         nums[i] = 0;
      }
   }
   console.log(nums);
   return nums;
};

const t1 = [0,1,0,3,12];
const t2 = [0];
const t3 = [0, 0, 1];
const t4 = [1];

moveZeroes(t3)  // test case 3 fails for this solution and 4 fails

// ANSWER 2 - 
var moveZeroes2 = function(nums) {
   let count = 0;
   for (let i = 0; i<nums.length; i++) {
      if (nums[i] === 0){
         count ++;
      } else if (count > 0){
         nums[i-count] = nums[i];
         nums[i] = 0;
      }
   }
   console.log(nums);
   return nums;
};

moveZeroes2(t4)  // perfect