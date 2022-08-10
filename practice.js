// Javascript - {}
// Topic - Leetcode (Rotate Array)
// Problem: Given an array, rotate the array to the right by k steps, where k is non-negative
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105


// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// SOLUTION 1
// using the the k steps we can slice(-k) items from the list and add to slice(0, -k)
var rotate = function(nums, k) {
   return [...nums.slice(-k), ...nums.slice(0, -k)];
};

const t1 = [[1,2,3,4,5,6,7], 3];
const t2 = [[-1,-100,3,99], 2];
const t3 = [[-1], 2];
const t4 = [[1,2], 3];


val = rotate(...t1);  // leetcode -> unaccepted
// console.log(val)

// SOLUTION 2
var rotate2 = function(nums, k) {
   let j = 0
   let current, previous;

   for (let j = 0; j < k; j++) {
      current = nums[nums.length-1];
      for (let i = 0; i >= nums.length; i--) {
         previous = nums[0];
         nums[0] = current;

      }
      j++;
   }
   console.log(nums);
   return nums;
};

// rotate2(...t2);  // leetcode -> unaccepted


// SOLUTION 3
// my solution is to swap in this order
// 1,2,3,4,5,6,7
// 7,6,5,4,3,2,1
// 5,6,7,4,3,2,1
// 5,6,7,1,2,3,4

function reverse(nums, start, end){
   while (start < end){
      let hold = nums[start];
      nums[start] = nums[end];
      nums[end] = hold;
      start++;
      end--;
   }
}

var rotate3 = function(nums, k) {
   reverse(nums, 0, nums.length-1);
   if (k < nums.length-1){
      reverse(nums, 0, k-1);
      reverse(nums, k, nums.length-1);
   }

   console.log(nums)
   return nums;
}

// rotate3(...t4) // leetcode -> unaccepted : passed 30 out of 38 testcases


// SOLUTION 4
function rotate4 (nums, k) {
   arrSize = nums.length;
   k = k % arrSize;
   reverse4(nums, 0, arrSize-1); // reverse entire array
   reverse4(nums, 0, k-1); // reverse the left chunk
   reverse4(nums, k, arrSize-1); // reverse the right chunk

   console.log(nums);
   return nums;
}

function reverse4(nums, start, end){
   while (start < end){
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
   }
}

rotate4(...t1)